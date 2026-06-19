// ==========================================================================
// REFLEJOS — PORTAFOLIO FOTOGRÁFICO MULTIMODAL
// Universidad del Tolima · Multimodalidad y Medios de Comunicación
// ==========================================================================

// --------------------------------------------------------------------------
// BASE DE DATOS DE OBRAS — nombres de archivo exactos de la carpeta
// --------------------------------------------------------------------------
const OBRAS = {
    paisajistica: [
        {
            id: "paisajistica-hoja-detalle",
            title: "Microcosmos Foliar",
            plano: "Plano Detalle (Macro)",
            composicion: "Enfoque Selectivo y Ritmo Lineal",
            intencion: "Exploración del Entorno. La cámara se acerca hasta revelar la geometría microscópica de una hoja del jardín escolar. La edición satura los verdes y realza el relieve de las nervaduras, convirtiendo un elemento vegetal cotidiano en una obra de abstracción natural.",
            imgEdited: "paisajistica_hoja_detalle.jpeg",
            imgOriginal: "Sin editar/hoja_original.jpeg",
            featured: false
        },
        {
            id: "paisajistica-camino-general",
            title: "Senderos del Saber",
            plano: "Plano General",
            composicion: "Líneas de Fuga Convergentes y Enmarcado Natural",
            intencion: "Apropiación del Espacio. La simetría del corredor arborizado del campus conduce la mirada hacia el infinito. La edición equilibra el contraste entre la luz solar filtrada y las sombras del follaje, con una estudiante caminando al fondo como escala humana.",
            imgEdited: "paisajistica_camino_general.jpeg",
            imgOriginal: "Sin editar/camino_original.jpeg",
            featured: true
        },
        {
            id: "paisajistica-camino-persona-fondo",
            title: "La Senda Solitaria",
            plano: "Plano General",
            composicion: "Espacio Negativo y Profundidad de Campo",
            intencion: "Soledad Estudiantil. Una figura diminuta en el fondo amplifica la escala monumental del corredor. La postproducción oscurece los márgenes para concentrar la atención en el recorrido central y la soledad de quien lo transita.",
            imgEdited: "paisajistica_camino_persona muy en fondo.jpeg",
            imgOriginal: "Sin editar/camino con persona muy en el fondo.jpeg",
            featured: false
        },
        {
            id: "paisajistica-camino-oscuro",
            title: "Sombras del Sendero",
            plano: "Plano General",
            composicion: "Claroscuro (Luz de Contraluz y Sombra Proyectada)",
            intencion: "Introspección del Espacio. El mismo corredor reinterpretado con un tratamiento dramático de sombras profundas. La postproducción intensifica el claroscuro del follaje y resalta la silueta al fondo, evocando misterio y la calma que antecede la jornada académica.",
            imgEdited: "paisajistica_camino_general_oscuro.jpeg",
            imgOriginal: "Sin editar/camino_original.jpeg",
            featured: false
        },
        {
            id: "paisajistica-follaje-contraluz",
            title: "Siluetas de Ladrillo",
            plano: "Plano General (Siluetas)",
            composicion: "Contraluz y Enmarcado Natural",
            intencion: "Geometría Natural. Juega con el contraste entre la textura del muro de ladrillo y la delicadeza de las hojas en primer plano. La edición acentúa las sombras y destaca el sutil resplandor de la luz solar filtrada para generar una atmósfera enigmática.",
            imgEdited: "paisajistica_follaje_contraluz.jpeg",
            imgOriginal: "Sin editar/paisajistica_follaje luz natural.jpeg",
            featured: false
        },
        {
            id: "paisajistica-gato-entero",
            title: "Guardián de Hojas",
            plano: "Plano Entero",
            composicion: "Regla de Tercios y Profundidad de Campo",
            intencion: "Fauna del Campus. El felino, habitante habitual del colegio, camina de forma majestuosa sobre un colchón de hojas secas. La edición añade un bokeh suave al fondo, integrándolo como elemento vivo e intrínseco del paisaje escolar.",
            imgEdited: "paisajistica_gato_entero.jpeg",
            imgOriginal: "Sin editar/Gato revolcándose en la tierra foto desde altura de una persona.jpeg",
            featured: false
        },
        {
            id: "paisajistica-gato-contrapicado",
            title: "Paso Felino",
            plano: "Plano Contrapicado (Ángulo Bajo)",
            composicion: "Ángulo Contrapicado y Tensión Diagonal",
            intencion: "Dinamismo Animal. El gato capturado desde una perspectiva baja al dar un paso, con la pata extendida en primer plano. La edición resalta los contrastes del pelaje blanco y negro otorgando una visión heroica y dinámica de la fauna escolar.",
            imgEdited: "paisajistica_gato_contrapicado.jpeg",
            imgOriginal: "Sin editar/Gato acostado en la tierra cerca.jpeg",
            featured: false
        },
        {
            id: "paisajistica-gato-ojos",
            title: "Mirada Esmeralda",
            plano: "Primerísimo Primer Plano (PPP)",
            composicion: "Enfoque Selectivo Crítico (Bokeh Extremo)",
            intencion: "Conexión Emocional. Los ojos verdes del gato del campus, retratados con extrema proximidad. La edición difumina los elementos en primer plano para guiar de inmediato la atención del espectador al centro de su mirada intensa.",
            imgEdited: "paisajistica_gato_detalle_ojos.jpeg",
            imgOriginal: "Sin editar/Gato mirando a la cámara tomada a la altura del suelo.jpeg",
            featured: false
        },
        {
            id: "paisajistica-gato-curioso",
            title: "El Curioso",
            plano: "Primer Plano",
            composicion: "Regla de Tercios y Mirada al Espectador",
            intencion: "Complicidad con la Fauna. El gato mira directamente a la cámara desde el suelo, generando un diálogo visual inmediato. La imagen captura la curiosidad natural del animal como habitante legítimo del espacio educativo.",
            imgEdited: "paisajistica_gato muy cerca, como curioso.jpeg",
            imgOriginal: null,
            featured: false
        },
        {
            id: "paisajistica-gato-acostado",
            title: "Siesta entre Hojas",
            plano: "Plano Entero",
            composicion: "Encuadre Natural y Profundidad de Campo",
            intencion: "Quietud del Campus. El felino acostado entre la hojarasca seca, en una postura relajada. La edición refuerza los tonos cálidos de la tierra y las hojas, creando un contraste con el pelaje oscuro del animal para evocar calma y pertenencia al entorno.",
            imgEdited: "Gato acostado en la tierra cerca editado.jpeg",
            imgOriginal: "Sin editar/Gato acostado en la tierra cerca.jpeg",
            featured: false
        }
    ],
    moda: [
        {
            id: "moda-anillo-detalle",
            title: "Esmeralda Editorial",
            plano: "Plano Detalle (Macro)",
            composicion: "Enfoque Crítico, Contraste de Textura y Espacio Negativo",
            intencion: "Fotografía de Moda y Accesorios. La gema verde brillante domina el encuadre con fondo neutro difuminado de estudio editorial. La edición destaca la pureza de la piedra y los detalles de la montura metálica, transmitiendo sofisticación y elegancia contemporánea.",
            imgEdited: "moda_anillo_detalle.jpeg",
            imgOriginal: "Sin editar/foto anillo origina.jpeg",
            featured: true
        },
        {
            id: "moda-estudiante-acostada",
            title: "Pausa y Actitud",
            plano: "Plano Americano (Sujeto Recostado)",
            composicion: "Tensión Horizontal y Equilibrio de Tercios",
            intencion: "Retrato Editorial Urbano. Una estudiante recostada sobre un muro de ladrillo con audífonos y fondo denso de vegetación tropical. La postproducción estiliza el contraste entre la ropa oscura y el follaje exuberante, logrando una estética editorial juvenil con carácter.",
            imgEdited: "moda_estudiante_acostada_en muro pequeño plantas de fondomedio.jpeg",
            imgOriginal: "Sin editar/estudiante acostada en pequeño muro con fondo de plantas.jpeg",
            featured: true
        }
    ],
    prensa: [
        {
            id: "prensa-suela-nadir",
            title: "El Primer Paso",
            plano: "Plano Nadir (Contrapicado Extremo desde el Suelo)",
            composicion: "Perspectiva Invertida, Tensión Vertical y Contraluz",
            intencion: "Crónica Visual Conceptual. La suela del calzado irrumpe en el encuadre desde abajo, con el cielo y las ramas como fondo. La perspectiva desde el suelo simboliza la huella y el avance de los estudiantes, con una iluminación dorada que convierte el gesto cotidiano en una declaración visual.",
            imgEdited: "prensa_suela_zapato_foto desde abajo.jpeg",
            imgOriginal: "Sin editar/foto desde abajo, se ve el zapato y alfondo los árboles.jpeg",
            featured: true
        },
        {
            id: "prensa-simulacro-policia",
            title: "Escena del Suceso",
            plano: "Plano Picado (Vista Aérea)",
            composicion: "Tensión Diagonal y Contraste Tonal Crítico",
            intencion: "Fotorreportaje de Crónica (Simulacro). Documenta la escena de un accidente simulado en las escaleras del colegio. La edición incrementa el contraste y enfría las sombras para acentuar el impacto informativo de la crónica de prensa, reproduciendo la estética del fotoperiodismo documental.",
            imgEdited: "prensa_simulacro_escalera_policia.png",
            imgOriginal: "Sin editar/persona caída en escalera original.jpeg",
            featured: false
        },
        {
            id: "prensa-simulacro-picado1",
            title: "Inerte en la Escalera",
            plano: "Plano Picado Cenital",
            composicion: "Simetría Estructural y Tensión Central",
            intencion: "Periodismo Documental (Simulacro). El cuerpo de la estudiante tendida sobre los peldaños de concreto, visto desde arriba de forma directa y descriptiva. La edición neutraliza los tonos cálidos para otorgar un aspecto nítido y frío, propio de la fotografía pericial periodística.",
            imgEdited: "prensa_simulacro_escalera_picado1.jpeg",
            imgOriginal: "Sin editar/persona caída en escalera original.jpeg",
            featured: false
        },
        {
            id: "prensa-simulacro-picado2",
            title: "Perspectiva de la Caída",
            plano: "Plano Picado Diagonal",
            composicion: "Perspectiva Diagonal Dinámica",
            intencion: "Fotorreportaje (Simulacro). La misma escena capturada desde un ángulo longitudinal e inclinado de la escalera. La torsión diagonal de los escalones y la composición asimétrica refuerzan la tensión narrativa del reportaje, potenciando la fuerza visual del documento.",
            imgEdited: "prensa_simulacro_escalera_picado2 otro angulo.jpeg",
            imgOriginal: "Sin editar/persona caída en escalera original.jpeg",
            featured: false
        }
    ]
};

// --------------------------------------------------------------------------
// REFERENCIAS DOM
// --------------------------------------------------------------------------
const galleryPaisajistica = document.getElementById("gallery-paisajistica");
const galleryModa = document.getElementById("gallery-moda");
const galleryPrensa = document.getElementById("gallery-prensa");

const lightbox = document.getElementById("lightbox");
const lightboxBackdrop = document.getElementById("lightboxBackdrop");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxMedia = document.getElementById("lightboxMedia");

const lbTitle = document.getElementById("lbTitle");
const lbCategory = document.getElementById("lbCategory");
const lbPlano = document.getElementById("lbPlano");
const lbComposicion = document.getElementById("lbComposicion");
const lbIntencion = document.getElementById("lbIntencion");

const mainNav = document.getElementById("mainNav");
const particleCanvas = document.getElementById("particleCanvas");

// --------------------------------------------------------------------------
// INICIALIZACIÓN
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    buildGalleries();
    initHeroAnimations();
    initScrollReveal();
    initParticles();
    initParallax();
    initNavScroll();
    initLightbox();
});

// --------------------------------------------------------------------------
// CONSTRUIR GALERÍAS
// --------------------------------------------------------------------------
function buildGalleries() {
    buildGallery(galleryPaisajistica, OBRAS.paisajistica, "paisajistica");
    buildGallery(galleryModa, OBRAS.moda, "moda");
    buildGallery(galleryPrensa, OBRAS.prensa, "prensa");
}

function buildGallery(container, obras, category) {
    if (!container) return;
    container.innerHTML = "";

    obras.forEach((obra, index) => {
        const card = document.createElement("div");
        card.className = "photo-card reveal";
        if (obra.featured) card.classList.add("featured");
        card.style.transitionDelay = `${index * 80}ms`;

        const categoryNames = {
            paisajistica: "Paisajística",
            moda: "Moda",
            prensa: "Prensa"
        };
        const catName = categoryNames[category] || category;

        card.innerHTML = `
            <div class="card-img-wrap">
                <img src="${obra.imgEdited}" alt="${obra.title}" loading="lazy">
                <div class="card-hover-overlay">
                    <span class="card-badge badge--${category}">${catName}</span>
                    <h3 class="card-hover-title">${obra.title}</h3>
                    <p class="card-hover-meta">${obra.plano}</p>
                    <div class="card-hover-action">
                        <span>Ver Ficha Interactiva</span>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"></path><path d="M9 21H3v-6"></path><path d="M21 3l-7 7"></path><path d="M3 21l7-7"></path></svg>
                    </div>
                </div>
            </div>
            <div class="card-info">
                <div class="card-info-text">
                    <p class="card-info-title">${obra.title}</p>
                    <p class="card-info-meta">${obra.plano}</p>
                </div>
                <div class="card-action-btn">
                    <span>Explorar</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
            </div>
        `;

        card.addEventListener("click", () => openLightbox(obra, category));
        container.appendChild(card);
    });
}

// --------------------------------------------------------------------------
// LIGHTBOX
// --------------------------------------------------------------------------
function openLightbox(obra, category) {
    const categoryLabels = {
        paisajistica: "Fotografía Paisajística",
        moda: "Fotografía de Moda",
        prensa: "Fotografía de Prensa / Documental"
    };

    lbTitle.textContent = obra.title;
    lbCategory.textContent = categoryLabels[category] || category;
    lbPlano.textContent = obra.plano;
    lbComposicion.textContent = obra.composicion;
    lbIntencion.textContent = obra.intencion;

    lightboxMedia.innerHTML = "";

    if (obra.imgOriginal) {
        // Before / After slider
        lightboxMedia.innerHTML = `
            <div class="compare-container" id="compareContainer">
                <img class="compare-img before" src="${obra.imgOriginal}" alt="Foto original sin editar" draggable="false">
                <img class="compare-img after" src="${obra.imgEdited}" alt="Foto editada" draggable="false">
                <div class="compare-handle" id="compareHandle">
                    <div class="compare-knob">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                            <polyline points="8 18 2 12 8 6"></polyline>
                            <polyline points="16 6 22 12 16 18"></polyline>
                        </svg>
                    </div>
                </div>
                <input type="range" class="compare-range" id="compareRange" min="0" max="100" value="50" aria-label="Comparar original con editada">
                <span class="compare-label compare-label--after">Editada</span>
                <span class="compare-label compare-label--before">Original</span>
            </div>
        `;

        const range = document.getElementById("compareRange");
        const container = document.getElementById("compareContainer");

        function updateSlider(val) {
            container.style.setProperty("--slide-pos", `${val}%`);
        }
        updateSlider(50);

        range.addEventListener("input", (e) => updateSlider(e.target.value));

    } else {
        // Single image
        const img = document.createElement("img");
        img.className = "single-preview";
        img.src = obra.imgEdited;
        img.alt = obra.title;
        lightboxMedia.appendChild(img);
    }

    lightbox.classList.add("active");
    lightbox.removeAttribute("aria-hidden");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    // Delay cleanup so transition completes
    setTimeout(() => { lightboxMedia.innerHTML = ""; }, 500);
}

function initLightbox() {
    if (!lightbox) return;

    lightboxClose.addEventListener("click", closeLightbox);

    lightboxBackdrop.addEventListener("click", closeLightbox);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.classList.contains("active")) {
            closeLightbox();
        }
    });
}

// --------------------------------------------------------------------------
// HERO ANIMATIONS
// --------------------------------------------------------------------------
function initHeroAnimations() {
    const heroElements = document.querySelectorAll(".anim-hero");
    if (!heroElements.length) return;

    heroElements.forEach((el) => {
        const delay = (parseInt(el.dataset.delay) || 1) * 200;
        setTimeout(() => {
            el.classList.add("visible");
        }, delay);
    });
}

// --------------------------------------------------------------------------
// SCROLL REVEAL — IntersectionObserver para todos los .reveal
// --------------------------------------------------------------------------
function initScrollReveal() {
    const reveals = document.querySelectorAll(".reveal");
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
}

// --------------------------------------------------------------------------
// PARALLAX — Hero background on scroll
// --------------------------------------------------------------------------
function initParallax() {
    const heroBg = document.querySelector(".hero-bg");
    if (!heroBg) return;

    let ticking = false;
    window.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                heroBg.style.transform = `translateY(${scrollY * 0.35}px)`;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// --------------------------------------------------------------------------
// NAV SCROLL — Adds .scrolled class when page scrolls down
// --------------------------------------------------------------------------
function initNavScroll() {
    if (!mainNav) return;
    window.addEventListener("scroll", () => {
        mainNav.classList.toggle("scrolled", window.scrollY > 60);
    }, { passive: true });
}

// --------------------------------------------------------------------------
// PARTICLE SYSTEM — Floating golden dust on canvas
// --------------------------------------------------------------------------
function initParticles() {
    const canvas = particleCanvas;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let W, H, particles, dpr;
    const PARTICLE_COUNT = window.innerWidth < 768 ? 30 : 55;

    function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        canvas.style.width = W + "px";
        canvas.style.height = H + "px";
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    class Particle {
        constructor() { this.reset(true); }
        reset(initial = false) {
            this.x = Math.random() * W;
            this.y = initial ? Math.random() * H : H + 10;
            this.radius = Math.random() * 1.2 + 0.3;
            this.alpha = 0;
            this.targetAlpha = Math.random() * 0.35 + 0.05;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = -(Math.random() * 0.4 + 0.15);
            this.life = 0;
            this.maxLife = Math.random() * 300 + 200;
            if (initial) {
                this.life = Math.floor(Math.random() * this.maxLife);
                this.y = H - (this.life / this.maxLife) * H;
                this.alpha = Math.sin((this.life / this.maxLife) * Math.PI) * this.targetAlpha;
            }
        }
        update() {
            this.life++;
            this.x += this.vx;
            this.y += this.vy;
            const progress = this.life / this.maxLife;
            this.alpha = Math.sin(progress * Math.PI) * this.targetAlpha;
            if (this.life >= this.maxLife) this.reset();
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(201, 168, 76, ${this.alpha})`;
            ctx.fill();
        }
    }

    function init() {
        resize();
        particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
    }

    function loop() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach((p) => { p.update(); p.draw(); });
        requestAnimationFrame(loop);
    }

    window.addEventListener("resize", () => {
        resize();
        // Reposition particles within new bounds
        particles.forEach((p) => {
            if (p.x > W) p.x = Math.random() * W;
        });
    }, { passive: true });

    init();
    loop();
}

