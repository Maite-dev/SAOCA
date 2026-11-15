# Imágenes del sitio SAOCA

Todas las imágenes publicadas están en esta carpeta. **Para cambiar una foto, reemplace el archivo
conservando exactamente el mismo nombre y extensión**: la web la mostrará sin tocar HTML, CSS ni JavaScript.

> Si cambia el nombre o la extensión (por ejemplo de `.webp` a `.jpg`), debe actualizar la ruta en el
> HTML de la página indicada en las tablas (busque el nombre del archivo con *Buscar* en su editor).

## Origen de las fotografías

- **Registro fotográfico SAOCA**: las fotos con prefijo `saoca-` proceden de la carpeta
  `REGISTRO FOTOGRÁFICO SAOCA` (63 fotografías revisadas, 31 seleccionadas; cada foto de hero genera dos versiones). Sus originales, sin
  modificar, se copiaron a `assets/originales/registro-fotografico/` con el formato
  `nombre-web__NOMBRE-ORIGINAL.jpg`, para saber siempre de qué archivo procede cada imagen.
- **Proyecto web anterior**: `services/saoca-control-solidos.webp` procede de `about-bg.jpg`
  (`DesktopSAOCASAOCA-WEBsrcActivos`), una foto real de labores bajo la rejilla de una plataforma.
  Las demás imágenes de esa carpeta (`hero-bg`, `equipment-bg`, `experience-bg`, `experiencia-profesional`)
  se descartaron por ser composiciones o imágenes generadas, no fotografías de SAOCA.
- Ya no quedan fotografías de banco (Unsplash) en el sitio.
- Los textos alternativos (ALT) describen lo que se ve en cada foto. No atribuyen proyectos,
  clientes ni fechas concretas, porque esos datos no constan en los archivos.

## Reglas rápidas

- Formato: **WebP**, calidad 72–80 %. También sirven JPG o PNG si actualiza la ruta.
- Nombres en minúsculas, sin espacios, tildes ni ñ (`saoca-control-de-solidos.webp`).
- Respete la **proporción**: la página recorta la foto para llenar su espacio.
- Peso orientativo: hero < 300 KB; fotos de sección < 200 KB.
- Evite fotos con marcas de fecha/hora, marcas de agua, logos de terceros o personas no autorizadas.
- Para convertir a WebP puede usar <https://squoosh.app> (gratuito, en el navegador).

## Inventario

### `hero/` — portada (Inicio)

| Archivo | Uso | Medidas | Original | Sustituye a |
|---|---|---|---|---|
| `saoca-hero-operaciones.webp` | Portada en tabletas y escritorio | 1600 × 900 (16:9) | `IMG_20260401_145652.jpg` | foto de excavadoras `IMG-20240901-WA0080.jpg` |
| `saoca-hero-operaciones-movil.webp` | Portada en teléfonos | 1024 × 1152 (vertical) | `IMG_20260401_145652.jpg` | foto de excavadoras `IMG-20240901-WA0080.jpg` |

La portada muestra la atención de un derrame: cuadrilla aplicando material absorbente junto a una barrera de contención y plataformas petroleras. Está recortada para excluir la matrícula de la lancha y a una persona uniformada. La barrera y las plataformas quedan a la derecha, para que el texto se lea sobre el degradado oscuro de la izquierda. La misma foto se usa, con otro recorte, en el carrusel de Nosotros (`nosotros-hero-2`). La foto anterior de excavadoras (`IMG-20240901-WA0080.jpg`) queda en reserva en `assets/originales/`.
Si cambia la portada, actualice **los dos** archivos.

**Hero de Nosotros (carrusel de 3 fotografías, fundido cada 6 s):**

| Archivos | Contenido | Medidas | Original |
|---|---|---|---|
| `nosotros-hero-1.webp` / `nosotros-hero-1-movil.webp` | Cuadrilla de saneamiento entre tuberías (se carga primero) | 1920 × 880 / 800 × 1000 | `IMG_20230605_133932.jpg` |
| `nosotros-hero-2.webp` / `nosotros-hero-2-movil.webp` | Embarcación con barreras de contención (recortada para excluir a una persona uniformada y la matrícula) | 1920 × 880 / 800 × 1000 | `IMG_20260401_145652.jpg` |
| `nosotros-hero-3.webp` / `nosotros-hero-3-movil.webp` | Tractor de oruga en limpieza de terreno | 1920 × 880 / 800 × 1000 | `20240801_151746.jpg` |

**Hero de Servicios (carrusel de 3 fotografías, fundido cada 6 s):**

| Archivos | Contenido | Medidas | Original |
|---|---|---|---|
| `servicios-hero-1.webp` / `servicios-hero-1-movil.webp` | Personal con trajes de protección retirando residuos oleosos en una barcaza (se carga primero) | 1920 × 880 / 800 × 1000 | `IMG_20260403_072002.jpg` |
| `servicios-hero-2.webp` / `servicios-hero-2-movil.webp` | Terreno en recuperación y nivelación con maquinaria (recortada para excluir la marca de fecha y hora) | 1920 × 880 / 800 × 1000 | `IMG-20240907-WA0065.jpg` |
| `servicios-hero-3.webp` / `servicios-hero-3-movil.webp` | Retroexcavadora y camión de volteo en un patio de tanques | 1920 × 880 / 800 × 1000 | `IMG_20230605_093607.jpg` |

**Hero de Contacto (carrusel de 3 fotografías, fundido cada 6 s):**

| Archivos | Contenido | Medidas | Original |
|---|---|---|---|
| `contacto-hero-1.webp` / `contacto-hero-1-movil.webp` | Cuadrilla con EPP coordinando labores en una barcaza (se carga primero) | 1920 × 880 / 800 × 1000 | `IMG_20260407_132822.jpg` |
| `contacto-hero-2.webp` / `contacto-hero-2-movil.webp` | Operario con casco de SAOCA manipulando una barrera de contención (recortada para excluir el nombre y la matrícula de la embarcación) | 1920 × 880 / 800 × 1000 | `IMG_20260402_154821.jpg` |
| `contacto-hero-3.webp` / `contacto-hero-3-movil.webp` | Personal de SAOCA con uniforme corporativo inspeccionando una fosa junto a tanques | 1920 × 880 / 800 × 1000 | `20240910_103403.jpg` |

Para cambiar una foto de cualquiera de los tres carruseles, reemplace las dos versiones conservando los nombres.
Deje espacio libre a la izquierda de la imagen: ahí se superpone el texto.

### `about/` — empresa

| Archivo | Uso | Medidas | Original | Sustituye a |
|---|---|---|---|---|
| `saoca-instalacion-petrolera.webp` | Inicio → Quiénes somos (resumen) | 1000 × 750 (4:3) | `IMG_20230605_104111.jpg` | — (bloque nuevo) |
| `saoca-saneamiento-campo.webp` | Inicio → banda parallax | 1920 × 1080 (16:9) | `IMG_20230605_133932.jpg` | la misma escena, antes desde una copia de menor calidad (`about.png`) |
| `saoca-personal-epp.webp` | Nosotros → Quiénes somos (foto grande) | 900 × 1100 (vertical) | `IMG_20260401_125858.jpg` | `nosotros-principal.webp` (Unsplash) |
| `saoca-uniforme-corporativo.webp` | Nosotros → Quiénes somos (foto pequeña) | 540 × 540 (cuadrada) | `IMG-20241029-WA0030.jpg` | `nosotros-secundaria.webp` (Unsplash) |
| `saoca-inspeccion-seguridad.webp` | Nosotros → Calidad, seguridad y ambiente | 900 × 1100 (vertical) | `20250708_093835.jpg` | `calidad-seguridad.webp` (Unsplash) |
| `saoca-equipo-campo.webp` | Nosotros → Nuestro equipo | 1400 × 788 (16:9, se muestra panorámica) | `20240717_094338.jpg` | — (bloque nuevo) |

### `services/` — página Servicios (960 × 600, proporción 16:10)

| Archivo | Servicio | Original | Sustituye a |
|---|---|---|---|
| `saoca-saneamiento-ambiental.webp` | 01 · Saneamiento ambiental | `IMG_20260224_125330.jpg` | `saneamiento-ambiental.webp` (Unsplash) |
| `saoca-manejo-desechos.webp` | 02 · Manejo, tratamiento y disposición final de desechos | `IMG-20251007-WA0051.jpg` | `tratamiento-residuos.webp` (Unsplash) |
| `saoca-control-vegetacion.webp` | 03 · Control de vegetación | `IMG-20221206-WA0041.jpg` | `control-vegetacion.webp` (Unsplash) |
| `saoca-control-ambiental.webp` | 04 · Control ambiental | `IMG_20260401_145850.jpg` | `control-ambiental.webp` (Unsplash) |
| `saoca-control-solidos.webp` | 05 · Control de sólidos (720 × 450, resolución máxima del original) | `about-bg.jpg` del proyecto anterior (`DesktopSAOCASAOCA-WEBsrcActivos`) | `control-solidos.webp` (Unsplash) |
| `saoca-fluidos-perforacion.webp` | 06 · Fluidos de perforación | `IMG-20251007-WA0056.jpg` | `fluidos-perforacion.webp` (Unsplash) |
| `saoca-transporte-materiales.webp` | 07 · Transporte y logística | `IMG-20250521-WA0008.jpg` | `transporte-logistica.webp` (Unsplash) |
| `saoca-servicios-industriales.webp` | 08 · Servicios industriales y apoyo operativo | `IMG-20240803-WA0027.jpg` | `servicios-industriales.webp` (Unsplash) |

### `equipment/` — capacidad operativa

| Archivo | Uso | Medidas | Original | Sustituye a |
|---|---|---|---|---|
| `saoca-camion-volteo.webp` | Servicios → Capacidad operativa (**imagen de fondo** de la banda, bajo un velo azul) | 1920 × 900 | `IMG-20240907-WA0223.jpg` (recortado para eliminar la marca de fecha/hora) | `maquinaria-pesada.webp` (Unsplash) |

### `projects/` — registro de operaciones

| Archivo | Uso | Medidas | Original |
|---|---|---|---|
| `saoca-control-vegetacion-cuadrilla.webp` | Inicio → Nuestra experiencia en campo | 800 × 600 (4:3) | `IMG-20221206-WA0037.jpg` |
| `saoca-materiales-impregnados.webp` | Inicio → Nuestra experiencia en campo | 800 × 600 (4:3) | `IMG_20260407_092640.jpg` |
| `saoca-movimiento-tierras-aereo.webp` | Inicio → Nuestra experiencia en campo | 800 × 600 (4:3) | `IMG-20240806-WA0030.jpg` |
| `saoca-adecuacion-fosa.webp` | Servicios → Galería (foto principal) | 1152 × 720 | `IMG-20250626-WA0022.jpg` |
| `saoca-personal-embarcacion.webp` | Servicios → Galería | 1200 × 800 (3:2) | `IMG_20260403_102253.jpg` |
| `saoca-unidad-equipos.webp` | Servicios → Galería | 810 × 540 (3:2) | `IMG-20250902-WA0020.jpg` |
| `saoca-tractor-limpieza-terreno.webp` | Servicios → Galería | 1200 × 800 (3:2) | `20240801_151746.jpg` |
| `saoca-payloader-material.webp` | Servicios → Galería | 1200 × 800 (3:2) | `100_2063.jpg` |
| `saoca-personal-tuberias.webp` | Servicios → Galería | 1200 × 800 (3:2) | `20250708_093858.jpg` |

La galería anterior (dos fotos de Unsplash más la escena de saneamiento) fue sustituida por estas seis fotos propias.

### `cta/` — fondos de las llamadas a la acción

Cada página usa una foto distinta, que no aparece ya en esa misma página. Se muestran como fondo
(`background-size: cover`) bajo un velo azul marino que garantiza la lectura del texto blanco, y se
cargan solo cuando el bloque se acerca a la pantalla. La versión `-movil` se usa en pantallas de hasta 720 px.

| Archivos | Página | Medidas | Original |
|---|---|---|---|
| `saoca-cta-inicio.webp` / `saoca-cta-inicio-movil.webp` | Inicio | 1920 × 820 / 800 × 1000 | `20250708_093858.jpg` |
| `saoca-cta-nosotros.webp` / `saoca-cta-nosotros-movil.webp` | Nosotros | 1920 × 820 / 800 × 1000 | `IMG_20260224_125330.jpg` |
| `saoca-cta-servicios.webp` / `saoca-cta-servicios-movil.webp` | Servicios | 1920 × 820 / 800 × 1000 | `IMG_20230605_104111.jpg` |
| `saoca-cta-contacto.webp` / `saoca-cta-contacto-movil.webp` | Contacto | 1920 × 820 / 800 × 1000 | `IMG_20260401_145850.jpg` |

Las rutas de las fotos están en los atributos `data-bg` y `data-bg-sm` del bloque `cta-band__card`.
Para cambiar el encuadre sin editar la foto, ajuste `--cta-pos` (escritorio) y `--cta-pos-sm` (móvil)
en el atributo `style` del bloque `cta-band__card` de la página (por ejemplo `50% 40%`).

### `brand/` y `clients/`

| Archivo | Uso | Medidas |
|---|---|---|
| `brand/saoca-logo-encabezado.webp` | Encabezado de las 4 páginas (se muestra a 50 px de alto; 44 px en móvil) | 302 × 200, fondo transparente, ~21 KB |
| `brand/SAOCA TRANSPARENTE HD.png` | Original en alta resolución del logo del encabezado (no se carga en la web). Si cambia, regenere `saoca-logo-encabezado.webp` a 200 px de alto | 3192 × 2111, 3,5 MB |
| `brand/logo-saoca.webp` | Logotipo de los datos estructurados (buscadores) y de la imagen para redes | 240 × 204, fondo transparente |
| `brand/logo-saoca-blanco.webp` | Pie de página y 404 | 400 × 340, texto blanco |
| `brand/og-saoca.jpg` | Vista previa al compartir en redes (foto del hero de Inicio, `IMG_20260401_145652.jpg`, con logotipo y lema) | 1200 × 630, JPG |
| `brand/SAOCA TRANSPARENTE HD ORIGINAL WEB.webp` | **Sin uso.** Añadido por la empresa; logo HD con texto azul para fondos claros. Si se quiere usar, renómbrelo sin espacios (p. ej. `logo-saoca-hd.webp`) | 3192 × 2111 |
| `clients/*.webp` | Cinta de logos (Inicio → Experiencia) | ~640 px de ancho |

## Procedimientos

### Reemplazar una foto (mismo nombre)
1. Prepare la imagen con las medidas de la tabla y expórtela como WebP.
2. Póngale **exactamente** el nombre del archivo que va a sustituir y cópiela en la misma carpeta.
3. Recargue la página con `Ctrl + F5`.
4. Si la nueva foto muestra otra escena, actualice su texto ALT (ver abajo).
5. Opcional: guarde el original en `assets/originales/registro-fotografico/` (no se publica en la web).

### Añadir una foto a la galería
1. Guarde la foto como `projects/saoca-nombre-descriptivo.webp` (1200 × 800).
2. En `servicios.html`, dentro de `<ul class="gallery">`, copie un bloque `<li class="gallery__item reveal">…</li>`.
3. En la copia cambie `data-full="…"`, `src="…"`, `alt="…"` y el texto del pie.
   La galería tiene 3 columnas: la foto principal ocupa 2 × 2 y las demás 1 × 1. Para que no queden huecos,
   añada fotos de 3 en 3.

### Actualizar los textos ALT
Busque el nombre del archivo en el HTML y edite `alt="…"`. Describa lo que se ve, en una frase y sin
repetir palabras clave. Mencione a SAOCA, a un cliente o un proyecto **solo si consta con certeza**.

## Selección del registro fotográfico (63 fotos)

**Seleccionadas (31 del registro + 1 del proyecto anterior):** las indicadas en las tablas anteriores.

**Descartadas o reservadas** (siguen intactas en la carpeta original):

| Motivo | Archivos |
|---|---|
| Baja resolución o recortadas (menos de ~800 px útiles) | `IMG-20260806-WA0063 - copia.jpg`, `IMG-20260806-WA0077.jpg`, `IMG-20230530-WA0053.jpg`, `IMG-20230530-WA0060.jpg`, `IMG-20230127-WA0008.jpg`, `IMG-20230128-WA0001.jpg`, `IMG-20230129-WA0005.jpg`, `IMG-20230129-WA0022.jpg`, `IMG-20230525-WA0047.jpg`, `IMG-20250826-WA0051.jpg`, `IMG-20250826-WA0053.jpg` |
| Contexto institucional, uniformes militares o imágenes políticas (no aptas para la web) | `IMG-20241031-WA0045.jpg`, `IMG-20250316-WA0016.jpg` |
| Actividades de jardinería o comunitarias poco relacionadas con los servicios | `IMG-20241205-WA0033.jpg`, `IMG-20241211-WA0025.jpg` |
| Motoniveladora cortada en el borde de la foto | `IMG-20250217-WA0044.jpg` |
| Escenas repetidas (se usó la mejor de cada serie) | `20240717_091413.jpg`, `20240903_113614.jpg`, `IMG-20221206-WA0022.jpg`, `IMG-20221206-WA0023.jpg`, `IMG-20240802-WA0237.jpg`, `IMG-20240806-WA0032.jpg`, `IMG-20250308-WA0078.jpg`, `IMG-20250308-WA0080.jpg`, `IMG-20250626-WA0018.jpg`, `IMG_20230607_133614.jpg`, `IMG-20241014-WA0066.jpg`, `IMG-20260402-WA0011.jpg`, `IMG_20260401_145554.jpg`, `IMG_20260401_152838.jpg`, `IMG_20260401_153108.jpg`, `IMG_20260403_072421.jpg` |

Algunas reservadas tienen buena calidad (por ejemplo `IMG-20241014-WA0066.jpg`, unidad de oficina móvil,
o la serie de abril de 2026 con barreras de contención en un cuerpo de agua) y pueden añadirse a la
galería en el futuro.

## Pendientes que requieren revisión de la empresa

- **Control de sólidos y fluidos de perforación**: el material disponible no incluye fotos de equipos de control
  de sólidos (zarandas, centrífugas) ni de sistemas de lodos identificables. Se usan las dos fotos reales más
  cercanas, con textos ALT que solo describen lo que se ve. Si la empresa dispone de fotos de esos equipos,
  sustituya `services/saoca-control-solidos.webp` y `services/saoca-fluidos-perforacion.webp` (960 × 600).
- **Personas**: verificar que las personas que aparecen en las fotos publicadas autorizan su uso.
- **Fechas y lugares**: los nombres de archivo sugieren fechas, pero no se usan en la web por no estar confirmados.
