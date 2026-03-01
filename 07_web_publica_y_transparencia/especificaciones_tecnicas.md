# Especificaciones Técnicas

## Resumen Ejecutivo

Este documento recoge las especificaciones técnicas de la infraestructura digital del proyecto Democracia Real: hosting en Azure, dominio democraciareal.es, DNS con Cloudflare, repositorio GitHub, CI/CD, requisitos de seguridad, protección de datos (RGPD) y estándares de accesibilidad (WCAG).

---

## Índice

- [Hosting y Dominio](#hosting-y-dominio)
- [Repositorio y CI/CD](#repositorio-y-cicd)
- [Seguridad](#seguridad)
- [Protección de Datos (RGPD)](#protección-de-datos-rgpd)
- [Accesibilidad](#accesibilidad)
- [Referencias](#referencias)

---

## Hosting y Dominio

### Azure Static Web Apps

| Parámetro | Valor |
|-----------|-------|
| **Servicio** | Azure Static Web Apps |
| **Plan** | Gratuito (Free tier) para proyectos open source |
| **Región** | West Europe (recomendado para cumplimiento GDPR y latencia en España) |
| **Origen** | Repositorio GitHub; rama `main` |
| **Build** | Automático en cada push; configuración en `staticwebapp.config.json` |

### Dominio

| Parámetro | Valor |
|-----------|-------|
| **Dominio principal** | democraciareal.es |
| **Subdominios** | www (redirect a dominio principal), docs (documentación), api (si se implementa votación) |
| **Registro** | A contratar con proveedor acreditado ICANN (ej. Namecheap, Gandi); renovación anual |

### DNS (Cloudflare)

| Parámetro | Valor |
|-----------|-------|
| **Proveedor DNS** | Cloudflare |
| **Propósito** | DNS, CDN, protección DDoS, analytics respetuosos |
| **Registro** | Pendiente de alta; configurar al contratar dominio |
| **SSL** | Full (strict); certificado originado en Azure, Cloudflare como proxy |

### SSL/TLS

| Requisito | Especificación |
|-----------|----------------|
| **Protocolo** | TLS 1.2 mínimo; TLS 1.3 preferido |
| **Certificado** | Gestionado por Azure al vincular custom domain |
| **HSTS** | Habilitado |
| **Redirección** | HTTP → HTTPS obligatoria |

---

## Repositorio y CI/CD

### GitHub

| Parámetro | Valor |
|-----------|-------|
| **Repositorio** | A definir al hacer público el repo (ej. github.com/democracia-real/politica) |
| **Licencia** | CC BY-SA 4.0 |
| **Ramas** | `main` (producción), `develop` (opcional) |
| **Protección** | Branch protection en `main`: require PR + 1 review; no force push; status checks obligatorios |

### CI/CD

| Etapa | Herramienta | Acción |
|-------|-------------|--------|
| **Build** | GitHub Actions / Azure | Generar sitio estático |
| **Test** | Lighthouse CI (performance ≥90, accessibility ≥95) + axe-core para accesibilidad | Validar antes de deploy |
| **Deploy** | Azure Static Web Apps | Automático desde `main` |
| **Notificaciones** | GitHub Actions notifications + canal Discord del proyecto (a crear) | Fallos de build |

### Configuración de Build

```yaml
# Ejemplo .github/workflows/azure-static-web-apps.yml
# Configurar según estructura final del proyecto; ver docs de Azure Static Web Apps
```

---

## Seguridad

### Requisitos Generales

| Requisito | Especificación |
|-----------|----------------|
| **OWASP Top 10** | Mitigación de vulnerabilidades del Top 10 |
| **Dependencias** | Dependabot habilitado en GitHub para actualizaciones automáticas de seguridad |
| **Secrets** | Nunca en código; uso de GitHub Secrets, Azure Key Vault si aplica |
| **Headers** | Content-Security-Policy, X-Frame-Options, X-Content-Type-Options |

### Para Fases Futuras (Backend, Autenticación)

| Aspecto | Requisito |
|---------|-----------|
| **Autenticación** | MFA recomendado para administradores |
| **Autorización** | Principio de mínimo privilegio |
| **Logs** | Registro de accesos y acciones sensibles |
| **Pentesting** | Auditoría externa obligatoria antes de lanzar cualquier funcionalidad de votación; presupuestar en fase de lanzamiento |

### Protección DDoS

- Cloudflare como primera línea
- Rate limiting vía Cloudflare (ej. 100 req/min por IP) + WAF rules si se implementa API

---

## Protección de Datos (RGPD)

### Principios

| Principio | Aplicación |
|----------|------------|
| **Minimización** | Solo recoger datos estrictamente necesarios |
| **Limitación del fin** | Usar datos solo para el propósito declarado |
| **Limitación del plazo** | Conservar solo el tiempo necesario |
| **Integridad y confidencialidad** | Medidas técnicas y organizativas adecuadas |
| **Transparencia** | Política de privacidad clara y accesible |

### Datos que Podemos Recoger

| Tipo | Finalidad | Base legal |
|------|-----------|------------|
| Email (afiliación) | Comunicación, votaciones | Consentimiento / Ejecución contrato |
| Nombre (afiliación) | Identificación | Ejecución contrato |
| IP (logs servidor) | Seguridad, diagnóstico | Legítimo interés |
| Cookies esenciales | Funcionamiento del sitio | Legítimo interés |

### Lo que No Hacemos

- No vendemos datos
- No usamos cookies de tracking de terceros (en versión base)
- No compartimos datos con terceros salvo obligación legal
- Política de cookies: solo cookies técnicas esenciales (sesión, preferencia idioma); sin cookies de terceros ni tracking; banner informativo conforme a LSSI y GDPR

### Derechos del Usuario

| Derecho | Cómo ejercerlo |
|---------|----------------|
| Acceso | Solicitud por email al responsable de protección de datos (DPO a designar; email: privacidad@[dominio]) |
| Rectificación | Mismo canal |
| Supresión | Mismo canal; derecho al olvido |
| Portabilidad | Datos en formato estructurado |
| Oposición | Para tratamientos basados en legítimo interés |
| Limitación | Restringir tratamiento en ciertos casos |

### Documentación

- Política de privacidad: redactar y publicar antes del lanzamiento; incluir base legal, finalidad, plazo de conservación y derechos
- Registro de actividades de tratamiento (art. 30 GDPR): obligatorio si se recogen datos de afiliados/donantes; mantener actualizado
- Evaluación de impacto (DPIA): obligatoria si se implementa votación electrónica o se tratan datos de opinión política (art. 35 GDPR)

---

## Accesibilidad

### Estándar: WCAG 2.1 Nivel AA

| Criterio | Requisito |
|----------|-----------|
| **Perceptible** | Textos alternativos, contraste mínimo 4.5:1, contenido adaptable |
| **Operable** | Navegación por teclado, sin límites de tiempo críticos, no convulsiones |
| **Comprensible** | Lenguaje identificable, predecible, ayuda para errores |
| **Robusto** | Compatible con tecnologías asistivas |

### Verificación

| Herramienta | Uso |
|-------------|-----|
| **Lighthouse** | Auditoría automática en CI |
| **axe-core** | Detección de problemas de accesibilidad |
| **Revisión manual** | Navegación solo con teclado, lectores de pantalla |
| Auditoría de accesibilidad: al menos 1 vez/año y tras cada rediseño mayor | |

### Contraste y Tipografía

| Parámetro | Valor |
|-----------|-------|
| Contraste texto normal | ≥ 4.5:1 |
| Contraste texto grande | ≥ 3:1 |
| Tamaño de fuente base | ≥ 16px equivalente |
| Zoom | Sitio usable al 200% de zoom |

---

## Referencias

- [Azure Static Web Apps](https://learn.microsoft.com/azure/static-web-apps/)
- [Cloudflare DNS](https://developers.cloudflare.com/dns/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [RGPD - Texto consolidado](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32016R0679)
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [Ley Orgánica 3/2018 de Protección de Datos (LOPDGDD)](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673)
- [arquitectura_web.md](arquitectura_web.md)
- [portal_transparencia.md](portal_transparencia.md)

---

*Última actualización: Febrero 2026*
