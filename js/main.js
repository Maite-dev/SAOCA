/* SAOCA — interacciones del sitio */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* ---------- Datos de contacto que usa el formulario ----------
     Si cambian, actualícelos aquí y en el HTML (ver GUIA-DE-MANTENIMIENTO.md). */
  var CONFIG = {
    whatsapp: '584147666094',                 // Número internacional sin "+" ni espacios
    correoCotizaciones: 'contacto@saoca.com.ve',
    telefono: { mostrar: '0414-7666094', enlace: '+584147666094' },
    // Clave gratuita de Web3Forms (web3forms.com): se obtiene con el correo que recibirá las solicitudes.
    // Mientras esté vacía, el formulario abre la aplicación de correo del visitante con la solicitud redactada.
    web3formsKey: '89658608-9397-4830-b473-774ce747d024'
  };
  var WHATSAPP_NUMBER = CONFIG.whatsapp;
  var QUOTE_EMAIL = CONFIG.correoCotizaciones;
  var WEB3FORMS_KEY = CONFIG.web3formsKey;
  var WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ---------- Año del footer ---------- */
  var year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Header al hacer scroll ---------- */
  var header = $('.site-header');
  var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 40); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Menú móvil ---------- */
  var toggle = $('.nav-toggle');
  var nav = $('#site-nav');
  var mobileQuery = window.matchMedia('(max-width: 1060px)');

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    if (open) { var first = $('a', nav); if (first) first.focus(); }
  }
  toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a') && mobileQuery.matches) setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); toggle.focus(); }
  });
  mobileQuery.addEventListener('change', function (e) { if (!e.matches) setMenu(false); });

  /* ---------- Llegada a una sección desde otra página (servicios.html#...) ---------- */
  // Respaldo por si el navegador no completa el salto antes de que terminen de cargar las fuentes e imágenes.
  if (location.hash.length > 1) {
    window.addEventListener('load', function () {
      var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target && Math.abs(target.getBoundingClientRect().top) > 120) target.scrollIntoView({ block: 'start', behavior: 'instant' });
    });
  }

  /* ---------- Animaciones de aparición ---------- */
  var reveals = $$('.reveal');
  // Escalonado suave entre elementos hermanos
  reveals.forEach(function (el) {
    var siblings = Array.prototype.filter.call(el.parentElement.children, function (c) { return c.classList.contains('reveal'); });
    var i = siblings.indexOf(el);
    if (i > 0) el.style.setProperty('--d', Math.min(i * 0.07, 0.5) + 's');
  });
  if ('IntersectionObserver' in window) {
    var revealer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { revealer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Parallax ---------- */
  // Cada capa se desplaza a distinta velocidad según la posición de la sección en pantalla.
  var parallaxSections = $$('[data-parallax]');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (parallaxSections.length && !reduceMotion.matches) {
    var layers = {
      media:     function (p) { return 'translate3d(0,' + (-p * 12).toFixed(2) + '%,0) scale(1.04)'; },
      watermark: function (p) { return 'translate3d(' + (p * 12).toFixed(2) + '%,0,0)'; },
      content:   function (p) { return 'translate3d(0,' + (p * 40).toFixed(1) + 'px,0)'; }
    };
    var ticking = false;
    var updateParallax = function () {
      ticking = false;
      var vh = window.innerHeight;
      parallaxSections.forEach(function (section) {
        var r = section.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        // p va de 1 (sección entrando por abajo) a -1 (saliendo por arriba)
        var p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2)));
        $$('[data-parallax-layer]', section).forEach(function (el) {
          el.style.transform = layers[el.dataset.parallaxLayer](p);
        });
      });
    };
    var requestParallax = function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(updateParallax); }
    };
    window.addEventListener('scroll', requestParallax, { passive: true });
    window.addEventListener('resize', requestParallax);
    updateParallax();
  }

  /* ---------- Fondos de las llamadas a la acción (carga diferida) ---------- */
  // La foto se toma de data-bg (escritorio) o data-bg-sm (móvil) y se resuelve como URL absoluta,
  // para que la ruta sea siempre relativa a la página y no a la hoja de estilos.
  var ctaCards = $$('.cta-band__card[data-bg]');
  var ctaMobile = window.matchMedia('(max-width: 720px)');
  var setCtaPhoto = function (card) {
    var src = (ctaMobile.matches && card.dataset.bgSm) || card.dataset.bg;
    var overlay = getComputedStyle(card).getPropertyValue('--cta-overlay').trim();
    card.style.backgroundImage = (overlay ? overlay + ', ' : '') + 'url("' + new URL(src, document.baseURI).href + '")';
    card.classList.add('is-bg-ready');
  };
  if (ctaCards.length) {
    if ('IntersectionObserver' in window) {
      var ctaObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) { if (entry.isIntersecting) { setCtaPhoto(entry.target); obs.unobserve(entry.target); } });
      }, { rootMargin: '400px 0px' });
      ctaCards.forEach(function (card) { ctaObserver.observe(card); });
    } else {
      ctaCards.forEach(setCtaPhoto);
    }
    ctaMobile.addEventListener('change', function () {
      ctaCards.forEach(function (card) { if (card.classList.contains('is-bg-ready')) setCtaPhoto(card); });
    });
  }

  /* ---------- Botones que llevan al formulario de cotización ---------- */
  $$('[data-focus-form]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var form = $('#quote-form');
      if (!form) return;
      e.preventDefault();
      form.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
      var first = form.querySelector('input, select, textarea');
      setTimeout(function () {
        // Si el desplazamiento suave no se completó, se salta directamente al formulario
        var top = form.getBoundingClientRect().top;
        if (top < -40 || top > window.innerHeight * 0.6) form.scrollIntoView({ behavior: 'instant', block: 'start' });
        if (first) first.focus({ preventScroll: true });
      }, reduceMotion.matches ? 0 : 700);
      if (history.replaceState) history.replaceState(null, '', '#quote-form');
    });
  });

  /* ---------- Preguntas frecuentes: acordeón con una sola respuesta abierta ---------- */
  $$('[data-accordion]').forEach(function (list) {
    var items = $$('.faq__item', list);
    var setOpen = function (item, open) {
      item.classList.toggle('is-open', open);
      $('.faq__q', item).setAttribute('aria-expanded', String(open));
    };
    items.forEach(function (item) { setOpen(item, false); }); // todas cerradas al cargar

    items.forEach(function (item) {
      var btn = $('.faq__q', item);
      btn.addEventListener('click', function () {
        var opening = !item.classList.contains('is-open');
        var before = btn.getBoundingClientRect().top;
        // La respuesta anterior se cierra al instante para que la pregunta pulsada no se desplace
        items.forEach(function (other) {
          if (other !== item && other.classList.contains('is-open')) {
            other.classList.add('no-anim');
            setOpen(other, false);
            void other.offsetHeight;
            other.classList.remove('no-anim');
          }
        });
        var shift = btn.getBoundingClientRect().top - before;
        if (Math.abs(shift) > 1) window.scrollBy({ top: shift, left: 0, behavior: 'instant' });
        setOpen(item, opening);
      });
    });
  });

  /* ---------- Hero con fotografías rotativas (Nosotros) ---------- */
  // Fundido cada 6 s. Se detiene si la pestaña está oculta o el hero queda fuera de pantalla,
  // y no rota cuando el usuario prefiere reducir el movimiento.
  $$('[data-hero-rotator]').forEach(function (hero) {
    var slides = $$('.photo-hero__slide', hero);
    if (slides.length < 2 || reduceMotion.matches) return;
    var current = 0, timer = null, visible = true;
    var ready = function (slide) { var img = $('img', slide); return img.complete && img.naturalWidth > 0; };
    var next = function () {
      var n = (current + 1) % slides.length;
      if (!ready(slides[n])) return; // espera a que la siguiente foto haya cargado
      slides[current].classList.remove('is-active');
      slides[n].classList.add('is-active');
      current = n;
    };
    var start = function () { if (!timer && visible && !document.hidden) timer = setInterval(next, 6000); };
    var stop = function () { clearInterval(timer); timer = null; };
    document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); else start(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (visible) start(); else stop();
      }).observe(hero);
    }
    start();
  });

  /* ---------- Mapa diferido ---------- */
  var mapFrame = $('.map iframe');
  if (mapFrame) {
    var loadMap = function () { if (!mapFrame.src) mapFrame.src = mapFrame.dataset.src; };
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries, obs) {
        if (entries[0].isIntersecting) { loadMap(); obs.disconnect(); }
      }, { rootMargin: '400px' }).observe(mapFrame);
    } else { loadMap(); }
  }

  var items = $$('.gallery__item');

  /* ---------- Galería: lightbox ---------- */
  var lightbox = $('#lightbox');
  var lbImg = $('.lightbox__img');
  var lbCap = $('.lightbox__cap');
  var current = 0;
  var lastTrigger = null;

  function visibleButtons() {
    return items.map(function (i) { return $('.gallery__btn', i); });
  }
  function show(index) {
    var btns = visibleButtons();
    if (!btns.length) return;
    current = (index + btns.length) % btns.length;
    var btn = btns[current];
    var thumb = $('img', btn);
    lbImg.src = btn.dataset.full;
    lbImg.alt = thumb.alt;
    lbCap.textContent = $('.gallery__cap', btn).firstChild.textContent.trim();
  }
  if (lightbox && typeof lightbox.showModal === 'function') {
    $$('.gallery__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        lastTrigger = btn;
        show(visibleButtons().indexOf(btn));
        lightbox.showModal();
      });
    });
    $('.lightbox__close').addEventListener('click', function () { lightbox.close(); });
    $('.lightbox__nav--prev').addEventListener('click', function () { show(current - 1); });
    $('.lightbox__nav--next').addEventListener('click', function () { show(current + 1); });
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) lightbox.close(); });
    lightbox.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') show(current - 1);
      if (e.key === 'ArrowRight') show(current + 1);
    });
    lightbox.addEventListener('close', function () { lbImg.removeAttribute('src'); if (lastTrigger) lastTrigger.focus(); });
  } else {
    // Navegadores sin <dialog>: abrir la imagen en una pestaña nueva
    $$('.gallery__btn').forEach(function (btn) {
      btn.addEventListener('click', function () { window.open(btn.dataset.full, '_blank', 'noopener'); });
    });
  }

  /* ---------- Formulario de cotización ---------- */
  var form = $('#quote-form');
  if (!form) return;
  var status = $('#form-status');
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var PHONE_RE = /^[+()\d\s.-]{7,20}$/;

  var rules = {
    nombre: function (v) { return v.trim().length >= 3 || 'Indique su nombre y apellido.'; },
    empresa: function (v) { return v.trim().length >= 2 || 'Indique el nombre de su empresa.'; },
    correo: function (v) {
      if (!v.trim()) return 'Indique su correo electrónico.';
      return EMAIL_RE.test(v.trim()) || 'El correo no parece válido (ej.: nombre@empresa.com).';
    },
    telefono: function (v) {
      if (!v.trim()) return 'Indique un teléfono de contacto.';
      return (PHONE_RE.test(v.trim()) && v.replace(/\D/g, '').length >= 7) || 'Indique un teléfono válido (ej.: 0414-0000000).';
    },
    servicio: function (v) { return !!v || 'Seleccione el servicio de su interés.'; },
    mensaje: function (v) { return v.trim().length >= 15 || 'Describa brevemente su requerimiento (mínimo 15 caracteres).'; },
    consentimiento: function (_, el) { return el.checked || 'Debe autorizar el uso de sus datos para poder responderle.'; }
  };

  function validateField(el) {
    var rule = rules[el.name];
    if (!rule) return true;
    var result = rule(el.value, el);
    var field = el.closest('.field');
    var err = $('.field__error', field);
    var ok = result === true;
    field.classList.toggle('is-invalid', !ok);
    field.classList.toggle('is-valid', ok && el.type !== 'checkbox');
    el.setAttribute('aria-invalid', String(!ok));
    if (err) err.textContent = ok ? '' : result;
    return ok;
  }

  Object.keys(rules).forEach(function (name) {
    var el = form.elements[name];
    if (!el) return;
    el.addEventListener('blur', function () { if (el.value || el.type === 'checkbox') validateField(el); });
    el.addEventListener(el.tagName === 'SELECT' || el.type === 'checkbox' ? 'change' : 'input', function () {
      if (el.closest('.field').classList.contains('is-invalid')) validateField(el);
    });
  });

  function validateAll() {
    var firstInvalid = null;
    Object.keys(rules).forEach(function (name) {
      var el = form.elements[name];
      if (el && !validateField(el) && !firstInvalid) firstInvalid = el;
    });
    if (firstInvalid) {
      status.className = 'form-status is-error';
      status.textContent = 'Revise los campos marcados para continuar.';
      firstInvalid.focus();
      return false;
    }
    return true;
  }

  function buildMessage() {
    var f = form.elements;
    var lines = [
      'Solicitud de cotización — SAOCA',
      '',
      'Nombre: ' + f.nombre.value.trim(),
      'Empresa: ' + f.empresa.value.trim(),
      'Correo: ' + f.correo.value.trim(),
      'Teléfono: ' + f.telefono.value.trim(),
      'Servicio de interés: ' + f.servicio.value
    ];
    if (f.ubicacion.value.trim()) lines.push('Ubicación del proyecto: ' + f.ubicacion.value.trim());
    lines.push('', 'Requerimiento:', f.mensaje.value.trim());
    return lines.join('\n');
  }

  function success(channel) {
    status.className = 'form-status is-success';
    status.innerHTML = '<strong>¡Gracias por contactarnos!</strong> Se abrió ' + channel +
      ' con su solicitud lista para enviar. Si no se abrió automáticamente, escríbanos a ' +
      '<a href="mailto:' + QUOTE_EMAIL + '">' + QUOTE_EMAIL + '</a> o llame al ' +
      '<a href="tel:' + CONFIG.telefono.enlace + '">' + CONFIG.telefono.mostrar + '</a>.';
    status.focus();
  }

  function subjectLine() {
    return 'Solicitud de cotización: ' + form.elements.servicio.value + ' — ' + form.elements.empresa.value.trim();
  }

  function mailtoHref() {
    return 'mailto:' + QUOTE_EMAIL + '?subject=' + encodeURIComponent(subjectLine()) + '&body=' + encodeURIComponent(buildMessage());
  }

  var submitBtn = $('button[type="submit"]', form);
  var submitHTML = submitBtn.innerHTML;
  var sending = false;

  function setSending(on) {
    sending = on;
    submitBtn.disabled = on;
    submitBtn.innerHTML = on ? 'Enviando…' : submitHTML;
    form.setAttribute('aria-busy', String(on));
  }

  function sent() {
    form.reset();
    $$('.field', form).forEach(function (f) { f.classList.remove('is-valid', 'is-invalid'); });
    status.className = 'form-status is-success';
    status.innerHTML = '<strong>¡Gracias por su solicitud!</strong> La recibimos correctamente. ' +
      'Le responderemos al correo o al teléfono que nos indicó.';
    status.focus();
  }

  function failed(text) {
    status.className = 'form-status is-error';
    status.innerHTML = '<strong>No pudimos enviar su solicitud.</strong> Revise su conexión e inténtelo de nuevo, ' +
      'o envíela por <a href="https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text) + '" target="_blank" rel="noopener">WhatsApp</a> ' +
      'o a <a href="' + mailtoHref() + '">' + QUOTE_EMAIL + '</a>.';
    status.focus();
  }

  // Envío: con clave de Web3Forms la solicitud llega directamente al correo de SAOCA;
  // sin clave, se abre la aplicación de correo del visitante con el mensaje redactado.
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (sending || !validateAll()) return;

    // Los robots marcan la casilla oculta: se simula el envío sin enviar nada
    if (form.elements.botcheck && form.elements.botcheck.checked) { sent(); return; }

    if (!WEB3FORMS_KEY) {
      window.location.href = mailtoHref();
      success('su aplicación de correo');
      return;
    }

    var f = form.elements;
    var text = buildMessage();
    var controller = 'AbortController' in window ? new AbortController() : null;
    var timer = controller ? setTimeout(function () { controller.abort(); }, 15000) : null;
    setSending(true);

    fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: subjectLine(),
        from_name: 'Sitio web SAOCA',
        'Nombre': f.nombre.value.trim(),
        'Empresa': f.empresa.value.trim(),
        email: f.correo.value.trim(), // Web3Forms lo usa como dirección de respuesta
        'Teléfono': f.telefono.value.trim(),
        'Servicio de interés': f.servicio.value,
        'Ubicación del proyecto': f.ubicacion.value.trim() || '—',
        'Requerimiento': f.mensaje.value.trim(),
        botcheck: false
      }),
      signal: controller ? controller.signal : undefined
    })
      .then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (json) {
          if (!res.ok || String(json.success) !== 'true') throw new Error(json.message || 'Envío fallido');
        });
      })
      .then(sent)
      .catch(function () { failed(text); })
      .then(function () {
        if (timer) clearTimeout(timer);
        setSending(false);
      });
  });

  $('#send-whatsapp').addEventListener('click', function () {
    if (!validateAll()) return;
    var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(buildMessage());
    window.open(url, '_blank', 'noopener');
    success('WhatsApp');
  });
})();
