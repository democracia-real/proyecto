# Verificación: calculadora de autónomos (2026)

*1 de noviembre de 2026. Página: [`web/autonomo.html`](../../web/autonomo.html). Modelo: [`web/js/autonomo-modelo.js`](../../web/js/autonomo-modelo.js). Fuentes: [`fuente/FUENTES.md`](fuente/FUENTES.md).*

## Quién verificó qué

| Paso | Quién | Resultado |
|------|-------|-----------|
| Fuentes descargadas, modelo y casos de contraste | IA: Claude Opus 5.5 (Claude Code) | Los 19 casos coinciden ([`contraste.js`](contraste.js)) |
| **Segunda comprobación independiente** de las cifras y de tres casos calculados a mano | IA: **Claude Sonnet 5.5**, otro modelo, sin acceso al modelo, a la página, al registro ni a estas fuentes | **Coinciden 8 de 9 cifras y los 3 casos.** La tarifa plana no se usa |
| Revisión humana | Nadie | No hecha |

**Ninguna persona ha revisado este cálculo.** Si encuentras un error, [abre un issue](https://github.com/democracia-real/proyecto/issues): se corrige y se dice.

## Qué calcula

Para alguien en estimación directa simplificada, sin hijos, sin otras rentas, que no depende de un solo cliente, que no está en su primer año y que cotiza por la base mínima de su tramo, a partir de lo que gana al mes (ingresos menos gastos, **sin** la cuota):

1. **Cuota.** El tramo lo decide el rendimiento computable (LGSS, art. 308.1.c): rendimiento neto del IRPF + cuota anual, menos el 7%, entre 12. Como la cuota es gasto deducible del IRPF y a la vez depende del tramo, el modelo empieza por el tramo sin cuota y repite hasta que no cambia (en la práctica, una o dos vueltas). Cuota mensual = base mínima × 31,50%, redondeada al céntimo.
2. **IRPF.** Rendimiento neto previo = lo que gana − cuota. Provisiones y gastos de difícil justificación: 5% de ese rendimiento, máximo 2.000 € (RIRPF, art. 30.2.ª). Reducción del art. 32.2.3.º si las rentas no llegan a 12.000 €. Cuota = escala(base) − escala(mínimo de 5.550 €), con la escala estatal duplicada como aproximación de la autonómica, la misma que usa [`nomina-modelo.js`](../../web/js/nomina-modelo.js).
3. **Comparación.** Un asalariado indefinido de oficina cuyo puesto cuesta a la empresa (bruto + cotización empresarial del 32,15%) lo mismo que gana el autónomo sin restar la cuota, calculado con `nomina-modelo.js`. Si su bruto quedara por debajo de 12.000 € (límite de ese modelo), no se compara.

## Casos de contraste

Se reproducen con `node data/autonomo-2026/contraste.js`.

### 1. Simulador de la Seguridad Social (Importass), 1 nov 2026

[«Calculadora de cuotas para autónomos 2026»](https://portal.seg-social.gob.es/wps/portal/importass/importass/tramites/simuladorRETAPublico). Se eligió cada rango de ingresos netos mensuales y se anotó la cuota mínima, la base y el desglose que devuelve («Ver detalle»):

| Rango elegido | Simulador: cuota mínima | Simulador: base | Desglose del simulador | Modelo |
|---------------|------------------------:|----------------:|------------------------|-------:|
| Menos de 670 €/mes | 205,88 € (máx. 226,47) | 653,59 € | 184,97 + 8,50 + 5,88 + 0,65 + 5,88 | 205,88 € |
| 1.700,01 - 1.850 €/mes | 360,29 € (máx. 582,75) | 1.143,79 € | 323,69 + 14,87 + 10,29 + 1,14 + 10,30 | 360,29 € |
| 4.050,01 - 6.000 €/mes | 545,59 € (máx. 1.606,88) | 1.732,03 € | 490,16 + 22,52 + 15,59 + 1,73 + 15,59 | 545,59 € |

El desglose es contingencias comunes, profesionales, cese de actividad, formación profesional y MEI: confirma el tipo total del 31,50% (28,30 + 1,30 + 0,90 + 0,10 + 0,90). Los máximos coinciden con base máxima × 31,50% (718,94, 1.850 y 5.101,20 €).

### 2. Revista de la Seguridad Social, 14 dic 2022

[Dos ejemplos](https://revista.seg-social.es/-/20221214-dudas-aut%C3%B3nomos) de cómo se pasa del rendimiento neto al tramo:

| Ejemplo | Rendimiento neto | Revista: tras el 7% | Modelo: tras el 7% | Tramo (revista y modelo) | Cuota de ese tramo en 2026 |
|---------|-----------------:|--------------------:|-------------------:|--------------------------|---------------------------:|
| Periodista | 715 €/mes | 664,95 € | 664,95 € | Tramo 1, tabla reducida | 205,88 € (= simulador) |
| Tienda de moda | 1.980 €/mes | 1.841,40 € | 1.841,40 € | Tramo 4, tabla general | 360,29 € (= simulador) |

La revista da cuotas de 2023 (230 y 310 €), con la tabla y el tipo de aquel año; aquí solo se contrasta el método. Sus ejemplos simplifican: llaman rendimiento neto a ingresos menos gastos, sin sumar la cuota ni restar los gastos de difícil justificación.

### 3. AEAT, Manual práctico de Renta 2025, capítulo 7: caso práctico

[Médico radiólogo en estimación directa simplificada](https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c07-rendimientos-actividades-economicas-estimacion-directa/caso-practico.html). Ingresos fiscales 138.400 €; gastos fiscales 78.300 €, de ellos 3.300 € de cuota de autónomos.

| Concepto | AEAT | Modelo |
|----------|-----:|-------:|
| Provisiones y gastos de difícil justificación | 2.000 € (5% de 60.100 = 3.005, con tope) | 2.000 € |
| Rendimiento neto | 58.100 € | 58.100 € |
| Reducción del art. 32.2.3.º (otras rentas 1.500 €) | No aplica | 0 € |

### 4. AEAT, Manual práctico de Renta 2025, capítulo 15: cuotas íntegras

[Ejemplo](https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c15-calculo-impuesto-determinacion-cuotas-integras/ejemplo-practico-calculo-cuotas-integras-autonomica.html) con base liquidable general de 23.900 € y mínimo de 5.550 €, residente en Aragón:

| Concepto | AEAT | Modelo |
|----------|-----:|-------:|
| Cuota íntegra general estatal | 2.140,50 € | 2.140,50 € (la mitad de 4.281 €) |
| Cuota íntegra general autonómica (Aragón) | 2.094,64 € | 2.140,50 € (aproximación: escala estatal) |
| Total | 4.235,14 € | 4.281 € (+45,86 €, +1,1%) |

La parte estatal coincide al céntimo. La autonómica es una aproximación declarada: cada comunidad tiene su escala, y en este caso la de Aragón da 45,86 € menos.

### 5. Reducción del art. 32.2.3.º

Con la tabla del [manual de la AEAT](https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c07-rendimientos-actividades-economicas-estimacion-directa/fase-3-determinacion-rendimiento-neto-total/reducciones-generales-ejercicio/reduccion-contribuyentes-rentas-no-exentas.html): 8.000 € → 1.620 €; 10.000 € → 810 €; 12.000 € → 0 €. El modelo da lo mismo.

## Segunda comprobación independiente

Una segunda IA (Claude Sonnet 5.5) recibió solo las preguntas: qué dice cada fuente oficial y cuánto pagaría un autónomo con 1.000, 2.500 y 5.000 €/mes. No vio el modelo, la página, el registro ni estas fuentes. Descargó todo de nuevo y lo calculó con un script propio.

| Cifra | Primera IA | Segunda IA | Resultado |
|-------|------------|------------|-----------|
| Tabla de tramos y bases de 2026 (15 tramos) | Web de la Seguridad Social | La misma tabla en la Orden PJC/297/2026, art. 18 (BOE-A-2026-7296), y en la web de la Seguridad Social | Coincide, tramo a tramo |
| Tipo total | 31,50% | 28,30 + 1,30 + 0,90 + 0,10 + 0,90 = 31,50% (Orden PJC/297/2026) | Coincide |
| Rendimiento computable | Neto + cuotas, −7% (LGSS, art. 308) | Lo mismo; casillas 0224 + 0186 (guía de Importass y AEAT) | Coincide |
| Difícil justificación | 5%, máximo 2.000 €; solo Ceuta cambia en 2026 | Lo mismo | Coincide |
| Reducción del art. 32.2.3.º | 1.620 € / −0,405 entre 8.000 y 12.000 € | Lo mismo | Coincide |
| Escala estatal y mínimo | Art. 63.1 y 5.550 € | Lo mismo | Coincide |
| Empresas sin asalariados y con menos de 10 | 54,4% y 95,12% | 54,4% y 95,12% (misma suma) | Coincide |
| Días para constituir una SL | 10 a 22 | 10 a 22; encontró la URL de worldbank.org, con el mismo fichero | Coincide |
| Uso de IA por tamaño | 21,4% (con Internet) y 33,6% | Lo mismo, con el mismo aviso sobre el denominador | Coincide |
| **Tarifa plana 2026** | 88,64 €/mes (guía de Importass) | 88,64 € en la misma guía, pero **no cuadra** con 80 € + 0,9% de 950,98 € (= 88,56 €) y **no hay norma en el BOE** que fije los 80 € para 2026: el RDL 13/2022 los fija solo para 2023-2025 | **No se usa.** En el registro queda como «discutido» |

Casos calculados a mano por la segunda IA, frente al modelo:

| Lo que gana al mes | Tramo | Cuota/mes | IRPF (segunda IA) | IRPF (modelo) | Le queda (segunda IA) | Le queda (modelo) |
|-------------------:|-------|----------:|------------------:|--------------:|----------------------:|------------------:|
| 1.000 € | Reducida 2 | 226,47 € | 376,13 € | 376 € | 8.906,23 € | 8.906 € |
| 2.500 € | General 6 | 401,47 € | 4.287,97 € | 4.288 € | 20.894,39 € | 20.894 € |
| 5.000 € | General 11 | 545,59 € | 13.684,58 € | 13.685 € | 39.768,34 € | 39.768 € |

Resolvió la circularidad (la cuota es gasto del IRPF y depende del tramo) probando los 15 tramos: en cada caso solo uno es coherente, el mismo que da el modelo. Avisó de que el caso de 1.000 € queda a unos 6 €/mes del límite de 900 € entre los tramos 2 y 3 de la tabla reducida.

Después de la segunda comprobación se cambió: la tarifa plana sale de la página y del modelo; el informe del Banco Mundial se cita con la URL de worldbank.org (comprobado que es el mismo fichero, SHA-256 `0634ef9a…`); y la tabla de cuotas cita también la Orden PJC/297/2026.

## Lo que queda por revisar

**Ninguna persona ha revisado nada de esto.** Lo que más convendría mirar, por orden:

1. **La base mínima.** La calculadora supone que el autónomo cotiza por la base mínima de su tramo. Es lo más barato, no necesariamente lo más habitual: no hay una cifra oficial en este registro de cuántos lo hacen, y la página no lo afirma.
2. **El IRPF autonómico es una aproximación** (escala estatal duplicada, como en la calculadora de la nómina). En el ejemplo de la AEAT, Aragón da 45,86 € menos; otras comunidades pueden alejarse más. Tampoco vale para el País Vasco ni Navarra, con IRPF foral.
3. **Lo que no se modela:** tarifa plana; reducción del 20% al empezar la actividad (art. 32.3); reducción para quien trabaja para un solo cliente (art. 32.2.1.º, incompatible con la difícil justificación); deducciones autonómicas; módulos; autónomos societarios (7% → 3% y base mínima propia); pluriactividad; Ceuta y Melilla (bonificación del 50% de contingencias comunes y 10% de difícil justificación en Ceuta); mutualistas alternativos.
4. **La comparación con el asalariado** depende de una definición propia: el mismo dinero de partida (ingresos menos gastos frente a coste del puesto). No incluye vacaciones pagadas, paro, indemnización por despido ni la diferencia de prestaciones, solo la base sobre la que se calculan.
5. **Tarifa plana:** averiguar en qué norma se apoya la Seguridad Social para cobrar 80 € en 2026 y de dónde salen los 88,64 €. Si aparece, se puede añadir.
6. **El simulador oficial** se probó en 3 de los 15 tramos; los demás salen de la misma tabla y el mismo tipo.
7. **Fechas de revisión:** el DIRCE a 1 de enero de 2026 (previsiblemente en diciembre de 2026) y la tabla de cuotas de 2027.
8. **Para publicar:** quitar el `noindex` de la página, enlazarla desde las otras calculadoras y la portada, añadirla al `sitemap.xml`, generar su imagen de vista previa (`herramientas/og_images.py`) y anotar la decisión en `DECISIONES.md`.
