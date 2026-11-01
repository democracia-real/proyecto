/**
 * Modelo de la calculadora de autónomos (2026).
 *
 * Cuota de autónomos con el sistema de cotización por ingresos reales e IRPF
 * estimado en estimación directa simplificada, para una persona sin hijos, sin
 * otras rentas, que no depende de un solo cliente y que cotiza por la base mínima
 * de su tramo. La escala del IRPF y la comparación con un asalariado salen de
 * nomina-modelo.js, que hay que cargar antes: así las dos calculadoras gravan igual.
 *
 * Cada parámetro con cifra publicada está en web/data/cifras.json; si cambias
 * uno aquí, cámbialo también en el registro. Fuentes y casos de contraste en
 * data/autonomo-2026/.
 */
(function () {
    'use strict';

    var PARAMETROS = {
        // Seguridad Social, bases y tipos de 2026 (RETA). Rendimientos computables
        // mensuales hasta los que llega cada tramo y sus bases, en €/mes
        tramos: [
            { tabla: 'reducida', n: 1, hasta: 670, baseMin: 653.59, baseMax: 718.94 },
            { tabla: 'reducida', n: 2, hasta: 900, baseMin: 718.95, baseMax: 900 },
            // El tramo 3 reducido acaba justo antes de 1.166,70; con 1.166,70 empieza la tabla general
            { tabla: 'reducida', n: 3, hasta: 1166.70, sinIncluir: true, baseMin: 849.67, baseMax: 1166.70 },
            { tabla: 'general', n: 1, hasta: 1300, baseMin: 950.98, baseMax: 1300 },
            { tabla: 'general', n: 2, hasta: 1500, baseMin: 960.78, baseMax: 1500 },
            { tabla: 'general', n: 3, hasta: 1700, baseMin: 960.78, baseMax: 1700 },
            { tabla: 'general', n: 4, hasta: 1850, baseMin: 1143.79, baseMax: 1850 },
            { tabla: 'general', n: 5, hasta: 2030, baseMin: 1209.15, baseMax: 2030 },
            { tabla: 'general', n: 6, hasta: 2330, baseMin: 1274.51, baseMax: 2330 },
            { tabla: 'general', n: 7, hasta: 2760, baseMin: 1356.21, baseMax: 2760 },
            { tabla: 'general', n: 8, hasta: 3190, baseMin: 1437.91, baseMax: 3190 },
            { tabla: 'general', n: 9, hasta: 3620, baseMin: 1519.61, baseMax: 3620 },
            { tabla: 'general', n: 10, hasta: 4050, baseMin: 1601.31, baseMax: 4050 },
            { tabla: 'general', n: 11, hasta: 6000, baseMin: 1732.03, baseMax: 5101.20 },
            { tabla: 'general', n: 12, hasta: Infinity, baseMin: 1928.10, baseMax: 5101.20 }
        ],
        // Contingencias comunes, profesionales, cese de actividad, FP y MEI: 31,50%
        tipoCuota: 0.2830 + 0.0130 + 0.0090 + 0.0010 + 0.0090,
        // LGSS, art. 308.1.c): al rendimiento neto se le suma la cuota y se le resta un 7%
        gastosGenericos: 0.07,

        // IRPF en estimación directa simplificada (RIRPF, art. 30.2.ª): provisiones y
        // gastos de difícil justificación, un 5% del rendimiento neto con un máximo anual
        dificilJustificacion: 0.05,
        dificilJustificacionMax: 2000,
        // LIRPF, art. 32.2.3.º: reducción para quien tiene rentas por debajo de 12.000 €
        rentasBajas: { importe: 1620, desde: 8000, hasta: 12000, pendiente: 0.405 }
    };

    function redondear2(x) {
        return Math.round(x * 100) / 100;
    }

    function buscarTramo(computableMensual) {
        var t = PARAMETROS.tramos;
        for (var i = 0; i < t.length; i++) {
            if (t[i].sinIncluir ? computableMensual < t[i].hasta : computableMensual <= t[i].hasta) return t[i];
        }
        return t[t.length - 1];
    }

    function cuotaMensual(tramo) {
        return redondear2(tramo.baseMin * PARAMETROS.tipoCuota);
    }

    // Rendimiento neto del IRPF (casilla 0224 del modelo 100): ingresos menos gastos,
    // incluida la cuota, menos las provisiones y gastos de difícil justificación
    function rendimientoNetoIrpf(ingresosMenosGastos, cuotaAnual) {
        var previo = ingresosMenosGastos - cuotaAnual;
        var dificil = previo > 0 ? Math.min(previo * PARAMETROS.dificilJustificacion, PARAMETROS.dificilJustificacionMax) : 0;
        return previo - dificil;
    }

    // Rendimiento que decide el tramo: rendimiento neto más la cuota, menos los gastos genéricos
    function rendimientoComputable(rendimientoNeto, cuotaAnual) {
        return (rendimientoNeto + cuotaAnual) * (1 - PARAMETROS.gastosGenericos);
    }

    function reduccionRentasBajas(rentas) {
        var r = PARAMETROS.rentasBajas;
        if (rentas <= 0 || rentas >= r.hasta) return 0;
        var reduccion = rentas <= r.desde ? r.importe : r.importe - r.pendiente * (rentas - r.desde);
        // No puede dejar el rendimiento en negativo
        return Math.min(reduccion, rentas);
    }

    function escala(base) {
        var tramos = window.NominaModelo.parametros.tramos;
        var cuota = 0;
        var desde = 0;
        for (var i = 0; i < tramos.length && base > desde; i++) {
            cuota += (Math.min(base, tramos[i][0]) - desde) * tramos[i][1];
            desde = tramos[i][0];
        }
        return cuota;
    }

    function cuotaIrpf(baseLiquidable) {
        var minimo = window.NominaModelo.parametros.minimoPersonal;
        return Math.max(0, Math.round(escala(baseLiquidable) - escala(Math.min(minimo, baseLiquidable))));
    }

    // Asalariado cuyo puesto cuesta a la empresa lo mismo que el autónomo genera
    // (ingresos menos gastos, sin la cuota). Fuera del rango del modelo de nómina
    // (12.000 a 300.000 € brutos) devuelve solo { fuera: 'bajo' } o { fuera: 'alto' }
    function asalariadoMismoCoste(coste) {
        var p = window.NominaModelo.parametros;
        var bruto = coste / (1 + p.ssEmpresa);
        if (bruto > p.baseMaxima) bruto = coste - p.baseMaxima * p.ssEmpresa;
        bruto = Math.round(bruto);
        if (bruto < 12000) return { fuera: 'bajo' };
        if (bruto > 300000) return { fuera: 'alto' };
        var n = window.NominaModelo.calcular(bruto);
        return {
            bruto: n.grossAnnual,
            coste: n.totalCostEmployer,
            seguridadSocial: n.employerSS + n.workerSS,
            irpf: n.irpf,
            neto: n.netAnnual,
            baseMensual: Math.min(n.grossAnnual, p.baseMaxima) / 12
        };
    }

    function calcular(rendimientoMensual) {
        var mensual = Math.max(0, Math.min(50000, rendimientoMensual || 0));
        var anual = mensual * 12;

        // La cuota entra en el rendimiento y el rendimiento decide el tramo:
        // se parte del tramo sin cuota y se repite hasta que el tramo no cambia
        var tramo = buscarTramo(anual * (1 - PARAMETROS.gastosGenericos) / 12);
        for (var i = 0; i < 5; i++) {
            var cuota = cuotaMensual(tramo) * 12;
            var siguiente = buscarTramo(rendimientoComputable(rendimientoNetoIrpf(anual, cuota), cuota) / 12);
            if (siguiente === tramo) break;
            tramo = siguiente;
        }

        var cuotaMes = cuotaMensual(tramo);
        var cuotaAnual = redondear2(cuotaMes * 12);
        var netoIrpf = rendimientoNetoIrpf(anual, cuotaAnual);
        var reduccion = reduccionRentasBajas(netoIrpf);
        var baseLiquidable = Math.max(0, netoIrpf - reduccion);
        var irpf = cuotaIrpf(baseLiquidable);
        var queda = anual - cuotaAnual - irpf;
        var asalariado = asalariadoMismoCoste(anual);

        return {
            rendimientoMensual: mensual,
            rendimientoAnual: anual,
            computableMensual: rendimientoComputable(netoIrpf, cuotaAnual) / 12,
            tramo: tramo,
            baseCotizacion: tramo.baseMin,
            cuotaMensual: cuotaMes,
            cuotaAnual: cuotaAnual,
            dificilJustificacion: anual - cuotaAnual - netoIrpf,
            rendimientoNetoIrpf: netoIrpf,
            reduccion: reduccion,
            baseLiquidable: baseLiquidable,
            irpf: irpf,
            queda: queda,
            totalEstado: cuotaAnual + irpf,
            pctCuota: anual > 0 ? cuotaAnual / anual * 100 : 0,
            pctEstado: anual > 0 ? (cuotaAnual + irpf) / anual * 100 : 0,
            asalariado: asalariado.fuera ? null : asalariado,
            asalariadoFuera: asalariado.fuera || null
        };
    }

    window.AutonomoModelo = {
        parametros: PARAMETROS,
        calcular: calcular,
        // Piezas sueltas para los casos de contraste (data/autonomo-2026/contraste.js)
        buscarTramo: buscarTramo,
        cuotaMensual: cuotaMensual,
        rendimientoNetoIrpf: rendimientoNetoIrpf,
        rendimientoComputable: rendimientoComputable,
        reduccionRentasBajas: reduccionRentasBajas,
        cuotaIrpf: cuotaIrpf
    };
})();
