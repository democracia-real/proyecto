# Democracia Interna

## Objetivo

Definir **cómo el partido practica lo que predica**: mecanismos de decisión interna que reflejen transparencia, participación real y meritocracia, diferenciándose de la democracia formal de los partidos tradicionales.

> *"No podemos pedir democracia real al Estado si no la practicamos dentro del partido."*

## Principios

| Principio | Significado |
|-----------|-------------|
| **Democracia líquida** | Voto directo o delegado; cada afiliado decide cuándo participar y cuándo delegar en alguien de confianza |
| **Transparencia** | Propuestas, debates y votaciones son públicos (con excepción de voto anónimo si se acuerda para proteger minorías) |
| **Liderazgo meritocrático** | Cargos por competencia demostrada y evaluación, no por lealtad o antigüedad |
| **Límite de mandatos** | Rotación obligatoria; ningún cargo es vitalicio |
| **Deliberación informada** | Tiempo para debate, síntesis de propuestas y enmiendas antes de votar |

## Herramientas (Mecanismos, no Soluciones Técnicas)

### 1. Plataforma de Votación Digital

| Requisito | Descripción |
|-----------|-------------|
| **Verificabilidad** | El afiliado puede comprobar que su voto se registró correctamente |
| **Seguridad** | Identificación robusta; protección contra manipulación |
| **Accesibilidad** | Equivalencia entre participación online y presencial; canales alternativos para quienes no pueden digitalizarse |
| **Implementación** | Criterios de selección de herramienta de votación digital: (1) **Código abierto** (auditable por cualquier afiliado o tercero); (2) **Verificabilidad extremo a extremo** (el votante puede comprobar que su voto fue contado correctamente sin revelar su contenido); (3) **Resistencia a coerción** (voto secreto garantizado; sin posibilidad de demostrar a terceros cómo se votó); (4) **Auditoría independiente** (evaluación de seguridad por entidad externa antes de uso en producción); (5) **Accesibilidad** (interfaz web responsive, compatible con lectores de pantalla, alternativa presencial equivalente); (6) **Escalabilidad** (debe soportar desde decenas hasta miles de votantes simultáneos). Se evaluarán soluciones como Decidim, Helios Voting, Vocdoni u otras que cumplan estos criterios. La decisión final corresponde al Consejo Ciudadano con informe técnico previo |

*No se especifica software concreto; se definen criterios que debe cumplir.*

### 2. Foros de Deliberación

| Elemento | Descripción |
|----------|-------------|
| **Función** | Debate estructurado antes de votaciones; enmiendas y propuestas alternativas |
| **Plazos** | Período de deliberación (ej. 2 semanas) con síntesis previa a la votación |
| **Síntesis** | Agrupación de propuestas similares; redacción de opciones claras por equipo de síntesis o IA supervisada |
| **Moderación** | Reglas de participación; respeto a personas; no bloqueo por minoría |

### 3. Sistema de Propuestas

| Elemento | Descripción |
|----------|-------------|
| **Iniciativa** | Cualquier afiliado o simpatizante puede proponer |
| **Proceso** | Propuesta → Debate → Síntesis → Consenso o Votación |
| **Avales** | Se requiere un umbral mínimo de **el 3% de los afiliados del ámbito correspondiente** (o un mínimo de 5 apoyos, lo que sea menor) para que una propuesta pase a fase de debate formal. Este umbral bajo busca facilitar la participación sin generar ruido excesivo. Las propuestas que no alcancen el umbral permanecen visibles en la plataforma y pueden seguir recabando apoyos |
| **Priorización** | Mecanismo para ordenar propuestas cuando hay muchas (por relevancia, apoyo, urgencia) |

## Cómo se Aprueban Propuestas y Forks

### Flujo de Decisión (según [gobernanza_consenso_afiliacion.md](gobernanza_consenso_afiliacion.md))

```
PROPUESTA (cualquiera)
    ↓
DEBATE (plazo definido)
    ↓
SÍNTESIS (opciones claras)
    ↓
¿Consenso amplio? → SÍ → Adopción
    ↓ NO
VOTACIÓN → Mayoría según tipo (50%+1 políticas, 2/3 estatutos)
    ↓
Versión oficial aprobada
    ↓
Minoría puede registrar FORK (posición alternativa documentada)
```

### Mecanismos de Consenso

| Nivel | Mecanismo | Ejemplo |
|-------|-----------|---------|
| **Ideas / sugerencias** | Cualquiera puede proponer en la plataforma | "Propongo añadir ZBE por emisiones reales" |
| **Debate** | Período de deliberación con comentarios y enmiendas | Discusión abierta, síntesis |
| **Consenso** | Si no hay objeciones fundadas, se adopta sin votación | Sin votación si hay acuerdo amplio |
| **Votación** | Si hay desacuerdo, se vota. Mayoría cualificada según el tipo de decisión | 50%+1 políticas, 2/3 estatutos |
| **Fork / variante** | Quien no esté de acuerdo puede mantener una "variante" documentada, no bloqueante | La posición mayoritaria es la oficial; la minoría queda registrada |

### Reglas del Fork

1. **No bloqueante**: La minoría no puede vetar; la decisión mayoritaria representa al partido.
2. **Documentado**: La posición alternativa queda archivada y visible (transparencia).
3. **Revisitable**: En el siguiente ciclo de debate se puede volver a proponer el cambio.
4. **Sin sanciones**: Mantener una posición minoritaria no es motivo de sanción; sí lo es sabotear o no acatar las decisiones aprobadas en ámbitos donde hay obligación de acatamiento (ej. voto en instituciones).

---

## Qué NO se Decide por Votación Directa

| Ámbito | Quién decide | Razón |
|--------|--------------|-------|
| **Gestión operativa diaria** | Comisión Ejecutiva | Dentro del mandato aprobado por asamblea |
| **Urgencias** | Protocolo de urgencia | Con rendición de cuentas posterior a la asamblea |
| **Temas técnico-legales** | Asesoría jurídica y técnica | No sustituir el criterio político de la asamblea |
| **Contrataciones menores** | Comisión Ejecutiva | Dentro de presupuesto aprobado |

---

## Elección de Cargos

| Elemento | Mecanismo |
|----------|-----------|
| **Primarias** | Obligatorias para candidaturas electorales; abiertas a simpatizantes registrados |
| **Cargos internos** | Votación por afiliados; sin "dedazo" de cúpula |
| **Avales** | Requisitos mínimos para presentar candidatura (bajos, para no excluir) |
| **Debates** | Obligatorios y públicos entre candidatos |
| **Resultados** | Vinculantes; no manipulación posterior del orden |

---

## Revocación de Cargos

| Elemento | Detalle |
|----------|---------|
| **Iniciativa** | X% de afiliados del ámbito correspondiente |
| **Causas** | Incumplimiento de mandato, conducta, pérdida de confianza |
| **Procedimiento** | Consulta vinculante |
| **Protección** | Período mínimo de mandato antes de poder revocar (evitar inestabilidad) |

**Porcentajes propuestos para revocación de cargos:**

| Cargo | % de afiliados necesario para iniciar revocación | Período mínimo de mandato antes de revocación |
|-------|---------------------------------------------------|------------------------------------------------|
| Portavoz | 20% de afiliados del ámbito nacional | 6 meses desde la elección |
| Consejo Ciudadano (miembro) | 15% de afiliados del ámbito correspondiente | 6 meses desde la elección |
| Comisión Ejecutiva (miembro) | 15% de afiliados del ámbito correspondiente | 6 meses desde la elección |
| Coordinador de nodo local | 20% de afiliados del nodo | 3 meses desde la elección |
| Cargo electo (institucional) | 25% de afiliados del ámbito electoral correspondiente | 1 año desde la toma de posesión |

La consulta de revocación es vinculante si participa al menos el 50% del censo del ámbito correspondiente y la revocación obtiene mayoría simple.

---

## Límites de Mandato

| Cargo | Límite propuesto |
|-------|-----------------|
| Portavoz | 2 mandatos máximo |
| Consejo Ciudadano | 3 mandatos máximo |
| Comisión Ejecutiva | 2 mandatos máximo |
| Cargos electos | 3 legislaturas máximo |

---

## Diferencias con Partidos Tradicionales

| Aspecto | Partido tradicional | Este partido |
|---------|---------------------|--------------|
| Toma de decisiones | Cúpula, secretarios generales | Afiliados (consenso o votación) |
| Propuestas | Candidatos y equipos cerrados | Cualquier afiliado o simpatizante |
| Posiciones minoritarias | Ocultas o reprimidas | Forks documentados, no bloqueantes |
| Selección candidatos | Dedazo, listas cerradas | Primarias abiertas |
| Transparencia | Mínima legal | Radical y proactiva |
| Mandatos | Ilimitados | Limitados y revocables |

---

## Referencias

- [gobernanza_consenso_afiliacion.md](gobernanza_consenso_afiliacion.md) — Reglas de consenso, votación, forks y gestión de afiliados
- [codigo_etico.md](codigo_etico.md) — Conducta y sanciones
- [estructura_territorial.md](estructura_territorial.md) — Cómo se organiza la participación por territorio

---

*Documento en desarrollo. Se revisará con la asamblea y los estatutos definitivos.*
