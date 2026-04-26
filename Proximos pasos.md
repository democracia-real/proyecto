# Próximos Pasos del Proyecto

*Última actualización: 13 marzo 2026*

---

## Estado Actual — Todo lo que está hecho ✅

| Área | Notas |
|------|-------|
| Documentación base | 8 módulos, 80+ documentos |
| Web desplegada | democraciareal.es (Azure SWA + Cloudflare) |
| Chatbot IA | Azure Function + Foundry Agent |
| Álbum de diagnóstico | 5 canciones con reproductor web |
| Visor Markdown universal | viewer.html — sin duplicar contenido |
| SEO básico | robots.txt, sitemap.xml, meta tags |
| i18n básico | ES, CA, EU, GL, EN |
| Cloudflare Analytics | Activado — sin cookies, sin banner |
| **Vídeo corto 30s** | Publicado en YouTube ✅ |
| **Vídeo largo ~9min** | Publicado en YouTube ✅ https://youtu.be/om-2aiG4bLo |
| YouTube — banner y descripción del canal | Hecho ✅ |

---

## PLAN DE VISIBILIDAD — Este fin de semana

### PRIORIDAD 1 — Publicar el vídeo largo ✅

- [x] Subir `largo.mp4` a YouTube: https://youtu.be/om-2aiG4bLo
- [x] Vídeo corto publicado: https://youtu.be/TFFVpeAYftg
- [ ] Fijar en YouTube Studio → Personalización → Diseño → Vídeo destacado

---

### PRIORIDAD 2 — Activar redes sociales (este fin de semana)

- [ ] **Twitter/X** — Crear perfil @DemocraciaRealEs (o similar disponible)
  - Bio: *"Las reglas del juego, rediseñadas. Datos, sin ideología. democraciareal.es"*
  - Primer tuit: enlace al vídeo largo con el dato del `3,4`
- [ ] **Instagram** — Perfil con clips del vídeo corto como Reels
- [ ] Añadir links de YouTube y redes a la web (`index.html`)

---

### PRIORIDAD 3 — Contactos estratégicos (próxima semana)

**Rubén Gisbert**
- [ ] Buscar contacto (Twitter/email público)
- [ ] Mensaje corto: diagnóstico del proyecto + enlace vídeo largo
- [ ] Objetivo: mención, colaboración o simplemente feedback

**Democracia Real Ya (200k seguidores inactivos)**
- [ ] Tuit mencionando @democraciarealya: *"El 15M tenía el diagnóstico correcto. Aquí está la propuesta técnica concreta. [enlace]"*
- [ ] Explorar si hay alguien activo detrás que quiera retomar

**democraciareal.com**
- [ ] Contactar por email (info@democraciareal.com)
- [ ] Propuesta: tienen base legal, nosotros tenemos contenido y visión

---

### PRIORIDAD 4 — Contenido recurrente (a partir de la semana que viene)

- [ ] Hilo de Twitter por cada dato impactante del vídeo:
  - `83,7% del sueldo para alquilar`
  - `El voto en Soria vale 6 veces más que en Madrid`
  - `8 leyes educativas, casi 1 por cambio de gobierno`
- [ ] Clip de 30s (el vídeo corto) como Reel en Instagram y Short en YouTube
- [ ] Publicar el vídeo corto también en Twitter/X

---

## Pendiente técnico (no urgente)

| Tarea | Prioridad |
|-------|-----------|
| Completar `[PENDIENTE]` en módulos 03-08 | Media |
| Re-indexar documentos nuevos en Azure AI Search | Media |
| Subir podcasts a Azure Blob + configurar `media.democraciareal.es` | Media |
| Modo karaoke-lite en el reproductor (Fase 3 visual) | Baja |
| Investigar con Deep Research líneas estratégicas Dalio (soberanía IA, demografía, etc.) | Baja |
| Verificar nombre "Democracia Real" en Registro de Partidos | Antes de constituir |
| Imágenes representativas por sección | Baja |

---

## Pendiente legal (Fase 3 — no urgente hasta tener masa crítica)

- [ ] Verificar nombre en Registro de Partidos Políticos (Ministerio del Interior)
- [ ] Reunir promotores (mínimo 3)
- [ ] Redactar estatutos definitivos (LO 6/2002)
- [ ] Acta notarial e inscripción

---

## Infraestructura activa

| Servicio | Recurso | Estado |
|----------|---------|--------|
| Azure SWA | witty-pebble... | ✅ |
| Azure Function | democracia-chat-function | ✅ |
| Azure AI Foundry | agentedemocracia | ✅ |
| Azure AI Search | democracia-docs | ✅ |
| Cloudflare | DNS democraciareal.es | ✅ |
| GitHub | democracia-real/web | ✅ |

---

## Comandos útiles

```bash
# Re-indexar documentos
cd scripts
python index_to_azure_search.py

# Desplegar Azure Function
cd function-app
func azure functionapp publish democracia-chat-function

# Lanzar en local
npx serve web -p 3000
```
