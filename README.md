# NACIÓN 25 — Portal del periódico (SILENCIO 25)

Prototipo web del periódico ficticio **Nación 25**, que aparece dentro del cortometraje *Silencio 25*.
Es HTML + CSS + JavaScript puro: sin backend, sin frameworks, sin instalación.

> Todo el contenido (noticias, nombres, empresas, cifras) es **ficticio** y solo sirve para la película.

## ⚠️ Pendiente antes de grabar

**Falta la foto de la noticia del alcalde.** El archivo `assets/images/alcalde-informes.jpg` es
ahora mismo un **PLACEHOLDER** (un fondo con el aviso "IMAGEN PENDIENTE"). En cuanto tengas la
foto real, reemplaza ese archivo **manteniendo el mismo nombre** (`alcalde-informes.jpg`) y no
hace falta tocar nada más: aparece sola en la portada y en la noticia individual.

## Estructura

```
Nación 25/
├── index.html      Portada (solo el esqueleto; el contenido lo arma script.js)
├── noticia.html    Página individual de noticia (lee ?id=... de la dirección)
├── style.css       Todo el diseño (colores y fuentes en la sección 1 "VARIABLES")
├── data.js         ★ TODAS las noticias, fechas, autores, categorías, comentarios y ticker
├── script.js       Construye cabecera, portada, noticia, comentarios, menú móvil y pie
└── assets/
    ├── images/     Fotos (reemplázalas manteniendo el nombre)
    ├── fonts/      Thermal VF (vía Adobe Fonts) y Nimbus Mono (archivos locales)
    └── icons/      favicon.svg
```

## Cómo ejecutarlo

1. Descomprime la carpeta.
2. Haz doble clic en `index.html` (se abre en el navegador). Necesitas internet para Thermal VF
   (Adobe Fonts) y las fuentes de respaldo.
3. Recomendado: en VS Code instala "Live Server" → clic derecho en `index.html` → *Open with Live Server*.

Flujo de la escena: portada → scroll → clic en "Últimas noticias" (o en la noticia principal) →
se abre la página individual → scroll para leer → comentarios al final.

## Fuentes

- **Thermal VF**: conectada vía Adobe Fonts (Typekit). El link ya está puesto en `index.html` y
  `noticia.html`. Necesita internet para cargar; revisa que el proyecto de Adobe siga activo y
  que el dominio donde publiques la web (por ejemplo tu proyecto de Vercel) esté agregado en la
  configuración de dominios de Adobe Fonts.
- **Nimbus Mono**: archivos locales en `assets/fonts/NimbusMono-Regular.otf` y
  `NimbusMono-Bold.otf`. Si cambias de archivos, actualiza la sección `0. FUENTES` de `style.css`
  (nombre de archivo y `format()` según sea `.otf`, `.ttf` o `.woff2`).

Si por algún motivo las dos fallan, el sitio cae en Playfair Display y Courier Prime de respaldo
(vía Google Fonts), así nunca se rompe el diseño.

## Imágenes

Todas son **placeholders generados** (siluetas en blanco y negro, sin personas reales), cada
noticia con una imagen distinta. Reemplázalas por tus fotos con el **mismo nombre** en
`assets/images/`. La única obligatoria por ahora es `alcalde-informes.jpg` (ver el aviso arriba).

## Cómo editar contenido (todo en data.js)

- **Fecha del diario, número, clima, ticker:** objeto `SITE` al inicio. Todas las noticias deben
  fecharse en 2025 y nunca después de `SITE.fecha`.
- **Cambiar un titular / bajada / autor / hora / imagen:** busca la noticia en `NEWS` (por ejemplo
  `"alcalde-informes"`) y edita `titulo`, `bajada`, `autor`, `hora`, `img`.
- **Cambiar el texto de una noticia:** edita la lista `cuerpo`. Cada elemento es un párrafo.
  Especiales: `"## Subtítulo"`, `"PULLQUOTE::«cita»"`, `"IMAGE::archivo.jpg::pie de foto"`.
- **Comentarios de lectores:** agrega un campo `comentarios: [{ autor: "...", texto: "..." }, ...]`
  a cualquier noticia y aparecerán automáticamente al final del artículo.
- **Agregar una noticia nueva:**
  1. Copia un bloque de `NEWS`, cambia la clave (ej. `"mi-noticia"`) y sus campos.
  2. Agrega esa clave en `PORTADA` donde quieras que aparezca (`secciones`, `laterales`, `ultimas`,
     `masLeidas`, o dentro de `especial.items`).
  3. Se abrirá en `noticia.html?id=mi-noticia`.
- **Cambiar la noticia principal de la portada:** `PORTADA.principal`.
- **Cambiar la noticia destacada del bloque rojo "Últimas noticias":** `PORTADA.especial.destacada`.
- **Modificar categorías/menú:** lista `SECCIONES`. El `id` debe coincidir con una sección de la
  portada (para que el menú te lleve a ella).
- **Buscar comentarios `CAMBIAR:`** en `script.js` y `data.js` para localizar logo, titular,
  imagen, autor y fecha rápidamente.

## Diseño (para ajustar)

- Rojo, negro y fuentes: variables en `style.css` (sección 1).
- Tamaño, peso y color del logo: `.logo-a`, `.logo-b` y las reglas `.masthead .logo-a` /
  `.masthead .logo-b` (estas dos son las que fijan "Nación" en negro y "25" en rojo solo en la
  cabecera; el logo del pie y del menú fijo se quedan en rojo completo).
- La franja superior, el bloque rojo "Últimas noticias", el bloque negro de Investigación y las
  columnas con líneas vienen de la maqueta impresa.

## Subir a GitHub

```bash
cd "Nación 25"
git init
git add .
git commit -m "Portal Nación 25"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/silencio-25.git
git push -u origin main
```
(Antes crea un repositorio vacío llamado `silencio-25` en github.com.)

## Desplegar en Vercel

1. Entra a vercel.com e inicia sesión con GitHub.
2. *Add New → Project* → importa el repositorio.
3. *Framework Preset:* **Other**. No pongas comando de build ni carpeta de salida.
4. *Deploy*. Al terminar tendrás una dirección pública.
5. Si usas Thermal VF por Adobe Fonts, entra a tu proyecto en Adobe Fonts y agrega el dominio de
   Vercel (por ejemplo `tu-proyecto.vercel.app`) a los dominios permitidos, o la fuente no cargará
   en la web publicada.
