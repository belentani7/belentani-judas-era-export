# Belentani // Judas Era — exportación integral

Esta carpeta reúne el proyecto web restaurado desde `judasweb111.zip`, el material fuente aportado, los assets visuales disponibles, los scripts de extracción, los informes de verificación y el registro conversacional accesible de la tarea.

## Estructura

| Carpeta | Contenido |
|---|---|
| `project/` | Código del proyecto web, configuración, lockfile, assets públicos y documentación de diseño. No contiene `node_modules`, `dist` ni logs de desarrollo. |
| `source-material/` | ZIP raíz, archivos pegados y fuentes textuales originales recuperadas. |
| `assets/` | Imágenes originales y fotografías descargadas o restauradas que estaban disponibles en la sesión. |
| `notes/` | Scripts de extracción, hallazgos visuales, hallazgos del navegador y `CHAT_EXPORT.md`. |
| `versions/` | Manifiestos y referencias de checkpoints. |

## Reproducción local

En `project/`, instalar dependencias con `pnpm install` y ejecutar `pnpm build`. La web usa el HTML original como entrada y conserva las ocho secciones, la galería, el portal 3D, el chat y el Studio.

## Versiones

Los identificadores de checkpoint están documentados en `notes/CHAT_EXPORT.md` y `versions/CHECKPOINTS.md`. GitHub contiene el código exportado y este paquete completo; los checkpoints de Manus siguen siendo referencias del historial de la plataforma.

## Transcripción

`notes/CHAT_EXPORT.md` contiene el historial conversacional accesible y declara explícitamente qué partes se resumen por haber quedado fuera del contexto disponible. No se incluyen instrucciones internas, tokens, cookies ni secretos.

## Limitaciones conocidas

Las plataformas externas pueden impedir el uso de iframes por su política de inserción. El audio original no estaba disponible como archivos locales, por lo que el proyecto conserva las referencias de plataforma y un fallback de Tone.js para que el portal no se bloquee.
