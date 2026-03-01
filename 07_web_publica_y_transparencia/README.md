# 07 - Web Pública y Transparencia

## Resumen Ejecutivo

Este módulo define la **presencia digital pública** del partido, incluyendo la web, el portal de transparencia y los mecanismos de participación ciudadana online.

## Documentos de este Módulo

| Documento | Contenido |
|-----------|-----------|
| [arquitectura_web.md](arquitectura_web.md) | Estructura técnica del sitio |
| [portal_transparencia.md](portal_transparencia.md) | Información pública obligatoria y proactiva |
| [participacion_online.md](participacion_online.md) | Herramientas de participación ciudadana |
| [especificaciones_tecnicas.md](especificaciones_tecnicas.md) | Stack tecnológico y requisitos |

## Principios de la Web

### 1. Transparencia Radical
- Todo lo que no sea legalmente protegido es público
- Información accesible sin necesidad de solicitarla
- Datos abiertos y reutilizables

### 2. Accesibilidad Universal
- WCAG 2.1 nivel AA mínimo
- Múltiples idiomas (castellano + cooficiales)
- Adaptación a dispositivos móviles
- Lectura fácil para contenidos clave

### 3. Código Abierto
- Todo el código fuente publicado
- Licencia permisiva
- Contribuciones externas bienvenidas

### 4. Privacidad por Diseño
- Mínima recolección de datos
- GDPR cumplido y superado
- Consentimiento explícito
- Derecho al olvido efectivo

## Estructura del Sitio Web

```
www.partidoX.es
│
├── / (Inicio)
│   ├── Visión y misión
│   ├── Noticias destacadas
│   └── Call to action (afiliación)
│
├── /quienes-somos
│   ├── Historia y principios
│   ├── Órganos y cargos
│   ├── Estatutos
│   └── Código ético
│
├── /programa
│   ├── Por áreas temáticas
│   ├── Compromisos medibles
│   └── Seguimiento de cumplimiento
│
├── /transparencia (Portal)
│   ├── Finanzas en tiempo real
│   ├── Actas de reuniones
│   ├── Contratos y proveedores
│   ├── Declaraciones de bienes
│   └── Datos abiertos (API)
│
├── /participa
│   ├── Afiliación
│   ├── Propuestas ciudadanas
│   ├── Votaciones (afiliados)
│   ├── Foros de debate
│   └── Voluntariado
│
├── /actualidad
│   ├── Noticias
│   ├── Comunicados
│   ├── Agenda
│   └── Sala de prensa
│
├── /territorial
│   ├── Por comunidad autónoma
│   ├── Por provincia
│   └── Contactos locales
│
└── /contacto
    ├── Formulario general
    ├── Buzón de denuncias
    └── Prensa
```

## Portal de Transparencia

### Información Obligatoria (Ley 19/2013)

| Categoría | Contenido |
|-----------|-----------|
| Institucional | Estructura, funciones, normativa interna |
| Económica | Presupuestos, cuentas anuales, subvenciones |
| Jurídica | Estatutos, convenios, contratos |
| Actividades | Actividades, eventos, participación |

### Información Proactiva (Más allá de la ley)

| Categoría | Contenido |
|-----------|-----------|
| Finanzas en tiempo real | Ingresos y gastos actualizados |
| Actas de todas las reuniones | Órganos de dirección |
| Votaciones nominales | Cómo votó cada miembro |
| Proveedores y contratos | Con quién trabajamos |
| Agenda de cargos | Reuniones y actividades |
| Declaraciones de bienes | De todos los cargos |
| Nóminas | Retribuciones de cargos públicos |
| Gastos de representación | Detallados |

### Datos Abiertos

| Formato | Descripción |
|---------|-------------|
| JSON/API | Para desarrolladores |
| CSV | Para análisis |
| PDF | Para lectura |
| Visualizaciones | Gráficos interactivos |

## Participación Online

### Sistema de Propuestas

```
CIUDADANO/AFILIADO
        ↓
    Envía propuesta (formulario estructurado)
        ↓
    Publicación (moderación básica)
        ↓
    Debate (comentarios, mejoras)
        ↓
    Apoyo (votos de otros)
        ↓
    Si alcanza umbral → Valoración por órgano competente
        ↓
    Respuesta motivada (acepta/rechaza/modifica)
        ↓
    Si acepta → Integración en programa/acción
```

### Sistema de Votaciones (Afiliados)

| Característica | Descripción |
|----------------|-------------|
| Autenticación | Certificado digital o sistema seguro |
| Verificabilidad | Cada votante puede verificar su voto |
| Anonimato | Voto secreto cuando proceda |
| Auditoría | Sistema auditable por terceros |
| Delegación | Posibilidad de democracia líquida |

### Foros de Debate

| Característica | Descripción |
|----------------|-------------|
| Por temas | Estructurados por áreas |
| Moderación | Reglas claras, moderadores elegidos |
| Síntesis | IA ayuda a resumir discusiones largas |
| Conexión | Con sistema de propuestas |

## Especificaciones Técnicas

### Stack Tecnológico (Propuesta)

| Capa | Tecnología |
|------|------------|
| Frontend | React/Vue/Svelte |
| Backend | Node.js/Python/Go |
| Base de datos | PostgreSQL |
| Blockchain (opcional) | Hyperledger/Ethereum |
| Hosting | Cloud soberana (española/europea) |
| CDN | Para rendimiento global |

### Requisitos No Funcionales

| Requisito | Especificación |
|-----------|----------------|
| Disponibilidad | 99.9% uptime |
| Rendimiento | <2s carga inicial |
| Seguridad | OWASP Top 10 mitigado |
| Escalabilidad | Soportar picos electorales |
| Backup | Diario, replicado |

### Accesibilidad

| Requisito | Especificación |
|-----------|----------------|
| Nivel | WCAG 2.1 AA |
| Contraste | Ratio mínimo 4.5:1 |
| Navegación | Por teclado completa |
| Multimedia | Subtítulos y transcripciones |
| Lectura fácil | Para contenidos clave |

## Fases de Desarrollo

### Fase 1: MVP (Mes 4-5)

| Funcionalidad | Prioridad |
|---------------|-----------|
| Web informativa básica | Alta |
| Formulario de contacto | Alta |
| Formulario de afiliación | Alta |
| Publicación de estatutos | Alta |

### Fase 2: Transparencia (Mes 5-6)

| Funcionalidad | Prioridad |
|---------------|-----------|
| Portal de transparencia | Alta |
| Visualización de finanzas | Alta |
| Publicación de actas | Media |

### Fase 3: Participación (Mes 6-8)

| Funcionalidad | Prioridad |
|---------------|-----------|
| Sistema de propuestas | Alta |
| Foros de debate | Media |
| Sistema de votaciones | Alta |
| Democracia líquida | Media |

### Fase 4: Optimización (Continuo)

| Funcionalidad | Prioridad |
|---------------|-----------|
| API de datos abiertos | Media |
| App móvil | Baja |
| Mejoras de UX | Continuo |
| Nuevas funcionalidades | Según necesidad |

## Métricas de Éxito

| Métrica | Objetivo |
|---------|----------|
| Visitas únicas mensuales | Crecimiento sostenido |
| Tasa de afiliación | Conversión de visitantes |
| Participación en votaciones | % de afiliados activos |
| Propuestas recibidas | Engagement ciudadano |
| Tiempo en página | Contenido relevante |
| Accesibilidad | Cumplimiento WCAG |

## Riesgos y Mitigaciones

| Riesgo | Mitigación |
|--------|------------|
| Ataques DDoS | CDN, protección anti-DDoS |
| Hackeo | Auditorías de seguridad, pentesting |
| Baja participación | UX excelente, gamificación moderada |
| Desinformación en foros | Moderación, fact-checking |
| Brecha digital | Canales offline complementarios |

## Referencias

- Ley 19/2013 de transparencia
- WCAG 2.1 Guidelines
- OWASP Top 10
- Decidim (Barcelona)
- Consul (Madrid)
- Liquid Feedback

---

*Módulo en desarrollo activo.*
