/* ==========================================================================
   NACIÓN 25 — script.js
   Construye la cabecera, la portada, las noticias y el pie de página
   a partir de los datos de data.js. Si quieres cambiar TEXTOS, edita data.js.
   Si quieres cambiar la ESTRUCTURA (qué módulos aparecen), edita este archivo.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- Utilidades ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const N = (id) => (NEWS[id] ? Object.assign({ id }, NEWS[id]) : null);
  const secName = (id) => (SECCIONES.find((s) => s.id === id) || { nombre: id }).nombre;
  const link = (id) => "noticia.html?id=" + encodeURIComponent(id);
  const imgSrc = (file) => "assets/images/" + file;
  const isBlock = (t) => /^(## |PULLQUOTE::|IMAGE::)/.test(t);

  /* ==========================================================================
     CABECERA (barra superior, franja, LOGO, menú, ticker)
     ========================================================================== */
  function headerHTML(activeId) {
    const navItems =
      `<a href="index.html" class="${activeId === "inicio" ? "is-active" : ""}">Inicio</a>` +
      SECCIONES.map((s) =>
        `<a href="index.html#${s.id}" class="${activeId === s.id ? "is-active" : ""}">${s.nombre}</a>`
      ).join("");

    const tk = SITE.ticker.map((t) => `<span class="ticker-item">${t}</span>`).join("");

    return `
    <a class="skip" href="#${document.body.dataset.page === "home" ? "home" : "article"}">Saltar al contenido</a>

    <!-- BARRA SUPERIOR -->
    <div class="topbar">
      <div class="wrap topbar-in">
        <span>${SITE.fecha}</span>
        <span class="hide-sm">Edición digital</span>
        <span class="hide-md">Lima, Perú</span>
        <span class="topbar-social">
          <a href="#">Facebook</a><a href="#">X</a><a href="#">Instagram</a><a href="#">YouTube</a>
        </span>
      </div>
    </div>

    <!-- FRANJA DE MÓDULOS (viene de la maqueta impresa) -->
    <div class="strip">
      <div class="wrap strip-in">
        <div class="strip-cell strip-cell--red">
          <img class="strip-box" src="assets/images/suplemento-semanal.jpg" alt="Suplemento semanal">
          <span><b class="tag">Suplemento semanal</b><br><span class="strip-title">Cultura</span></span>
        </div>
        <a class="strip-cell" href="index.html#politica"><b>Política</b><small>Agenda legislativa</small></a>
        <a class="strip-cell" href="index.html#cultura"><b>Música</b><small>Festivales y estrenos</small></a>
        <a class="strip-cell" href="index.html#cultura"><b>Espectáculos</b><small>Teatro, cine y más</small></a>
      </div>
    </div>

    <!-- CABECERA CON LOGO GRANDE -->
    <header class="masthead">
      <div class="wrap masthead-in">
   
        <!-- CAMBIAR: LOGO -->
        <a class="logo" href="index.html" aria-label="Nación 25, ir a la portada">
          <span class="logo-a">Nación</span><span class="logo-b">25</span>
        </a>
        
      </div>
    </header>

    <!-- MENÚ (se queda fijo al hacer scroll) -->
    <nav class="nav" aria-label="Secciones">
      <div class="wrap nav-in">
        <a class="nav-logo" href="index.html">Nación <i>25</i></a>
        <div class="nav-links" id="navLinks">${navItems}</div>
        <button class="burger" id="burger" aria-label="Abrir menú" aria-expanded="false" aria-controls="navLinks">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <!-- ÚLTIMO MOMENTO (ticker) -->
    <div class="ticker">
      <div class="wrap ticker-in">
        <span class="ticker-label">Último momento</span>
        <div class="ticker-track"><div class="ticker-move">${tk}${tk}</div></div>
      </div>
    </div>`;
  }

  /* ==========================================================================
     PIE DE PÁGINA
     ========================================================================== */
  function footerHTML() {
    const secs = SECCIONES.map((s) => `<li><a href="index.html#${s.id}">${s.nombre}</a></li>`).join("");
    return `
    <footer class="footer">
      <div class="wrap">
        <div class="footer-logo"><span class="logo-a">Nación</span><span class="logo-b">25</span></div>
        <div class="footer-grid">
          <div><h4>Secciones</h4><ul>${secs}</ul></div>
          <div><h4>El diario</h4><ul>
            <li><a href="#">Quiénes somos</a></li><li><a href="#">Línea editorial</a></li>
            <li><a href="#">Equipo periodístico</a></li><li><a href="#">Trabaja con nosotros</a></li>
            <li><a href="#">Contacto</a></li></ul></div>
          <div><h4>Servicios</h4><ul>
            <li><a href="#">Suscripciones</a></li><li><a href="#">Boletines</a></li>
            <li><a href="#">Edición impresa</a></li><li><a href="#">Publicidad</a></li>
            <li><a href="#">Buzón de denuncias</a></li></ul></div>
          <div><h4>Legal</h4><ul>
            <li><a href="#">Términos y condiciones</a></li><li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Política de cookies</a></li><li><a href="#">Libro de reclamaciones</a></li></ul></div>
        </div>
        <div class="footer-base">
          <span>© 2025 Nación 25. Todos los derechos reservados.</span>
          <span>Edición digital · ${SITE.anio} · ${SITE.numero}</span>
        </div>
      </div>
    </footer>`;
  }

  /* ==========================================================================
     PIEZAS REUTILIZABLES
     ========================================================================== */
  function modHead(secId, titleOverride) {
    return `<div class="mod-head">
      <span class="mod-square"></span>
      <h2>${titleOverride || secName(secId)}</h2>
      <span class="mod-line"></span>
      <a class="mod-more" href="index.html#${secId}">Ver todo</a>
    </div>`;
  }

  function cardHTML(n, cls = "") {
    return `<a class="card ${cls}" href="${link(n.id)}">
      <span class="card-img"><img src="${imgSrc(n.img)}" alt="" loading="lazy"></span>
      <span class="tag">${secName(n.sec)}</span>
      <h3>${n.titulo}</h3>
      <p>${n.bajada}</p>
      <span class="meta">${n.hora} h · ${n.autor}</span>
    </a>`;
  }

  function listHTML(items) {
    return `<ul class="list">${items.map((n) =>
      `<li><a href="${link(n.id)}"><span class="meta">${n.hora} h</span><span class="t">${n.titulo}</span></a></li>`
    ).join("")}</ul>`;
  }

  /* ==========================================================================
     PORTADA (index.html)
     ========================================================================== */
  function frontHTML() {
    const p = N(PORTADA.principal);
    const laterales = PORTADA.laterales.map(N);
    const ext = p.cuerpo.filter((t) => !isBlock(t)).slice(0, 2);

    return `
    <section class="front wrap" id="portada">
      <!-- NOTICIA PRINCIPAL (la que se abre en la película) -->
      <article class="lead">
        <div class="lead-top">
          <span class="tag tag--solid">${secName(p.sec)}</span>
          <span class="meta">Exclusivo · ${p.hora} h</span>
        </div>
        <!-- CAMBIAR: TITULAR PRINCIPAL (en data.js → "ricalde") -->
        <h1><a href="${link(p.id)}">${p.titulo}</a></h1>
        <p class="lead-deck">${p.bajada}</p>
        <a class="lead-img" href="${link(p.id)}">
          <img src="${imgSrc(p.img)}" alt="">
          <span class="lead-cap">${p.pie}</span>
        </a>
        <div class="lead-cols">
          ${ext.map((t) => `<p>${t}</p>`).join("")}
        </div>
        <a class="btn" href="${link(p.id)}">Leer noticia completa</a>
      </article>

      <!-- COLUMNA LATERAL -->
      <aside class="side" aria-label="Noticias destacadas">
        ${laterales.map((n) => `
          <a class="side-item" href="${link(n.id)}">
            <span class="card-img"><img src="${imgSrc(n.img)}" alt="" loading="lazy"></span>
            <span class="tag">${secName(n.sec)}</span>
            <h3>${n.titulo}</h3>
            <span class="meta">${n.hora} h · ${n.autor}</span>
          </a>`).join('<span class="rule-red"></span>')}
      </aside>
    </section>`;
  }

  /* Franja roja (módulo inferior de la maqueta): "Últimas noticias".
     La noticia destacada (imagen + titular + bajada) es PORTADA.especial.destacada. */
  function especialHTML() {
    const e = PORTADA.especial;
    const d = N(e.destacada);
    const items = e.items.map(N);
    return `
    <section class="especial" id="especiales">
      <div class="wrap especial-in">
        <a class="especial-img" href="${link(d.id)}"><img src="${imgSrc(d.img)}" alt=""></a>
        <a class="especial-head" href="${link(d.id)}">
          <span class="tag tag--white">Últimas noticias</span>
          <!-- CAMBIAR: TITULAR EXACTO (editar en data.js → NEWS["alcalde-informes"]) -->
          <h2>${d.titulo}</h2>
          <p>${d.bajada}</p>
        </a>
        <ul class="especial-list">
          ${items.map((n) => `<li><a href="${link(n.id)}"><span class="meta">${n.hora} h</span>${n.titulo}</a></li>`).join("")}
        </ul>
      </div>
    </section>`;
  }

  function trioHTML() {
    const col = (secId) => {
      const [lead, ...rest] = PORTADA.secciones[secId].map(N);
      return `<section class="col" id="${secId}">${modHead(secId)}${cardHTML(lead)}${listHTML(rest)}</section>`;
    };
    return `<div class="wrap trio">${col("politica")}${col("sociedad")}${col("actualidad")}</div>`;
  }

  function investigacionHTML() {
    const [a, b, c] = PORTADA.secciones.investigacion.map(N);
    const card = (n, cls) => `
      <a class="inv-card ${cls}" href="${link(n.id)}">
        <span class="card-img"><img src="${imgSrc(n.img)}" alt="" loading="lazy"></span>
        <span class="tag tag--white">${secName(n.sec)}</span>
        <h3>${n.titulo}</h3>
        <p>${n.bajada}</p>
        <span class="meta">${n.hora} h · ${n.autor}</span>
      </a>`;
    return `
    <section class="inv" id="investigacion">
      <div class="wrap">
        <div class="mod-head mod-head--dark">
          <span class="mod-square"></span><h2>Investigación</h2><span class="mod-line"></span>
          <span class="mod-more">Unidad de Investigación</span>
        </div>
        <div class="inv-grid">${card(a, "inv-card--big")}${card(b, "")}${card(c, "")}</div>
      </div>
    </section>`;
  }

  function economiaHTML() {
    const ind = PORTADA.indicadores.map((i) =>
      `<div class="ind"><span class="meta">${i.n}</span><b>${i.v}</b><small>${i.d}</small></div>`).join("");
    const cards = PORTADA.secciones.economia.map(N).map((n) => cardHTML(n)).join("");
    return `
    <section class="wrap block" id="economia">
      ${modHead("economia")}
      <div class="indicadores">${ind}</div>
      <div class="grid4">${cards}</div>
    </section>`;
  }

  function culturaHTML() {
    const cards = PORTADA.secciones.cultura.map(N).map((n) => cardHTML(n)).join("");
    return `
    <section class="wrap block" id="cultura">
      ${modHead("cultura")}
      <div class="grid3">${cards}</div>
    </section>`;
  }

  function tresColumnasHTML() {
    /* OPINIÓN */
    const op = PORTADA.secciones.opinion.map(N).map((n) => {
      const ini = n.autor.split(" ").map((w) => w[0]).join("");
      return `<li><a class="op" href="${link(n.id)}">
        <span class="op-box">${ini}</span>
        <span><b class="meta">${n.autor}</b><span class="t">${n.titulo}</span></span>
      </a></li>`;
    }).join("");

    /* ÚLTIMAS NOTICIAS (ordenadas por hora, la más reciente arriba) */
    const ult = PORTADA.ultimas.map(N).sort((a, b) => b.hora.localeCompare(a.hora)).map((n) =>
      `<li><a href="${link(n.id)}"><time>${n.hora}</time><span class="t">${n.titulo}</span></a></li>`).join("");

    /* MÁS LEÍDAS */
    const top = PORTADA.masLeidas.map(N).map((n, i) =>
      `<li><a href="${link(n.id)}"><span class="rank">${i + 1}</span><span class="t">${n.titulo}</span></a></li>`).join("");

    return `
    <div class="wrap trio trio--bottom">
      <section class="col" id="opinion">${modHead("opinion")}<ul class="ops">${op}</ul></section>
      <section class="col" id="ultimas">
        <div class="mod-head"><span class="mod-square"></span><h2>Últimas noticias</h2><span class="mod-line"></span></div>
        <ul class="timeline">${ult}</ul>
      </section>
      <section class="col" id="masleidas">
        <div class="mod-head"><span class="mod-square"></span><h2>Más leídas</h2><span class="mod-line"></span></div>
        <ol class="ranking">${top}</ol>
      </section>
    </div>`;
  }

  function renderHome() {
    $("#home").innerHTML =
      frontHTML() + especialHTML() + trioHTML() + investigacionHTML() +
      economiaHTML() + culturaHTML() + tresColumnasHTML();
  }

  /* ==========================================================================
     PÁGINA DE NOTICIA (noticia.html?id=...)
     ========================================================================== */
  function bodyHTML(n) {
    /* Si la noticia no tiene "cuerpo" en data.js, se genera uno breve. */
    const paras = n.cuerpo || [
      n.bajada,
      "Nación 25 solicitó información a las entidades y personas mencionadas. Hasta el cierre de esta edición no se había recibido una respuesta oficial. Este diario actualizará la nota conforme se confirmen nuevos datos.",
      "## Contexto",
      "Especialistas consultados coincidieron en que el asunto requiere seguimiento y mayor transparencia en la información pública. Se espera que en los próximos días se conozcan más detalles."
    ];

    let out = "";
    let count = 0;
    paras.forEach((t) => {
      if (t.startsWith("## ")) {
        out += `<h2>${t.slice(3)}</h2>`;
      } else if (t.startsWith("PULLQUOTE::")) {
        out += `<blockquote class="pull">${t.slice(11)}</blockquote>`;
      } else if (t.startsWith("IMAGE::")) {
        const [, f, cap] = t.split("::");
        out += `<figure class="inline-fig"><img src="${imgSrc(f)}" alt=""><figcaption>${cap}</figcaption></figure>`;
      } else {
        out += `<p${count === 0 ? ' class="first"' : ""}>${t}</p>`;
        count++;
        /* Recuadro "Datos clave" después del tercer párrafo */
        if (count === 3 && n.datosClave) {
          out += `<aside class="keybox"><h3>Datos clave</h3><ul>${n.datosClave.map((d) => `<li>${d}</li>`).join("")}</ul></aside>`;
        }
      }
    });

    if (n.cronologia) {
      out += `<aside class="chrono"><h3>Cronología</h3><ol>${n.cronologia.map(
        (c) => `<li><b class="meta">${c[0]}</b><span>${c[1]}</span></li>`).join("")}</ol></aside>`;
    }
    return out;
  }

  /* Comentarios de lectores (solo aparecen si la noticia trae n.comentarios en data.js) */
  function commentsHTML(n) {
    if (!n.comentarios || !n.comentarios.length) return "";
    const items = n.comentarios.map((c) => `
      <li class="comment">
        <span class="comment-avatar">${c.autor.slice(0, 1).toUpperCase()}</span>
        <div class="comment-body">
          <b class="comment-user">${c.autor}</b>
          <p>${c.texto}</p>
        </div>
      </li>`).join("");
    return `
    <section class="comments">
      <div class="mod-head"><span class="mod-square"></span><h2>Comentarios</h2><span class="mod-line"></span></div>
      <ul class="comment-list">${items}</ul>
    </section>`;
  }

  function renderArticle() {
    const id = new URLSearchParams(location.search).get("id");
    const n = N(id) || N(PORTADA.principal);          // si el id no existe, abre la principal
    document.title = n.titulo + " | " + SITE.nombre;

    const fecha = n.fecha || SITE.fecha.replace(/^\S+\s/, "");
    const mas = PORTADA.masLeidas.map(N).map((m, i) =>
      `<li><a href="${link(m.id)}"><span class="rank">${i + 1}</span><span class="t">${m.titulo}</span></a></li>`).join("");
    const ult = PORTADA.ultimas.map(N).slice(0, 5).map((m) =>
      `<li><a href="${link(m.id)}"><time>${m.hora}</time><span class="t">${m.titulo}</span></a></li>`).join("");

    let rel = n.relacionadas;
    if (!rel) {
      rel = Object.keys(NEWS).filter((k) => k !== n.id && NEWS[k].sec === n.sec).slice(0, 3);
      if (rel.length < 3) rel = rel.concat(PORTADA.laterales.filter((k) => k !== n.id && !rel.includes(k))).slice(0, 3);
    }

    $("#article").innerHTML = `
    <div class="wrap">
      <!-- MIGAS DE PAN -->
      <div class="crumbs meta"><a href="index.html">Inicio</a><span>/</span><a href="index.html#${n.sec}">${secName(n.sec)}</a></div>

      <header class="art-head">
        <span class="tag tag--solid">${secName(n.sec)}</span>
        <!-- CAMBIAR: TITULAR -->
        <h1>${n.titulo}</h1>
        <!-- CAMBIAR: BAJADA -->
        <p class="art-deck">${n.bajada}</p>
      </header>

      <figure class="art-hero">
        <!-- CAMBIAR: IMAGEN PRINCIPAL -->
        <img src="${imgSrc(n.img)}" alt="">
        ${n.pie ? `<figcaption>${n.pie}</figcaption>` : ""}
      </figure>

      <div class="art-layout">
        <!-- RIEL IZQUIERDO: autor, fecha, compartir -->
        <aside class="art-rail">
          <div class="rail-block"><small class="meta">${n.cargo ? "Columna de" : "Por"}</small><b><!-- CAMBIAR: AUTOR -->${n.autor}</b>${n.cargo ? `<span class="meta">${n.cargo}</span>` : ""}</div>
          <div class="rail-block"><small class="meta">Publicado</small><b><!-- CAMBIAR: FECHA -->${fecha}</b><span class="meta"><!-- CAMBIAR: HORA -->${n.hora} h</span></div>
          ${n.actualizado ? `<div class="rail-block"><small class="meta">Actualización</small><span class="meta">${n.actualizado}</span></div>` : ""}
          ${n.lectura ? `<div class="rail-block"><small class="meta">Lectura</small><span class="meta">${n.lectura}</span></div>` : ""}
          <div class="rail-block share"><small class="meta">Compartir</small>
            <a href="#">Facebook</a><a href="#">X</a><a href="#">WhatsApp</a><a href="#">Copiar enlace</a>
          </div>
        </aside>

        <!-- CUERPO DE LA NOTICIA -->
        <article class="art-body">${bodyHTML(n)}
          <div class="tags"><span class="meta">Temas:</span><a href="#">Investigación</a><a href="#">Transparencia</a><a href="#">Periodismo</a></div>
          ${commentsHTML(n)}
        </article>

        <!-- COLUMNA DERECHA -->
        <aside class="art-side">
          <section><div class="mod-head"><span class="mod-square"></span><h2>Más leídas</h2><span class="mod-line"></span></div><ol class="ranking">${mas}</ol></section>
          <section><div class="mod-head"><span class="mod-square"></span><h2>Últimas</h2><span class="mod-line"></span></div><ul class="timeline">${ult}</ul></section>
        </aside>
      </div>

      <!-- NOTICIAS RELACIONADAS -->
      <section class="related">
        <div class="mod-head"><span class="mod-square"></span><h2>Noticias relacionadas</h2><span class="mod-line"></span><a class="mod-more" href="index.html">Volver a la portada</a></div>
        <div class="grid3">${rel.map(N).filter(Boolean).map((m) => cardHTML(m)).join("")}</div>
      </section>
    </div>`;
  }

  /* ==========================================================================
     INICIO: pinta todo y activa el comportamiento
     ========================================================================== */
  const page = document.body.dataset.page;                 // "home" o "article"
  const activeId = page === "home" ? "inicio" : (N(new URLSearchParams(location.search).get("id")) || N(PORTADA.principal)).sec;

  $("#site-header").innerHTML = headerHTML(activeId);
  $("#site-footer").innerHTML = footerHTML();
  if (page === "home") renderHome(); else renderArticle();

  /* Menú móvil */
  const burger = $("#burger"), links = $("#navLinks");
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
    burger.classList.toggle("open", open);
  });
  links.addEventListener("click", (e) => { if (e.target.tagName === "A") links.classList.remove("open"); });

  /* Enlaces "#" decorativos: no hacen nada (evitan saltar al inicio) */
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href="#"]');
    if (a) e.preventDefault();
  });

  /* Logo compacto en el menú al bajar + barra de lectura */
  const bar = document.createElement("div");
  bar.className = "progress";
  document.body.appendChild(bar);
  function onScroll() {
    document.body.classList.toggle("scrolled", window.scrollY > 260);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
