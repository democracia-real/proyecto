# Las reglas del juego: verificación

*Lo genera [`construir.py`](construir.py). No editar a mano.*

## Quién ha leído qué

- **Primera lectura:** ia:claude-opus-5-5 (Claude Code); Junts, EH Bildu y EAJ-PNV, por un subagente Claude Opus 5.5 sin ver ninguna otra lectura, el 1 nov 2026.
- **Segunda lectura:** ia:claude-sonnet-5-5, tres subagentes (A: PP, PSOE, VOX; B: Sumar, ERC, Junts; C: EH Bildu, PNV, Democracia Real), sin ver la primera lectura, el 1 nov 2026.
- **Revisión humana:** ninguna. No se escribe una firma humana que no existe.

Las dos lecturas aplican los criterios de [`METODOLOGIA.md`](METODOLOGIA.md), escritos antes de leer los documentos.

- Las tres segundas lecturas terminaron antes de que la primera estuviera escrita en el fichero. Los valores de la primera lectura de PP, PSOE, VOX, Sumar, ERC y Democracia Real se decidieron antes de recibir el informe de la segunda lectura de cada partido, y se escribieron después sin cambiar ninguno. Desde fuera no se puede comprobar: queda dicho.
- Junts, EH Bildu y EAJ-PNV: quien coordinaba vio la segunda lectura de estos tres partidos antes de hacer la suya. Para que la primera siguiera siendo independiente, la hizo un subagente Claude Opus 5.5 nuevo, sin acceso a ninguna otra lectura.
- PSOE: su Código Ético se encontró después de lanzar la segunda lectura; se le dio a esa lectura antes de que terminara.
- Los criterios se escribieron antes de leer los documentos y no se han cambiado después, aunque tienen un hueco (estándar 5, caso del PP): queda entre las celdas dudosas.
- Edición de estilo: en un motivo de la segunda lectura (VOX, revocación) se cambió «el umbral de 2/3 es muy alto» por «el umbral es de 2/3», para no calificar. No cambia ningún valor ni cita.

## Resultado

- 54 celdas. Las dos lecturas coinciden en 50 y no coinciden en 4, que quedan «no consta».
- Valores finales: sí 16, parcial 23, no 3, no consta 12.
- 91 citas comprobadas por script: cada una aparece literal en el texto del documento (con `pdftotext`, con y sin `-layout`, uniendo solo las palabras partidas a final de línea).

## Discrepancias

| Partido | Estándar | Primera lectura | Segunda lectura |
|---------|----------|-----------------|-----------------|
| Democracia Real | Órgano de garantías | **sí**: La Comisión de Ética, que tramita y resuelve los expedientes, la eligen los afiliados y no tiene vinculación con cargos ejecutivos. No hay ningún órgano constituido. Borrador sin aprobar. | **no consta**: El procedimiento sancionador (codigo_etico.md líneas 138-156) lo resuelve la Comisión de Ética y prevé «Posible recurso ante Comisión de Garantías» (línea 153), que sería la última instancia interna. Ningún documento dice quién elige a la Comisión de Garantías ni si sus miembros pueden estar en la ejecutiva (README.md línea 81 solo dice «Independiente»). Para la Comisión de Ética (primera instancia) sí consta «Elegida directamente por afiliados» y «Sin vinculación con cargos ejecutivos» (codigo_etico.md líneas 123 y 125), que daría «sí»; la duda es qué órgano cuenta, y por el criterio de última instancia se toma la Comisión de Garantías. Borrador no aprobado por nadie; Democracia Real no es un partido inscrito. |
| ERC | Límite de mandatos | **parcial**: Límite de doce años para la Presidencia y la Secretaría General (art. 74), que se suspende si no se pudieron ejercer las funciones por «repressió política». Es una excepción escrita. | **sí**: La Presidència (y la Secretaria General, Art. 74) puede ser reelegida ininterrumpidamente hasta un máximo de doce años, aunque siempre puede acabar el mandato en curso. El plazo se suspende si no ha podido ejercer por «repressió política»; el texto no dice que un órgano conceda esa suspensión. Duda entre sí y parcial por esa excepción. El Art. 120 fija además 12 años para cargos públicos ejecutivos supralocales. |
| ERC | Revocación | **sí**: Una quinta parte de las personas afiliadas puede forzar un Congreso Nacional extraordinario, que puede incluir jornada electoral para elegir de nuevo la Presidencia. No se llama «revocación»: dudosa entre «sí» y «parcial». La moción de censura del art. 53 es solo para presidencias territoriales. | **parcial**: No hay moción de censura ni revocación de la Presidència a nivel nacional (el Art. 53 solo cubre presidencias territoriales). El 20 % de las personas afiliadas de pleno derecho (una quinta parte) puede forzar un Congreso Nacional extraordinario, que puede incluir jornada electoral, pero la norma no lo presenta como revocación. Duda entre parcial, sí (efecto equivalente) y no consta. |
| Sumar | Órgano de garantías | **sí**: La Comisión de Garantías la elige la Asamblea General (todas las personas afiliadas, art. 18.2) y sus miembros no pueden tener otro cargo orgánico. Se toma como última instancia interna (art. 23.6, recursos). | **no**: Según el procedimiento sancionador, el Grupo Ejecutivo decide el expediente y resuelve el recurso (Arts. 10.4, 10.5, 20.4); la Comisión de Garantías solo emite informe previo. El Grupo Ejecutivo no lo elige la Asamblea sino el Grupo de Coordinación a propuesta de la Coordinación General (Arts. 19.1, 20.1). Duda principal: la Comisión de Garantías (Art. 23) la elige la Asamblea General y sus miembros no pueden ostentar otro cargo orgánico (eso daría sí), y el Art. 23.6 le atribuye resolver recursos; aplico el criterio «órgano que resuelve los expedientes» y los Arts. 10.4-10.5, que son los específicos del procedimiento disciplinario. |

## Celdas que coinciden pero son dudosas

| Partido | Estándar | Valor | Duda |
|---------|----------|-------|------|
| Democracia Real | Alcance de las primarias | sí | El borrador no distingue la cabeza de lista del resto ni detalla el sistema de voto. |
| Democracia Real | Qué pasa si te investigan | sí | «Imputación» no es ya un término de la ley procesal; el hecho procesal exacto está sin definir. |
| Democracia Real | Revocación | sí | El README del mismo módulo dice «X% de afiliados del ámbito», sin cifra. |
| EAJ-PNV | Alcance de las primarias | parcial | Entre «parcial» y «sí»: la consulta a las asambleas locales es obligatoria y vincula a los delegados, y el art. 100.1 habla de sufragio directo, pero la lista la vota la Asamblea Nacional de delegados. |
| EH Bildu | Qué pasa si te investigan | sí | La segunda lectura toma como primer hecho automático el juicio oral (estatutos, art. 11.5), porque el código ético pide el cese de los investigados «en la medida que sea posible». Las dos dicen «sí». |
| Junts | Alcance de las primarias | parcial | Entre «parcial» y «no consta»: ninguna cláusula dice quién elige las candidaturas; el procedimiento lo fija la Direcció Executiva en cada caso. |
| Junts | Qué pasa si te investigan | parcial | Las dos lecturas ponen «parcial» por la excepción de «lawfare» del codi ètic, que declara la Executiva; sin ella sería «sí» (estatutos, art. 13). |
| PP | Qué pasa si te investigan | sí | El art. 19.7.e exige mayoría absoluta del Comité para adoptar medidas cautelares, aunque el 19.7.b diga «automática». |
| PP | Órgano de garantías | no | Los criterios no prevén este caso: no lo elige el Congreso ni hay incompatibilidad (su presidente está en el Comité Ejecutivo), pero el nombramiento formal es de la Junta Directiva, no del órgano ejecutivo. Las dos lecturas pusieron «no». |
| PSOE | Qué pasa si te investigan | sí | El mismo apartado 5.9 permite a la organización «articular medidas» para la «graduación o flexibilización» de estas consecuencias. |
| PSOE | Declaraciones de bienes públicas | parcial | Entre «parcial» y «no»: las declaraciones se custodian con acceso solo de la Comisión, y su publicación se remite a la ley. |
| Vox | Qué pasa si te investigan | sí | El art. 38.2 dice que la suspensión «podrá acordarse»; el 37.1, que «se acordará». Se aplica el 37.1. |

## Tabla completa

| Partido | Límite de mandatos | Alcance de las primarias | Qué pasa si te investigan | Declaraciones de bienes públicas | Órgano de garantías | Revocación |
|---|---|---|---|---|---|---|
| Democracia Real | sí | sí | sí | parcial | no consta (sí / no consta) | sí |
| EAJ-PNV | parcial | parcial | sí | no consta | sí | parcial |
| EH Bildu | parcial | parcial | sí | parcial | sí | parcial |
| ERC | no consta (parcial / sí) | parcial | sí | parcial | parcial | no consta (sí / parcial) |
| Junts | no consta | parcial | parcial | no consta | parcial | parcial |
| PP | no consta | no | sí | parcial | no | no consta |
| PSOE | parcial | parcial | sí | parcial | sí | parcial |
| Sumar | no consta | parcial | sí | parcial | no consta (sí / no) | sí |
| Vox | no consta | no | sí | no consta | parcial | sí |
