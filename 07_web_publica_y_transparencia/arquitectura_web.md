# Arquitectura Web

## Resumen Ejecutivo

Este documento define la arquitectura técnica del sitio web público del proyecto Democracia Real. La web es la cara visible de nuestros principios: transparencia radical, código abierto y participación ciudadana. La arquitectura actual prioriza simplicidad y coste cero en la fase inicial; las fases futuras incorporarán funcionalidades de portal de transparencia, participación y documentación.

---

## Índice

- [Stack Actual](#stack-actual)
- [Principios de Diseño](#principios-de-diseño)
- [Hosting y Dominio](#hosting-y-dominio)
- [Estructura del Sitio](#estructura-del-sitio)
- [Plan de Evolución](#plan-de-evolución)
- [Referencias](#referencias)

---

## Stack Actual

### Tecnologías en Producción

| Capa | Tecnología | Justificación |
|------|------------|---------------|
| **Frontend** | HTML5, CSS3, JavaScript vanilla | Sin dependencias; carga rápida; mantenible por cualquier colaborador |
| **Hosting** | Azure Static Web Apps | Coste cero para proyectos open source; integración con GitHub; SSL incluido |
| **Repositorio** | GitHub | Versionado, colaboración, CI/CD nativo |
| **Dominio** | democraciareal.es | Pendiente de registro en proveedor acreditado (Dondominio, Nominalia o similar). Configuración DNS delegada a Cloudflare para beneficiarse de su CDN, protección DDoS y gestión de registros CNAME/A necesarios para Azure Static Web Apps |

### Características del Stack Actual

- **Estático**: Sin base de datos ni backend; contenido en archivos Markdown/HTML
- **Sin JavaScript obligatorio**: Contenido accesible sin JS; mejora progresiva
- **CDN integrado**: Azure distribuye contenido globalmente
- **HTTPS**: Certificado gestionado automáticamente

---

## Principios de Diseño

### 1. Código Abierto

| Principio | Implementación |
|-----------|----------------|
| Todo el código es público | Repositorio GitHub público; licencia CC BY-SA 4.0 |
| Sin dependencias propietarias | Evitar servicios cerrados para funcionalidad core |
| Documentación incluida | README y comentarios en código para facilitar contribuciones |

### 2. Accesibilidad

| Requisito | Especificación |
|-----------|----------------|
| WCAG 2.1 | Nivel AA mínimo en todo el sitio |
| Mobile-first | Diseño responsive; móvil como vista principal |
| Lectura fácil | Contenidos clave en lenguaje sencillo |
| Navegación por teclado | Todas las funciones accesibles sin ratón |

### 3. Rendimiento

| Métrica | Objetivo |
|---------|----------|
| Tiempo de carga inicial | < 2 segundos en conexión 3G |
| First Contentful Paint | < 1,5 s |
| Tamaño total página | < 1 MB en carga inicial |
| Auditoría Lighthouse | Ejecutar `npx lighthouse https://democraciareal.es --output=json` tras despliegue inicial y registrar métricas de referencia. Objetivo: puntuaciones ≥90 en Performance, Accessibility, Best Practices y SEO. Integrar en CI/CD con [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) para detectar regresiones automáticamente |

### 4. Simplicidad

- Menos es más: cada página tiene un propósito claro
- Sin trackers de terceros en la versión base
- Sin cookies no esenciales

---

## Hosting y Dominio

### Azure Static Web Apps

| Aspecto | Detalle |
|---------|---------|
| **Servicio** | Azure Static Web Apps (plan gratuito) |
| **Integración** | Deploy automático desde rama `main` de GitHub |
| **URL por defecto** | `[nombre-proyecto].azurestaticapps.net` |
| **Custom domain** | democraciareal.es (ver sección Dominio) |

### Dominio: democraciareal.es

| Aspecto | Estado |
|---------|--------|
| **Registro** | Registrar el dominio `democraciareal.es` a nombre de la asociación o persona jurídica del partido, a través de un registrador acreditado por Red.es (ej: Dondominio, Arsys). Coste estimado: 10-15 €/año. Verificar que no exista registro previo mediante `whois democraciareal.es` |
| **DNS** | Usar Cloudflare como proveedor DNS (plan gratuito). Configurar: 1) Registro CNAME `@` apuntando a `<nombre>.azurestaticapps.net`; 2) Registro CNAME `www` apuntando al dominio raíz; 3) Activar proxy de Cloudflare para CDN y protección DDoS; 4) Configurar registros TXT para validación de dominio en Azure |
| **SSL** | Certificado gestionado por Azure al vincular dominio |
| **Redirecciones** | Configurar en `staticwebapp.config.json`: redirigir `www.democraciareal.es` → `democraciareal.es` (301 permanente). HTTPS forzado automáticamente por Azure Static Web Apps. En Cloudflare, activar "Always Use HTTPS" y crear Page Rule para `www.democraciareal.es/*` → `https://democraciareal.es/$1` (301) |

### Estructura de URLs Propuesta

```
https://democraciareal.es/           # Inicio
https://democraciareal.es/programa/  # Propuestas y diagnóstico
https://democraciareal.es/participa/ # Cómo contribuir
https://democraciareal.es/transparencia/  # Portal (fase futura)
https://democraciareal.es/docs/      # Documentación (fase futura)
```

---

## Estructura del Sitio

### Fase Actual (MVP)

```
web/
├── index.html              # Página principal
├── programa/               # Enlaces a documentos del repo
├── participa/              # Guía de contribución
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    └── [imágenes, favicon]
```

### Fases Futuras

| Fase | Componente | Descripción |
|------|------------|-------------|
| **Fase 2** | Portal de transparencia | Finanzas, actas, votaciones; ver [portal_transparencia.md](portal_transparencia.md) |
| **Fase 3** | Participación online | Propuestas, foros, votaciones; ver [participacion_online.md](participacion_online.md) |
| **Fase 4** | Documentación pública | Búsqueda, navegación por temas, exportación |
| **Fase 5** | API de datos abiertos | Endpoints para desarrolladores y periodistas |

### Consideraciones para Escalado

Cuando se incorporen funcionalidades dinámicas:

| Necesidad | Opción técnica |
|-----------|----------------|
| Base de datos | Azure Cosmos DB o PostgreSQL (Azure Database) |
| Autenticación | Azure AD B2C o Auth0 (open source) |
| Búsqueda | Azure AI Search (ya referenciado en metodología de investigación) |
| API | Azure Functions o API estática (JSON generado en build) |

---

## Plan de Evolución

### Roadmap Técnico

| Trimestre | Objetivo |
|-----------|----------|
| **Q1 2026** | Sitio estático en producción; dominio configurado |
| **Q2 2026** | Portal de transparencia básico (datos en JSON estático) |
| **Q3 2026** | Sistema de propuestas (formulario + integración GitHub Issues) |
| **Q4 2026** | Plataforma de votación para afiliados; documentación navegable |
| **2027** | Alineación con requisitos legales post-inscripción: cumplimiento Ley 19/2013 (transparencia), adaptación a obligaciones de la LO 6/2002 (partidos políticos), y publicación de cuentas anuales según LO 8/2007 (financiación). Las fechas concretas se ajustarán al calendario de inscripción en el Registro de Partidos del Ministerio del Interior |

### Criterios de Migración

No migraremos a stack más complejo (React, backend) hasta que:

1. El volumen de contribuciones lo justifique
2. Haya requisitos de interactividad que HTML estático no cubra
3. Exista capacidad de mantenimiento del nuevo stack

---

## Referencias

- [Azure Static Web Apps - Documentación](https://learn.microsoft.com/azure/static-web-apps/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [portal_transparencia.md](portal_transparencia.md)
- [participacion_online.md](participacion_online.md)
- [especificaciones_tecnicas.md](especificaciones_tecnicas.md)

---

*Última actualización: Febrero 2026*
