# Cómo se gobierna este proyecto

*1 noviembre 2026 · Qué decide la IA, qué aprueba una persona y cómo se comprueba si funciona.*

---

## El experimento

**Pregunta:** ¿puede una IA hacer el trabajo de un proyecto político (investigar, verificar, construir herramientas, planificar y comunicar) mejor de lo que se hace hoy, si todo lo que hace queda a la vista?

No damos por hecho que la respuesta sea sí. Lo medimos, y publicamos el resultado salga como salga.

**Primer resultado (1 nov 2026).** Las cifras que la IA redactó entre marzo y octubre sin un sistema de comprobación estaban mal en su mayoría: de 9 cifras de la portada, ninguna se sostenía tal como estaba. Cuando se la obligó a descargar la fuente y citar el fragmento, la propia IA encontró y corrigió más de 40 errores en un día. La lección es la de siempre: [*«La IA no decide y no es neutral. Por eso la obligamos a dejar rastro»*](Proximos%20pasos.md).

---

## Quién hace qué

| La IA decide y hace | Una persona aprueba antes | Nadie hace |
|---------------------|---------------------------|------------|
| Qué se construye y en qué orden ([`RUTA.md`](RUTA.md)) | Publicar con su nombre o en cuentas de terceros (Reddit, Menéame, TikTok, X, Instagram) | Cuentas falsas, bots, respuestas automáticas a terceros |
| Investigar y verificar cifras: dos comprobaciones independientes | Escribir a la prensa, a los partidos o a otras organizaciones | Pedir el voto para o contra nadie |
| Escribir textos, código y herramientas | Gastar dinero | Publicar o difundir sondeos del 24 al 28 de noviembre, y nada el 28 |
| Publicar en la web propia (`git push`) lo que pase el check de cifras | Asuntos legales y datos personales (la persona es la responsable ante la ley) | Nombrar a víctimas o a particulares |
| Medir cada semana y corregir el rumbo | Cualquier cosa que no se pueda deshacer | Ocultar que un texto o un vídeo lo ha hecho una IA |
| Corregir errores y publicar la fe de erratas | Cambiar estas reglas | Firmar en nombre de una persona algo que no ha revisado |

La persona responsable es quien mantiene el proyecto. Una IA no puede ser responsable legal, abrir cuentas, firmar ni hablar con un periodista como si fuera alguien.

---

## Cómo se verifica una cifra

1. Una IA descarga la fuente primaria y anota el valor, el enlace, el fragmento literal y la fecha en [`web/data/cifras.json`](web/data/cifras.json).
2. Otra IA, con otro modelo y sin ver el resultado de la primera, repite la comprobación. Si no coinciden, la cifra no se publica.
3. Si una persona la revisa, se añade su firma en `revision_humana`. **Nunca se pone una firma humana que no exista.** La web dice en cada caso quién lo ha comprobado.
4. [`check_cifras.py`](.github/checks/check_cifras.py) impide publicar una cifra que no esté en el registro, y la portada solo admite verificadas.

---

## Registro de decisiones

Cada decisión que toma la IA queda en [`DECISIONES.md`](DECISIONES.md): fecha, qué se decidió, por qué y quién lo aprobó. Es la prueba del experimento: cualquiera puede comprobar si las decisiones eran buenas.

---

## Cómo sabremos si funciona

Se publica cada lunes en [`DECISIONES.md`](DECISIONES.md).

| Qué medimos | Objetivo |
|-------------|----------|
| Errores publicados sin corregir en 24 horas | 0 |
| Fechas de la RUTA cumplidas frente a comprometidas | Más del 80% |
| Visitas y usos de cada calculadora (Cloudflare) | Crecer cada semana |
| Personas que siguen el proyecto (suma de todas las redes) | 2 → 500 el 29 de noviembre |
| Medios, creadores o partidos que citan o reutilizan un dato | Al menos 3 |
| Horas de trabajo humano por semana | Menos de 2 |
| Dinero gastado | 0 €, salvo pruebas aprobadas |

---

## Lo que no decimos

No decimos que una IA sea mejor que las personas, ni que deba gobernar. Enseñamos el trabajo, con sus errores, y cada uno juzga. Si sale bien, la conclusión será más modesta y más útil: qué partes del trabajo público puede hacer una IA, a qué coste y con qué controles.

---

## Límites de la IA, dichos claro

- No recuerda nada entre sesiones salvo lo que queda escrito en este repositorio.
- Solo trabaja cuando alguien abre una sesión o cuando hay una tarea programada.
- Se equivoca. Por eso todo queda registrado y cualquiera puede revisarlo.
- No tiene intereses propios, pero tampoco es neutral: aprende de textos escritos por personas, con sus sesgos.
