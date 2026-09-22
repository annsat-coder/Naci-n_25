/* ==========================================================================
   NACIÓN 25 — DATOS DEL PORTAL
   Todo el contenido (titulares, fechas, autores, imágenes) vive en este archivo.
   Para cambiar una noticia, edita su bloque dentro de NEWS. No hace falta tocar el HTML.
   Todo el contenido es FICTICIO y solo sirve para el cortometraje.
   ========================================================================== */

/* CAMBIAR: DATOS GENERALES DEL PERIÓDICO */
const SITE = {
  nombre: "Nación 25",
  fecha: "Lunes 13 de octubre de 2025",   // CAMBIAR: FECHA visible en toda la web (ninguna noticia puede ser posterior a esta)
  anio: "Año 2025",
  numero: "Número 329",
  clima: { min: 18, max: 23, ciudad: "Lima" },
  ticker: [                                    // CAMBIAR: TEXTOS DE LA FRANJA "ÚLTIMO MOMENTO"
    "Fiscalía amplía investigación por contratos de obras en tres regiones",
    "Congreso debatirá esta semana la ley de acceso a la información pública",
    "Alerta por lluvias en la sierra sur: tres distritos en emergencia",
    "Inversión privada crece 3,2 % en el tercer trimestre",
    "Colegio de Periodistas pide verificación ante filtraciones de documentos"
  ]
};

/* CAMBIAR: MENÚ / CATEGORÍAS.
   "id" debe coincidir con el id de la sección en index.html (por ejemplo id="politica"). */
const SECCIONES = [
  { id: "politica",     nombre: "Política" },
  { id: "economia",     nombre: "Economía" },
  { id: "sociedad",     nombre: "Sociedad" },
  { id: "actualidad",   nombre: "Actualidad" },
  { id: "cultura",      nombre: "Cultura" },
  { id: "investigacion",nombre: "Investigación" },
  { id: "opinion",      nombre: "Opinión" },
  { id: "especiales",   nombre: "Especiales" }
];

/* CAMBIAR: QUÉ NOTICIA VA DÓNDE EN LA PORTADA (usa los ids de NEWS) */
const PORTADA = {
  principal: "ricalde",                                    // noticia grande de la portada
  laterales: ["fiscalia-obras", "ley-acceso", "colegio-periodistas"],
  /* Bloque rojo "Últimas noticias": la noticia destacada (imagen + titular + bajada)
     es la de Sergio (CAMBIAR: id "alcalde-informes" en NEWS si se reemplaza). */
  especial: { destacada: "alcalde-informes",
              items: ["patrullaje-distritos", "reforma-contrataciones", "bolsa-lima"] },
  secciones: {
    politica:   ["reforma-contrataciones", "comision-fiscalizacion", "presupuesto-transparencia", "rendicion-cuentas"],
    sociedad:   ["colector-vecinos", "universidades-presupuesto", "foro-etica-periodismo", "denuncias-digitales"],
    actualidad: ["lluvias-sierra", "marcha-centro", "corte-agua", "aeropuerto-demoras", "patrullaje-distritos"],
    economia:   ["inversion-privada", "proveedores-pagos", "exportaciones-agro", "bolsa-lima"],
    cultura:    ["festival-documental", "obra-redaccion", "expo-lima-noche"],
    investigacion: ["red-empresas", "grupo-andamar", "visitas-despacho"],
    opinion:    ["op-silencio", "op-transparencia", "op-idolos"]
  },
  ultimas: ["alcalde-informes", "ley-acceso", "fiscalia-obras", "colegio-periodistas", "lluvias-sierra",
            "inversion-privada", "marcha-centro", "bolsa-lima", "corte-agua", "patrullaje-distritos"],
  masLeidas: ["ricalde", "red-empresas", "grupo-andamar", "colegio-periodistas", "visitas-despacho"],
  indicadores: [                                // CAMBIAR: cifras ficticias de la franja de economía
    { n: "Dólar (compra)", v: "3,47", d: "▼ 0,02" },
    { n: "Dólar (venta)",  v: "3,49", d: "▼ 0,02" },
    { n: "Índice bursátil", v: "31 482", d: "▲ 0,4 %" },
    { n: "Cobre (lb)",     v: "4,18", d: "▲ 0,9 %" },
    { n: "Inflación anual", v: "2,1 %", d: "= 0,0" }
  ]
};

/* ==========================================================================
   NOTICIAS
   Campos:
     sec      -> id de sección (politica, economia, sociedad, actualidad, cultura, investigacion, opinion)
     titulo   -> TITULAR
     bajada   -> texto corto debajo del titular
     hora     -> hora de publicación
     autor    -> AUTOR / REDACCIÓN
     img      -> nombre del archivo dentro de /assets/images/
     pie      -> pie de foto
     cuerpo   -> lista de párrafos. Un texto que empieza con "## " es un subtítulo.
                 (opcional: si no lo pones, se genera un texto breve automático)
   ========================================================================== */
const NEWS = {

  /* ---------- NOTICIA PRINCIPAL DE LA HISTORIA ---------- */
  "ricalde": {
  sec: "actualidad",
  titulo: "Nueva reforma del transporte público genera debate entre usuarios y autoridades",
  bajada: "Las nuevas medidas planteadas para mejorar el servicio buscan reducir los tiempos de viaje y ordenar las rutas, mientras usuarios y especialistas plantean dudas sobre su implementación.",
  fecha: "13 de octubre de 2025",
  hora: "08:15",
  actualizado: "Actualizado a las 10:05",
  autor: "Redacción Nación 25",
  img: "hero-news.jpg",
  pie: "El transporte público concentra buena parte de los desplazamientos diarios en las principales ciudades del país. Foto: Archivo Nación 25.",
  lectura: "6 min de lectura",
  cuerpo: [
    "El Gobierno anunció una serie de medidas orientadas a reorganizar el sistema de transporte público y mejorar las condiciones de movilidad en las principales ciudades del país. La propuesta contempla modificaciones en las rutas, mecanismos de fiscalización y nuevas disposiciones para las empresas que brindan el servicio.",
    
    "De acuerdo con las autoridades, uno de los principales objetivos es reducir los tiempos de viaje y mejorar la conexión entre diferentes zonas de las ciudades. Para ello, se plantea revisar algunas rutas que actualmente presentan recorridos superpuestos y establecer criterios comunes para la operación del transporte.",
    
    "La propuesta también contempla un mayor seguimiento al cumplimiento de los horarios y las condiciones de prestación del servicio. Según explicó el Ministerio de Transportes, las medidas buscan que los usuarios puedan contar con un sistema más ordenado y predecible.",
    
    "Sin embargo, la implementación de los cambios ha generado distintas reacciones entre usuarios y representantes del sector. Mientras algunos consideran necesaria una reorganización del sistema, otros advierten que cualquier modificación deberá tomar en cuenta las rutas que actualmente utilizan miles de pasajeros para trasladarse diariamente.",
    
    "Representantes de empresas de transporte señalaron que los cambios podrían requerir un periodo de adaptación y solicitaron que las nuevas disposiciones sean comunicadas con anticipación. También plantearon la necesidad de establecer mecanismos de coordinación entre las autoridades nacionales y locales.",
    
    "Desde el Gobierno se indicó que las modificaciones serán aplicadas de manera progresiva y que durante las siguientes semanas se realizarán reuniones con representantes de las municipalidades y operadores del servicio.",
    
    "Uno de los puntos que genera mayor atención es el impacto que las nuevas rutas podrían tener sobre los usuarios que realizan viajes entre distritos alejados. Las autoridades aseguraron que se evaluarán estos recorridos antes de implementar cualquier modificación definitiva.",
    
    "Especialistas en movilidad urbana consultados para esta nota señalaron que la reorganización del transporte requiere considerar no solo el número de vehículos que circulan por las calles, sino también la demanda existente, los tiempos de traslado y las conexiones entre diferentes servicios.",
    
    "El Gobierno anunció que los detalles de las nuevas medidas serán publicados progresivamente y que se habilitarán canales para recibir observaciones de los usuarios antes de la implementación de los principales cambios.",
    
    "Mientras tanto, las autoridades recomendaron a los pasajeros mantenerse informados a través de los canales oficiales y evitar compartir información no confirmada sobre modificaciones de rutas o tarifas.",
    
    "La reforma continuará siendo evaluada durante las próximas semanas, mientras las entidades responsables definen el cronograma para su aplicación."
  ]
},

  /* ---------- NOTICIA DEL BLOQUE "ÚLTIMAS NOTICIAS" (aparece en el recuadro rojo) ----------
     CAMBIAR: TITULAR EXACTO — no acortar, no reformular, no agregar palabras.
     CAMBIAR: IMAGEN — usa "alcalde-informes.jpg". Ahora mismo es un PLACEHOLDER
     (fondo con aviso "IMAGEN PENDIENTE"). Reemplaza ese archivo por la foto real
     manteniendo el mismo nombre, y no se la asignes a ninguna otra noticia. */
  "alcalde-informes": {

  sec: "actualidad",

  titulo: "Alcalde desmiente ignorar informes técnicos de construcción",

  bajada: "Municipalidad de Ancón asegura que las obras cuestionadas cumplen con los procedimientos establecidos y descarta versiones que, según afirma, han generado preocupación innecesaria entre los vecinos.",

  fecha: "13 de octubre de 2025",

  hora: "11:40",

  autor: "Sergio Valdiviezo",

  img: "alcalde-informes.png",

  pie: "El alcalde de Ancón durante la conferencia de prensa de esta mañana.",

  lectura: "5 min de lectura",

  cuerpo: [

    "El alcalde de la Municipalidad de Ancón descartó las versiones que señalan que su gestión habría permitido construcciones sin considerar los informes técnicos correspondientes y aseguró que las obras desarrolladas en el distrito cuentan con las evaluaciones necesarias.",

    "Durante una conferencia de prensa, el alcalde explicó que las decisiones tomadas por la municipalidad responden a evaluaciones realizadas por las áreas técnicas competentes y rechazó las acusaciones que han circulado en redes sociales durante los últimos días.",

    "«No se ha autorizado ninguna construcción pasando por encima de los procedimientos. Todas las áreas correspondientes han participado en las evaluaciones y se ha actuado conforme a la normativa», señaló.",

    "Las declaraciones se producen luego de la difusión de algunos documentos relacionados con el proyecto Cenisur, en los que se plantean observaciones sobre las condiciones del terreno. Desde la municipalidad se precisó que dichos documentos corresponden a evaluaciones que deben ser consideradas dentro del conjunto de estudios realizados para el proyecto y que, por sí solos, no determinan la existencia de un riesgo para los vecinos.",

    "Respecto a las versiones sobre presuntas irregularidades en la adjudicación de las obras y a unos audios atribuidos a funcionarios municipales, la comuna señaló que no existe, hasta el momento, una investigación que haya establecido responsabilidades y cuestionó la difusión de información cuyo contexto no ha sido esclarecido.",

    "Algunos vecinos han expresado preocupación por la aparición de grietas en determinadas viviendas. Asimismo, tras las últimas lluvias se reportó el colapso parcial de dos techos. La municipalidad indicó que se trata de casos puntuales que vienen siendo evaluados y que no deberían generalizarse a todo el proyecto.",

    "El alcalde reiteró que las condiciones de la zona han sido evaluadas por las áreas correspondientes y que la municipalidad continuará supervisando las viviendas y el desarrollo de las obras.",

    "De acuerdo con la información proporcionada durante la conferencia, la zona se mantiene sin riesgo inmediato, mientras continúen las supervisiones anunciadas por la municipalidad.",

    "La comuna pidió finalmente a los vecinos informarse a través de los canales oficiales y evitar compartir versiones que, según señaló, puedan generar preocupación innecesaria entre las familias de la zona."

  ],

  comentarios: [

    { 
      autor: "Cecilia_Álamo", 
      texto: "Mi tío gastó todos sus ahorros en construir en una zona que supuestamente era apta y ahora teme porque no se siente seguro allí. Exigimos justicia." 
    },

    { 
      autor: "jcamacho_88", 
      texto: "¿Y el periodismo para qué sirve si al final protege a los mismos de siempre?" 
    }

  ],

  relacionadas: ["patrullaje-distritos", "reforma-contrataciones", "colector-vecinos"]

},

  /* ---------- LATERALES DE PORTADA ---------- */
  "fiscalia-obras": { sec: "actualidad", titulo: "Fiscalía amplía investigación por contratos de obras en tres regiones", bajada: "El Ministerio Público solicitó información a seis gobiernos regionales sobre licitaciones adjudicadas desde 2022.", hora: "08:20", autor: "Redacción Nación 25", img: "news-01.jpg", pie: "Fachada de la sede fiscal en el Cercado de Lima." },
  "ley-acceso": { sec: "politica", titulo: "Congreso debatirá esta semana nueva ley de acceso a la información pública", bajada: "La propuesta plantea plazos más cortos para responder pedidos y sanciones a funcionarios que no cumplan.", hora: "09:05", autor: "Redacción Política", img: "news-16.jpg", pie: "Sesión del Pleno en una jornada anterior." },
  "colegio-periodistas": { sec: "actualidad", titulo: "Colegio de Periodistas pide cautela y verificación ante filtraciones de documentos", bajada: "El gremio recordó que la publicación de material reservado exige contrastación y derecho de respuesta.", hora: "08:47", autor: "Redacción Nación 25", img: "news-03.jpg", pie: "Reunión de la junta directiva del gremio." },

  /* ---------- POLÍTICA ---------- */
  "reforma-contrataciones": { sec: "politica", titulo: "Gabinete evalúa reforma del sistema de contrataciones del Estado tras cuestionamientos", bajada: "El Ejecutivo prepara un proyecto para reducir adjudicaciones directas y publicar en línea cada contrato.", hora: "07:30", autor: "Redacción Política", img: "news-17.jpg", pie: "Ministros tras una reunión de coordinación." },
  "comision-fiscalizacion": { sec: "politica", titulo: "Comisión de Fiscalización cita a exfuncionarios por obras paralizadas", bajada: "Los citados deberán explicar los retrasos en proyectos por más de 300 millones de soles.", hora: "10:12", autor: "Redacción Política", img: "news-04.jpg" },
  "presupuesto-transparencia": { sec: "politica", titulo: "Bancadas se enfrentan por presupuesto de transparencia del próximo año", bajada: "Oficialismo y oposición discrepan sobre los recursos para los órganos de control.", hora: "11:03", autor: "Redacción Política", img: "news-10.jpg" },
  "rendicion-cuentas": { sec: "politica", titulo: "Gobiernos regionales reportan retrasos en la rendición de cuentas", bajada: "Solo cuatro de veinticinco cumplieron el plazo legal, según un informe preliminar.", hora: "06:55", autor: "Redacción Política", img: "news-15.jpg" },

  /* ---------- SOCIEDAD ---------- */
  "colector-vecinos": { sec: "sociedad", titulo: "Vecinos denuncian abandono de obra de colector en San Martín de Porres", bajada: "La zanja lleva catorce meses abierta y ya provocó dos accidentes, según los residentes.", hora: "07:58", autor: "Redacción Sociedad", img: "news-22.jpg", pie: "La obra permanece paralizada desde septiembre del año pasado." },
  "universidades-presupuesto": { sec: "sociedad", titulo: "Universidades públicas piden mayor presupuesto para investigación", bajada: "Rectores advierten que sin nuevos fondos se perderán proyectos científicos.", hora: "09:40", autor: "Redacción Sociedad", img: "news-27.jpg" },
  "foro-etica-periodismo": { sec: "sociedad", titulo: "Estudiantes de periodismo organizan foro sobre ética y fuentes anónimas", bajada: "El encuentro reunirá a reporteros, editores y abogados especializados en libertad de prensa.", hora: "10:25", autor: "Redacción Sociedad", img: "news-07.jpg" },
  "denuncias-digitales": { sec: "sociedad", titulo: "Aumentan denuncias ciudadanas por canales digitales", bajada: "Las plataformas en línea concentran ya la mitad de los reclamos contra entidades públicas.", hora: "08:05", autor: "Redacción Sociedad", img: "news-02.jpg" },

  /* ---------- ACTUALIDAD ---------- */
  "lluvias-sierra": { sec: "actualidad", titulo: "Lluvias en la sierra sur dejan tres distritos en alerta", bajada: "Defensa Civil recomienda evitar el tránsito por quebradas y ríos durante las próximas 48 horas.", hora: "07:10", autor: "Redacción Nación 25", img: "news-21.jpg" },
  "marcha-centro": { sec: "actualidad", titulo: "Restringen vías del Centro de Lima por marcha de gremios", bajada: "El desvío afectará las avenidas Abancay y Nicolás de Piérola durante la tarde.", hora: "09:52", autor: "Redacción Nación 25", img: "news-25.jpg" },
  "corte-agua": { sec: "actualidad", titulo: "Corte de agua afectará a siete distritos de Lima este jueves", bajada: "El servicio se interrumpirá desde las 10 de la noche por trabajos de mantenimiento.", hora: "10:31", autor: "Redacción Nación 25", img: "news-08.jpg" },
  "aeropuerto-demoras": { sec: "actualidad", titulo: "Aeropuerto registra demoras por mantenimiento de pista", bajada: "Las aerolíneas recomiendan llegar con tres horas de anticipación.", hora: "06:20", autor: "Redacción Nación 25", img: "news-26.jpg" },
  "patrullaje-distritos": { sec: "actualidad", titulo: "Municipios anuncian refuerzo de patrullaje tras aumento de denuncias vecinales", bajada: "Alcaldes de tres distritos coordinan con la Policía un plan conjunto de seguridad para el resto del año.", fecha: "12 de octubre de 2025", hora: "19:05", autor: "Redacción Nación 25", img: "news-11.jpg", pie: "Unidades municipales de seguridad durante un operativo nocturno." },

  /* ---------- ECONOMÍA ---------- */
  "inversion-privada": { sec: "economia", titulo: "Inversión privada crece 3,2 % en el tercer trimestre, según analistas", bajada: "El impulso vino de minería y construcción, aunque persisten dudas sobre el próximo trimestre.", hora: "08:33", autor: "Redacción Economía", img: "news-18.jpg" },
  "proveedores-pagos": { sec: "economia", titulo: "Proveedores denuncian pagos atrasados por obras públicas", bajada: "Pequeñas empresas de construcción acumulan deudas de hasta ocho meses con entidades del Estado.", hora: "09:18", autor: "Redacción Economía", img: "news-19.jpg" },
  "exportaciones-agro": { sec: "economia", titulo: "Exportaciones agrícolas alcanzan récord en la campaña 2025", bajada: "Arándanos, uvas y paltas lideran los envíos hacia Asia y Europa.", hora: "07:45", autor: "Redacción Economía", img: "news-24.jpg" },
  "bolsa-lima": { sec: "economia", titulo: "Bolsa de Lima cierra con ligera alza impulsada por mineras", bajada: "El índice general subió 0,4 % con un volumen moderado de negociación.", hora: "11:20", autor: "Redacción Economía", img: "news-14.jpg" },

  /* ---------- CULTURA ---------- */
  "festival-documental": { sec: "cultura", titulo: "Festival de cine documental abre convocatoria con foco en periodismo", bajada: "Se recibirán obras hasta el 15 de diciembre en las categorías nacional y universitaria.", hora: "10:05", autor: "Redacción Cultura", img: "news-06.jpg" },
  "obra-redaccion": { sec: "cultura", titulo: "Obra teatral reconstruye la última redacción de un diario clausurado", bajada: "La puesta se estrena este viernes con un elenco de once actores.", hora: "09:30", autor: "Redacción Cultura", img: "news-28.jpg" },
  "expo-lima-noche": { sec: "cultura", titulo: "Nueva exposición fotográfica retrata la Lima nocturna de los noventa", bajada: "Más de cien imágenes en blanco y negro recorren calles, imprentas y plazas.", hora: "08:50", autor: "Redacción Cultura", img: "news-05.jpg" },

  /* ---------- INVESTIGACIÓN ---------- */
  "red-empresas": { sec: "investigacion", titulo: "Red de empresas fantasma: cómo se repartieron 48 millones en obras sin ejecutar", bajada: "Diez sociedades con domicilios compartidos ganaron contratos por casi medio centenar de millones de soles.", hora: "05:30", autor: "Unidad de Investigación", img: "documentos.jpg", pie: "Fichas de registro societario de las empresas analizadas." },
  "grupo-andamar": { sec: "investigacion", titulo: "Los intermediarios del Grupo Andamar: quiénes son y qué contratos ganaron", bajada: "Un mapa de socios, testaferros y consultoras revela cómo se estructuró la red.", hora: "05:45", autor: "Unidad de Investigación", img: "news-13.jpg", pie: "Reunión de directivos registrada en un evento empresarial." },
  "visitas-despacho": { sec: "investigacion", titulo: "Registro de visitas: 214 reuniones en seis meses en un despacho oficial", bajada: "Los ingresos de un mismo directivo coinciden con la adjudicación de cuatro obras.", hora: "05:50", autor: "Unidad de Investigación", img: "news-12.jpg" },

  /* ---------- OPINIÓN ---------- */
  "op-silencio": { sec: "opinion", titulo: "El precio del silencio", bajada: "Callar también es una decisión editorial, y casi nunca es gratuita.", hora: "06:00", autor: "Marcela Ugarte", img: "eduardo-ricalde.jpg", cargo: "Columnista" },
  "op-transparencia": { sec: "opinion", titulo: "Transparencia sin fotocopias", bajada: "La información pública sigue llegando en papel a un país que ya vive en pantallas.", hora: "06:00", autor: "Renato Quiroz", img: "eduardo-ricalde.jpg", cargo: "Columnista" },
  "op-idolos": { sec: "opinion", titulo: "La prensa y sus ídolos", bajada: "Un periodista no debería ser más grande que la verdad que cuenta.", hora: "06:00", autor: "Inés Lazo", img: "eduardo-ricalde.jpg", cargo: "Columnista" }
};
