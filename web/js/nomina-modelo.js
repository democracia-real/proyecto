/**
 * Modelo de nómina común a las calculadoras (nómina, IA y empleo, pensiones).
 *
 * Parámetros de 2026 para un contrato indefinido de oficina, sin hijos.
 * Cada parámetro con cifra publicada está en web/data/cifras.json; si cambias
 * uno aquí, cámbialo también en el registro.
 */
(function () {
    'use strict';

    var PARAMETROS = {
        // Cotizaciones 2026 (Orden PJC/297/2026; MEI según la DT 43.ª de la LGSS)
        // Empresa: contingencias comunes, desempleo, FOGASA, FP, MEI y AT/EP de oficina
        ssEmpresa: 0.2360 + 0.0550 + 0.0020 + 0.0060 + 0.0075 + 0.0150,
        // Trabajador: contingencias comunes, desempleo, FP y MEI
        ssTrabajador: 0.0470 + 0.0155 + 0.0010 + 0.0015,
        // Base máxima: 5.101,20 €/mes x 12
        baseMaxima: 61214.40,

        // IRPF: escala estatal del art. 63 LIRPF duplicada como aproximación de la
        // autonómica (cada comunidad tiene la suya), reducción del art. 20,
        // 2.000 € de otros gastos (art. 19.2.f) y mínimo personal de 5.550 €
        tramos: [[12450, 0.19], [20200, 0.24], [35200, 0.30], [60000, 0.37], [300000, 0.45], [Infinity, 0.47]],
        otrosGastos: 2000,
        minimoPersonal: 5550,

        // Reparto del gasto público de 2024 (Eurostat, COFOG, % del total)
        gastoPensiones: 0.277,  // vejez + supervivencia
        gastoIntereses: 0.055
    };

    function escala(base) {
        var cuota = 0;
        var desde = 0;
        for (var i = 0; i < PARAMETROS.tramos.length && base > desde; i++) {
            var hasta = PARAMETROS.tramos[i][0];
            cuota += (Math.min(base, hasta) - desde) * PARAMETROS.tramos[i][1];
            desde = hasta;
        }
        return cuota;
    }

    function reduccionTrabajo(rendimientoNeto) {
        if (rendimientoNeto <= 14852) return 7302;
        if (rendimientoNeto <= 17673.52) return 7302 - 1.75 * (rendimientoNeto - 14852);
        if (rendimientoNeto < 19747.5) return 2364.34 - 1.14 * (rendimientoNeto - 17673.52);
        return 0;
    }

    function calcular(brutoAnual) {
        var bruto = Math.max(12000, Math.min(300000, brutoAnual || 28000));
        var baseCotizacion = Math.min(bruto, PARAMETROS.baseMaxima);
        var ssEmpresa = Math.round(baseCotizacion * PARAMETROS.ssEmpresa);
        var ssTrabajador = Math.round(baseCotizacion * PARAMETROS.ssTrabajador);

        var rendimientoNeto = bruto - ssTrabajador;
        var baseLiquidable = Math.max(0, rendimientoNeto - PARAMETROS.otrosGastos - reduccionTrabajo(rendimientoNeto));
        var irpf = Math.max(0, Math.round(escala(baseLiquidable) - escala(Math.min(PARAMETROS.minimoPersonal, baseLiquidable))));

        var costeEmpresa = bruto + ssEmpresa;
        var impuestos = ssEmpresa + ssTrabajador + irpf;
        var neto = bruto - ssTrabajador - irpf;
        // Cuña fiscal con la definición de la OCDE: IRPF y cotizaciones sobre el coste laboral, sin IVA
        var cunaPct = Math.round((impuestos / costeEmpresa) * 1000) / 10;

        return {
            grossAnnual: bruto,
            employerSS: ssEmpresa,
            workerSS: ssTrabajador,
            irpf: irpf,
            netAnnual: neto,
            totalCostEmployer: costeEmpresa,
            totalStateTake: impuestos,
            taxWedgePct: cunaPct,
            toPensions: Math.round(impuestos * PARAMETROS.gastoPensiones),
            toDebtInterest: Math.round(impuestos * PARAMETROS.gastoIntereses)
        };
    }

    window.NominaModelo = {
        parametros: PARAMETROS,
        calcular: calcular
    };
})();
