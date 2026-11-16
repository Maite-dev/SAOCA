# SAOCA — Servicios Ambientales Oriente, C.A.

Sitio web corporativo de SAOCA, empresa venezolana de servicios ambientales para la industria petrolera e industrial (Maturín, estado Monagas).

Sitio estático en HTML, CSS y JavaScript, sin compilación: se publica tal cual.

## Páginas

| Archivo | Contenido |
|---|---|
| `index.html` | Inicio |
| `nosotros.html` | Sobre nosotros |
| `servicios.html` | Servicios y capacidad operativa |
| `contacto.html` | Contacto y formulario de cotización |
| `404.html` | Página no encontrada |
| `mantenimiento.html` | Sitio en mantenimiento (se activa con `herramientas/_redirects-mantenimiento`) |

## URL limpias

Las páginas se publican sin extensión: `/`, `/nosotros`, `/servicios`, `/contacto`. Los archivos siguen siendo `.html`; las direcciones antiguas con `.html` redirigen (301) a la versión limpia.

- `.htaccess` — reglas para servidores Apache o LiteSpeed (por ejemplo, el hosting de Namecheap).
- `_redirects` — las mismas reglas para Netlify, que no lee `.htaccess`.

Los enlaces y recursos usan rutas desde la raíz (`/contacto`, `/assets/...`), por lo que el sitio debe verse a través de un servidor, no abriendo los archivos con doble clic.

## Carpetas

- `css/styles.css` — estilos del sitio.
- `js/main.js` — menú, animaciones, galería y formulario. Los datos de contacto y la clave de Web3Forms están al inicio del archivo.
- `assets/images/` — imágenes optimizadas (WebP). Inventario y procedencia en `assets/images/README.md`.
- `herramientas/` — `configurar-dominio.js` (escribe el dominio definitivo en canonical, Open Graph, sitemap y robots) y la plantilla para activar el mantenimiento.

## Formulario

Las solicitudes de cotización se envían con [Web3Forms](https://web3forms.com) al correo asociado a la clave configurada en `js/main.js`.

## Publicación

Se publica en Netlify. Antes de conectar el dominio definitivo:

```bash
node herramientas/configurar-dominio.js https://www.saoca.com.ve
```

---

Desarrollado por [SOPORTEC MR](https://soportecmr.netlify.app/).
