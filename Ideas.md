# Ideas para Democracia Real

*11 octubre 2026 · Documento de trabajo, no aprobado. Las afirmaciones marcadas con (verificar) no están comprobadas.*

---

## 1. Lo que ha pasado esta semana, y por qué es una oportunidad

Una comparación con democracia21 encontró tres cifras mal en la Radiografía, y al revisarlas aparecieron dos más:

- el ~85% de legislación por decreto-ley no tenía fuente (el dato real ronda el 50%);
- el índice de corrupción era el de 2022 etiquetado como 2024;
- el CGPJ tiene 20 vocales, no "12 de 12";
- la abstención media era del 28%, no del 43%;
- el número de decretos-ley de la XIV legislatura era el de la XII.

Todas las cifras revisadas estaban mal. Es cierto que se revisaron porque parecían dudosas, pero basta para tratar el resto como no verificado hasta comprobarlo.

La causa no es la IA en sí. Lo que falló es que **nadie comprobó las cifras contra la fuente**. Un sistema de agentes con revisión humana lo habría reducido mucho, pero solo si los agentes están obligados a descargar la fuente y dejar rastro. Varios agentes del mismo modelo opinando entre sí pueden coincidir en el mismo error.

La oportunidad: casi ningún partido ni medio enseña **cómo verifica**. Si Democracia Real lo hace visible, el error de esta semana se convierte en la prueba de que el sistema funciona. Publicar la fe de erratas da más credibilidad que no haberse equivocado nunca, porque eso no lo cree nadie.

---

## 2. Qué es Democracia Real: una propuesta

Hoy el README dice "crear un partido", la hoja de ruta acaba en elecciones y en la práctica es una persona que no va a presentarse. Conviene elegir y escribirlo.

**Propuesta: un estándar abierto y un observatorio, con el partido como opción futura.** *(Aceptada el 11 oct y aplicada en el README, la portada y el módulo 04.)*

| | Partido | Estándar abierto + observatorio |
|---|---------|------------------------------|
| Qué hace | Compite por votos | Define reglas de integridad y mide a todos con ellas |
| Necesita | Promotores, estatutos, notario, campaña, dinero | Rigor, constancia y una fuente pública por cada dato |
| Encaja con una persona e IA | Mal | Bien: la IA es fuerte leyendo y comparando documentos a escala |
| Frente a democracia21 | Rival pequeño con nombre parecido | Árbitro que también les evalúa a ellos |
| Neutralidad | Difícil de creer | Se demuestra aplicando la misma vara |
| La pregunta "¿con quién pactaríais?" | Sin respuesta | Se convierte en "¿qué partidos adoptan el estándar?" |

Un partido podría nacer después, adoptando el estándar como estatutos. El orden importa: primero demostrar que las reglas funcionan y luego pedir el voto.

**Una forma legal mínima: una asociación** (Ley Orgánica 1/2002). Da un responsable identificable para el tratamiento de datos, una cuenta bancaria y un CIF, y es más barata y rápida que un partido (verificar: plazos y coste en el registro autonómico o nacional que corresponda).

---

## 3. Idea estrella: "Las reglas del juego, partido a partido"

### Qué es

Una matriz visual con los **partidos en filas y los estándares de integridad en columnas**. Cada celda tiene un color y, al pulsarla, se ve **la cláusula literal del estatuto o del código ético**, con enlace al PDF, página, fecha de consulta y quién lo verificó.

Es la primera capa, "lo que dicen frente a sus propias reglas". Solo usa documentos públicos que los partidos ya tienen: estatutos y códigos éticos. Se puede hacer antes de la campaña y no depende de que nadie responda.

### Estándares (primera versión, 12)

| # | Estándar | Pregunta que responde |
|---|----------|----------------------|
| 1 | Límite de mandatos | ¿Cuántas veces puede repetir alguien en la dirección o como cargo electo? |
| 2 | Alcance de las primarias | ¿Qué puestos se eligen por primarias: solo la cabeza o toda la lista? |
| 3 | Tope salarial | ¿Hay un máximo de retribución para cargos? ¿Cuánto? |
| 4 | Declaraciones de bienes públicas | ¿Se publican o solo se "custodian"? |
| 5 | Qué pasa si te investigan | ¿Qué hecho objetivo obliga a dimitir: investigación, juicio oral o condena firme? |
| 6 | Puertas giratorias | ¿Cuántos años de espera antes de ir al sector que regulabas? |
| 7 | Cuentas publicadas | ¿Se publican en la web con detalle o solo se envían al Tribunal de Cuentas? |
| 8 | Disciplina de voto | ¿Hay multas o sanciones por votar distinto del grupo? ¿De cuánto? |
| 9 | Crítica interna | ¿Se puede sancionar a un afiliado por criticar en público? |
| 10 | Órgano de garantías | ¿Quién nombra a quien juzga a los afiliados? |
| 11 | Revocación | ¿Pueden los afiliados destituir a la dirección? ¿Con qué porcentaje? |
| 12 | Quién aprueba qué | ¿Puede la dirección cambiar estatutos o reglamentos sin la asamblea? |

### Escala

**Sí, con cláusula** · **Parcial** (existe con excepciones o sin concretar) · **No** · **No consta** (no aparece en los documentos públicos).

"No consta" no es "no". Esa distinción protege frente a reclamaciones y es más honesta.

### Qué partidos

Todos los que tuvieron grupo propio en la legislatura que acaba, más democracia21 por ser el lanzamiento más reciente. Todos a la vez: si se empieza solo por democracia21, parecerá un ataque a un rival.

**Y Democracia Real en la primera fila, evaluada con la misma regla.** Según sus documentos, saldría así:

| Estándar | Democracia Real |
|----------|-----------------|
| Límite de mandatos | Sí (2-3 mandatos según el cargo, en `democracia_interna.md`) |
| Tope salarial | Parcial: dice "X veces el SMI", sin concretar |
| Puertas giratorias | Parcial: el código ético dice "X años", el README dice 5 |
| Qué pasa si te investigan | Sí: dimisión por imputación por corrupción. Más estricto que la mayoría, pero conviene definir el hecho procesal exacto |
| Órgano de garantías | No consta: no hay ninguno constituido |
| Cuentas publicadas | No aplica todavía: no hay entidad legal ni cuentas |
| Responsable identificable | No: hoy no hay nadie con nombre |

Enseñar dónde falla uno mismo es lo que hace creíble todo lo demás.

### Diseño visual

- La matriz entera en una pantalla, con colores sobrios (no rojo y verde de semáforo, que se lee como opinión) y un texto corto en cada celda: "2 mandatos", "juicio oral", "no consta".
- Al pulsar una celda: cita literal, artículo, enlace al PDF, fecha de consulta, verificado por, y "¿somos injustos? Pide una rectificación".
- Filtros: "solo los partidos de mi comunidad" o "comparar dos partidos".
- **Historial de cada celda**, como en Git: si un partido cambia sus estatutos, se ve qué cambió y cuándo.
- Ficha descargable por partido para periodistas, con licencia abierta.

### Gancho para el 29N

*"Antes de votar a un partido, mira sus reglas internas. Esta es la cláusula. Compruébala tú."* Es neutral, no pide el voto y cualquiera puede verificarla.

### Precauciones

- **Derecho de réplica**: enviar a cada partido su fila antes de publicar, con un plazo, y publicar la respuesta literal.
- **Solo documentos, nunca personas**: se evalúan reglas, no a gente concreta. Sin adjetivos.
- **Consulta legal** sobre el riesgo de vulnerar el derecho al honor antes de publicar.
- Los estatutos están en el Registro de Partidos del Ministerio del Interior, y la Ley 19/2013 de transparencia obliga a los partidos a publicar cierta información (verificar: alcance exacto para estatutos y códigos éticos).

---

## 4. Segunda capa: lo que prometen frente a lo que hacen

Es más pesada y tiene más riesgo de error, así que va después de la matriz.

- **Antes de construir, mirar qué existe.** Un estudio académico midió el cumplimiento del pacto PSOE-Unidas Podemos con la herramienta Verba de Civio y lo comparó con Newtral (verificar la referencia). Maldita y Newtral también hacen seguimiento. Hay que encontrar el hueco y no repetir trabajo.
- **Hueco posible:** compromisos verificables con prueba primaria (BOE, Congreso), con el mismo método para todos y con la verificación visible.
- **Alcance:** 20-30 compromisos por partido con grupo, no todas las promesas.
- **Estados:** cumplido · en curso · parcial · bloqueado (por ejemplo, decreto derogado) · incumplido · no evaluable. Lo binario cumple/no cumple engaña.
- **Prueba por estado:** cada cambio de estado enlaza a la norma, la votación o el documento que lo justifica.

---

## 5. El sistema de verificación (agentes + humano)

### Principio

**Verificar contra la fuente, no contra otra opinión.** Un agente que "está de acuerdo" no aporta nada. Uno que descarga la fuente y copia el fragmento donde aparece la cifra, sí.

### Flujo

1. **Extractor.** Saca afirmaciones atómicas: valor, unidad, año, ámbito y fuente citada.
2. **Verificador A.** Descarga la fuente primaria en esa ejecución (INE, Eurostat, BOE, Congreso, Transparency International). Devuelve valor encontrado, URL, fecha y fragmento literal. Prohibido responder de memoria: sin fragmento, la cifra queda "pendiente".
3. **Verificador B.** Otro prompt y, si se puede, otro modelo. Repite la comprobación sin ver el resultado de A. Si discrepan, pasa a humano.
4. **Reglas automáticas.** Detectan ediciones antiguas (como el IPC de 2022 etiquetado 2024), unidades que no cuadran, fuentes que no contienen la cifra, enlaces rotos y fechas de consulta caducadas.
5. **Humano.** No lo lee todo. Revisa las discrepancias, todas las cifras de titular y una muestra al azar del 10%. Firma en el commit.
6. **Re-verificación periódica.** Cada cifra tiene una fecha de revisión según su fuente: el IPC cada febrero, la EPA cada trimestre, PISA cada tres años.

### Formato del registro

```json
{
  "id": "ipc-espana",
  "afirmacion": "España obtiene 55/100 en el Índice de Percepción de la Corrupción",
  "valor": 55,
  "unidad": "puntos sobre 100",
  "periodo": "IPC 2025",
  "fuente": "Transparency International",
  "url": "https://transparencia.org.es/actualidad/indice-de-percepcion-de-la-corrupcion-2025/",
  "fragmento": "siendo su puntuación de 55/100",
  "consultado": "2026-10-11",
  "estado": "verificado",
  "verificado_por": ["agente-a", "agente-b", "humano:alias"],
  "revisar_en": "2027-02-15",
  "usado_en": ["web/docs/radiografia.html", "01_diagnostico_del_sistema/README.md"]
}
```

### Lo que se ve en público

- **Etiqueta en cada tarjeta:** verificado (con fecha), pendiente, discutido u obsoleto.
- **Contador en la portada:** "Cifras verificadas: 9 de 31". Ningún partido se atreve a mostrar eso, y es justo lo que da confianza. Además obliga a seguir verificando.
- **"Historial de un dato":** al pulsar una cifra se ve su historia: cuándo entró, quién la cambió y por qué. Es el historial de Git hecho visual, el equivalente a `git blame`.
- **Página de erratas** con todo lo corregido, incluida esta semana.

### Integración continua

El repo ya tiene GitHub Actions. Un paso más en cada push: comprobar que las cifras de la portada están en el registro como verificadas y que sus enlaces responden. Si falla, no se despliega.

---

## 6. Otras ideas visuales

| Idea | Qué enseña | Esfuerzo |
|------|-----------|----------|
| **Diff de estatutos** | Cómo cambian los estatutos de un partido entre congresos, con el formato de cambios de GitHub: líneas en verde y en rojo | Medio: hace falta conseguir versiones antiguas |
| **Decretómetro en línea temporal** | Cada decreto-ley como un punto: convalidado, derogado, reaprobado. Por legislatura y por presidente | Bajo: los datos ya están casi listos |
| **Lo que vale tu voto, en mapa** | Votos por escaño en cada provincia y votos que no eligieron a nadie | Bajo: ya está en el plan 29N |
| **Las "X" pendientes** | Contador público de los huecos sin concretar en nuestro propio código ético. Se ponen a cero en público | Muy bajo |
| **¿Quién eligió a quién?** | Grafo de quién nombra a quién: CGPJ, Tribunal Constitucional, Fiscalía, RTVE, reguladores | Medio |

---

## 7. Liderazgo sin caudillo

La ley obliga a tener representante legal y responsable económico. Eso no obliga a concentrar poder. La distinción útil es **representación legal frente a poder de decisión**:

- Cargos legales con funciones tasadas por escrito: firman, representan y rinden cuentas, pero no deciden la línea política.
- Rotación y límite de mandatos (ya están en `democracia_interna.md`).
- La asamblea aprueba su propio reglamento y su orden del día. Es justo lo que democracia21 deja en manos de su dirección.
- Ninguna reforma de estatutos sin la asamblea.
- Con pocas personas, valorar el sorteo entre voluntarios para algunos cargos de garantía.

---

## 8. La IA en el discurso

El README dice: *"La IA no tiene intereses, no es corrupta"*. Es discutible: los modelos los entrena una empresa con unos datos y los configura quien los opera, y esta semana ha demostrado que se equivocan con seguridad.

Propuesta de cambio:

> *"La IA no decide y no es neutral. Por eso la obligamos a dejar rastro: cada dato con su fuente, su fecha y quién lo comprobó."*

Es más honesto y más difícil de atacar, y convierte la crítica en el argumento. *(Aplicado el 11 oct en el README, la portada, el módulo 05 y la página web de IA.)*

---

## 9. Riesgos

| Riesgo | Respuesta |
|--------|-----------|
| Derecho al honor al evaluar partidos | Solo documentos, cita literal, réplica previa y consulta legal |
| "Sois de X" | Misma vara para todos a la vez, registro de equilibrio y Democracia Real evaluada la primera |
| Datos personales (RGPD) | Responsable identificable antes de captar emails. Las opiniones políticas son datos de categoría especial |
| Sesgo del modelo | Segundo verificador con otro modelo, fuente obligatoria y muestra humana al azar |
| Agotamiento de una persona | Hacer menos y bien. La matriz y el registro valen más que diez productos a medias |
| Confusión con democracia21 | Decidir el nombre y explicarlo. Evaluarles con respeto, nunca atacarles |

---

## 10. Aparcado, con motivo

| Idea | Por qué se aparca |
|------|-------------------|
| Voto electrónico y democracia líquida a gran escala | Riesgo de seguridad y de concentración de delegaciones. Primero, un piloto pequeño y auditado |
| Alertas de corrupción que señalen a personas | Falsos positivos y presunción de inocencia. Solo patrones sobre contratos y normas, nunca nombres |
| Presentador IA diario | Mucho trabajo y poca credibilidad sin una cara humana detrás. Si se hace, siempre etiquetado |
| Programa completo de gobierno | No es el papel de un estándar. Sí, propuestas con coste en vivienda y territorio |
