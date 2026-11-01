#!/usr/bin/env node
/**
 * Casos de contraste de la calculadora de autónomos.
 *
 * Carga web/js/nomina-modelo.js y web/js/autonomo-modelo.js tal como los usa la
 * página y comprueba que dan lo mismo que los casos publicados por la Seguridad
 * Social y la Agencia Tributaria (detalle y fuentes en VERIFICACION.md).
 *
 * Uso: node data/autonomo-2026/contraste.js
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const WEB = path.join(__dirname, '..', '..', 'web', 'js');
const ventana = {};
vm.createContext(ventana);
ventana.window = ventana;
for (const f of ['nomina-modelo.js', 'autonomo-modelo.js']) {
    vm.runInContext(fs.readFileSync(path.join(WEB, f), 'utf8'), ventana, { filename: f });
}
const A = ventana.AutonomoModelo;

let fallos = 0;
function igual(nombre, obtenido, esperado, tolerancia = 0.005) {
    const ok = Math.abs(obtenido - esperado) <= tolerancia;
    if (!ok) fallos++;
    console.log(`${ok ? 'OK   ' : 'FALLO'} ${nombre}: ${obtenido} (esperado ${esperado})`);
}
function mismoTramo(nombre, tramo, tabla, n) {
    const ok = tramo.tabla === tabla && tramo.n === n;
    if (!ok) fallos++;
    console.log(`${ok ? 'OK   ' : 'FALLO'} ${nombre}: tramo ${tramo.n} de la tabla ${tramo.tabla} (esperado tramo ${n} de la ${tabla})`);
}

// 1. Simulador oficial de la Seguridad Social (Importass, «Calculadora de cuotas
//    para autónomos 2026»), consultado el 1 nov 2026: cuota mínima de tres tramos
console.log('\n1. Simulador de cuotas de autónomos 2026 (Importass)');
const simulador = [
    ['Menos de 670 €/mes', 600, 205.88, 653.59],
    ['1.700,01 - 1.850 €/mes', 1800, 360.29, 1143.79],
    ['4.050,01 - 6.000 €/mes', 5000, 545.59, 1732.03]
];
for (const [rango, rendimiento, cuota, base] of simulador) {
    const tramo = A.buscarTramo(rendimiento);
    igual(`${rango}, cuota mínima`, A.cuotaMensual(tramo), cuota);
    igual(`${rango}, base mínima`, tramo.baseMin, base);
}

// 2. Revista de la Seguridad Social (14 dic 2022): rendimiento neto mensual, 7% de
//    gastos genéricos y tramo. Las cuotas de la revista son de 2023; aquí se
//    comprueba el método, y la cuota de 2026 de ese tramo coincide con el simulador
console.log('\n2. Ejemplos de la revista de la Seguridad Social');
const revista = [
    ['Periodista: 715 €/mes', 715, 664.95, 'reducida', 1, 205.88],
    ['Tienda de moda: 1.980 €/mes', 1980, 1841.40, 'general', 4, 360.29]
];
for (const [nombre, neto, promedio, tabla, n, cuota2026] of revista) {
    const computable = A.rendimientoComputable(neto * 12, 0) / 12;
    igual(`${nombre}, promedio tras el 7%`, Math.round(computable * 100) / 100, promedio);
    const tramo = A.buscarTramo(computable);
    mismoTramo(nombre, tramo, tabla, n);
    igual(`${nombre}, cuota de ese tramo en 2026`, A.cuotaMensual(tramo), cuota2026);
}

// 3. AEAT, Manual práctico de Renta 2025, capítulo 7, caso práctico (médico
//    radiólogo en estimación directa simplificada): ingresos fiscales 138.400 €,
//    gastos fiscales 78.300 € (con 3.300 € de cuota de autónomos), provisiones y
//    gastos de difícil justificación 2.000 € (tope), rendimiento neto 58.100 €
console.log('\n3. AEAT, Renta 2025, caso práctico de estimación directa simplificada');
igual('Rendimiento neto con el tope de 2.000 €', A.rendimientoNetoIrpf(138400 - (78300 - 3300), 3300), 58100);
// Sus otras rentas (1.500 €) más el rendimiento superan 12.000 €: sin reducción del art. 32.2.3.º
igual('Reducción del art. 32.2.3.º', A.reduccionRentasBajas(58100 + 1500), 0);

// 4. AEAT, Manual práctico de Renta 2025, capítulo 15, ejemplo de cuotas íntegras:
//    base liquidable general 23.900 €, mínimo 5.550 €. Cuota estatal 2.140,50 € y
//    autonómica de Aragón 2.094,64 €. El modelo duplica la escala estatal como
//    aproximación de la autonómica: la mitad estatal debe coincidir exactamente
console.log('\n4. AEAT, Renta 2025, ejemplo de cuotas íntegras');
const cuota = A.cuotaIrpf(23900);
igual('Cuota estatal (la mitad de la del modelo)', cuota / 2, 2140.50, 0.5);
console.log(`INFO  Cuota del modelo ${cuota} € frente a 2.140,50 + 2.094,64 = 4.235,14 € en Aragón: ${(cuota - 4235.14).toFixed(2)} € de diferencia por la aproximación autonómica`);

// 5. Reducción del art. 32.2.3.º según la tabla del manual de la AEAT
console.log('\n5. Reducción para rentas inferiores a 12.000 € (AEAT, Renta 2025, cap. 7)');
igual('Rentas de 8.000 €', A.reduccionRentasBajas(8000), 1620);
igual('Rentas de 10.000 €', A.reduccionRentasBajas(10000), 1620 - 0.405 * 2000);
igual('Rentas de 12.000 €', A.reduccionRentasBajas(12000), 0);

console.log(`\n${fallos === 0 ? 'Todos los casos coinciden.' : fallos + ' casos no coinciden.'}`);
process.exit(fallos === 0 ? 0 : 1);
