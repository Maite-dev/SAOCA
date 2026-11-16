#!/usr/bin/env node
/*
  Configura el dominio definitivo del sitio SAOCA.

  Uso (desde la carpeta SAOCA-WEB):
    node herramientas/configurar-dominio.js https://www.su-dominio.com

  Qué hace:
    1. Sustituye el dominio provisional (o el anterior) en las 4 páginas, sitemap.xml y robots.txt.
    2. Activa las etiquetas canonical, og:url, og:image y twitter:image (bloque SEO-DOMINIO).
    3. Activa la línea "Sitemap:" de robots.txt y pone la fecha del día en sitemap.xml.
    4. Convierte en URL completas las rutas de los datos estructurados (Google las requiere absolutas).
  Puede ejecutarse de nuevo si el dominio cambia.
*/
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PLACEHOLDER = 'https://www.DOMINIO-PENDIENTE.com';
const STATE = path.join(__dirname, '.dominio-actual');
const FILES = ['index.html', 'nosotros.html', 'servicios.html', 'contacto.html', '404.html', 'sitemap.xml', 'robots.txt'];

const input = (process.argv[2] || '').trim().replace(/\/+$/, '');
if (!/^https:\/\/[a-z0-9.-]+\.[a-z]{2,}$/i.test(input)) {
  console.error('Indique el dominio completo con https y sin barra final.\nEjemplo: node herramientas/configurar-dominio.js https://www.saoca.com.ve');
  process.exit(1);
}

const previous = fs.existsSync(STATE) ? fs.readFileSync(STATE, 'utf8').trim() : PLACEHOLDER;
let changed = 0;

for (const name of FILES) {
  const file = path.join(ROOT, name);
  if (!fs.existsSync(file)) continue;
  let s = fs.readFileSync(file, 'utf8');
  const before = s;
  s = s.split(previous).join(input).split(PLACEHOLDER).join(input);
  // Activa el bloque de metadatos que dependen del dominio
  s = s.replace(/<!-- SEO-DOMINIO:[^\n]*\n([\s\S]*?)\s*FIN-SEO-DOMINIO -->/g, '<!-- SEO-DOMINIO (activo) -->\n$1');
  if (name === 'robots.txt') s = s.replace(/^# Sitemap: /m, 'Sitemap: ');
  if (name === 'sitemap.xml') {
    s = s.replace(/<!-- Las URL usan un dominio provisional[^>]*-->\n/, '');
    s = s.replace(/<lastmod>[^<]*<\/lastmod>/g, '<lastmod>' + new Date().toISOString().slice(0, 10) + '</lastmod>');
  }
  if (name.endsWith('.html')) {
    // Datos estructurados: rutas relativas a URL absolutas; la empresa y el sitio comparten identificador en todas las páginas
    const pageUrl = name === 'index.html' ? input + '/' : input + '/' + name.replace(/\.html$/, '');
    const abs = v => /^https?:/.test(v) ? v
      : v === 'index.html' || v === '/' ? input + '/'
      : /^\/?[a-z-]+(\.html)?(#.*)?$/.test(v) && !v.startsWith('#') ? input + '/' + v.replace(/^\//, '').replace(/\.html(?=#|$)/, '')
      : v.startsWith('#') ? (/^#(organizacion|sitio)$/.test(v) ? input + '/' + v : pageUrl + v)
      : input + '/' + v.replace(/^\//, '');
    s = s.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, block =>
      block.replace(/("(?:@id|url|logo|image|item)":\s*")([^"]+)"/g, (m, key, v) => key + abs(v) + '"'));
  }
  if (s !== before) { fs.writeFileSync(file, s); changed++; console.log('  actualizado:', name); }
}

fs.writeFileSync(STATE, input + '\n');
console.log(`\nDominio configurado: ${input} (${changed} archivos modificados).`);
console.log('Siguiente paso: publique el sitio y envíe ' + input + '/sitemap.xml en Google Search Console.');
