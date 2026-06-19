// ==========================================================================
// TALLER DE SEMIÓTICA DE LA TIPOGRAFÍA — LÓGICA DE INTERACCIÓN STANDALONE
// Universidad del Tolima · Multimodalidad y Medios de Comunicación
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    initParticles();
    initTypographyPlayground();
});

// --------------------------------------------------------------------------
// SISTEMA DE PARTÍCULAS — Polvo dorado flotando en el lienzo
// --------------------------------------------------------------------------
function initParticles() {
    const canvas = document.getElementById("particleCanvas");
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
        particles.forEach((p) => {
            if (p.x > W) p.x = Math.random() * W;
        });
    }, { passive: true });

    init();
    loop();
}

// --------------------------------------------------------------------------
// LÓGICA DEL TALLER Y LABORATORIO INTERACTIVO
// --------------------------------------------------------------------------
function initTypographyPlayground() {
    // 1. SISTEMA DE PESTAÑAS (TABS)
    const tabButtons = document.querySelectorAll(".tipo-tab-btn");
    const tabContents = document.querySelectorAll(".tipo-tab-content");

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => {
                b.classList.remove("active");
                b.setAttribute("aria-selected", "false");
            });
            tabContents.forEach(c => c.classList.remove("active"));

            btn.classList.add("active");
            btn.setAttribute("aria-selected", "true");
            const targetId = btn.dataset.tab;
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add("active");
            }
        });
    });

    // 2. RESPUESTAS A PREGUNTAS GENERADORAS: BORRADORES Y EXPORTACIÓN
    const q1 = document.getElementById("q1");
    const q2 = document.getElementById("q2");
    const q3 = document.getElementById("q3");
    const btnSaveDraft = document.getElementById("btnSaveDraft");
    const btnDownloadNotes = document.getElementById("btnDownloadNotes");

    // Cargar borradores desde localStorage si existen
    if (localStorage.getItem("tipo_draft_q1")) q1.value = localStorage.getItem("tipo_draft_q1");
    if (localStorage.getItem("tipo_draft_q2")) q2.value = localStorage.getItem("tipo_draft_q2");
    if (localStorage.getItem("tipo_draft_q3")) q3.value = localStorage.getItem("tipo_draft_q3");

    // Guardar borrador localmente
    btnSaveDraft.addEventListener("click", () => {
        localStorage.setItem("tipo_draft_q1", q1.value);
        localStorage.setItem("tipo_draft_q2", q2.value);
        localStorage.setItem("tipo_draft_q3", q3.value);
        
        // Efecto visual temporal de guardado
        const originalText = btnSaveDraft.textContent;
        btnSaveDraft.textContent = "¡Guardado!";
        btnSaveDraft.style.borderColor = "var(--gold)";
        btnSaveDraft.style.color = "var(--gold-light)";
        setTimeout(() => {
            btnSaveDraft.textContent = originalText;
            btnSaveDraft.style.borderColor = "";
            btnSaveDraft.style.color = "";
        }, 1800);
    });

    // Descargar apuntes en formato archivo de texto (.txt)
    btnDownloadNotes.addEventListener("click", () => {
        const textContent = `================================================================
APUNTES DE PREPARACIÓN DE TUTORÍA - NÚCLEO PROBLÉMICO 4
Semiótica de la Tipografía · Lic. en Literatura y Lengua Castellana
================================================================

1. ¿Qué es la tipografía?
----------------------------------------------------------------
${q1.value.trim() || "(Sin responder aún)"}

2. ¿Cuáles son los elementos constitutivos de la tipografía?
----------------------------------------------------------------
${q2.value.trim() || "(Sin responder aún)"}

3. ¿Qué lugar ocupa la tipografía en la diagramación de un texto?
----------------------------------------------------------------
${q3.value.trim() || "(Sin responder aún)"}

================================================================
Generado en: Reflejos — Exposición Fotográfica e Interactiva
Fecha de creación: ${new Date().toLocaleDateString("es-ES")}
================================================================`;

        const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "apuntes_semiotica_tipografia.txt";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    });

    // 3. LÓGICA DEL PLAYGROUND TIPOGRÁFICO & DIAGRAMACIÓN
    const ctrlFont = document.getElementById("ctrlFont");
    const ctrlSize = document.getElementById("ctrlSize");
    const ctrlSpacing = document.getElementById("ctrlSpacing");
    const ctrlLeading = document.getElementById("ctrlLeading");
    const ctrlGrid = document.getElementById("ctrlGrid");
    
    const valSize = document.getElementById("valSize");
    const valSpacing = document.getElementById("valSpacing");
    const valLeading = document.getElementById("valLeading");

    const tipoPreviewTitle = document.getElementById("tipoPreviewTitle");
    const tipoPreviewBody = document.getElementById("tipoPreviewBody");
    const tipoPosterMockup = document.getElementById("tipoPosterMockup");
    const tipoGridOverlay = document.getElementById("tipoGridOverlay");
    const tipoSemioticText = document.getElementById("tipoSemioticText");

    const weightButtons = document.querySelectorAll(".tipo-toggle-btn");
    const alignButtons = document.querySelectorAll(".tipo-align-btn");

    let currentWeight = "400";
    let currentAlign = "center";

    // Vincular eventos a controles deslizantes y de selección
    ctrlFont.addEventListener("change", updatePlayground);
    ctrlSize.addEventListener("input", updatePlayground);
    ctrlSpacing.addEventListener("input", updatePlayground);
    ctrlLeading.addEventListener("input", updatePlayground);
    
    ctrlGrid.addEventListener("change", () => {
        if (ctrlGrid.checked) {
            tipoGridOverlay.classList.add("active");
        } else {
            tipoGridOverlay.classList.remove("active");
        }
        updatePlayground();
    });

    // Grupo de botones para Peso (Grosor)
    weightButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            weightButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentWeight = btn.dataset.weight;
            updatePlayground();
        });
    });

    // Grupo de botones para Alineación
    alignButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            alignButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentAlign = btn.dataset.align;
            updatePlayground();
        });
    });

    // Inicializar visualización
    updatePlayground();

    // Función principal para actualizar los estilos del lienzo
    function updatePlayground() {
        const fontFamily = ctrlFont.value;
        const fontSize = ctrlSize.value + "px";
        const letterSpacing = ctrlSpacing.value + "px";
        const lineHeight = ctrlLeading.value;

        // Modificaciones dinámicas en el lienzo de previsualización
        if (tipoPosterMockup) tipoPosterMockup.style.textAlign = currentAlign;

        tipoPreviewTitle.style.fontFamily = fontFamily;
        tipoPreviewTitle.style.fontSize = fontSize;
        tipoPreviewTitle.style.letterSpacing = letterSpacing;
        tipoPreviewTitle.style.fontWeight = currentWeight;

        tipoPreviewBody.style.fontFamily = fontFamily;
        tipoPreviewBody.style.lineHeight = lineHeight;
        tipoPreviewBody.style.letterSpacing = (parseFloat(ctrlSpacing.value) * 0.25) + "px"; // Proporcional para cuerpo

        // Actualizar visualizadores de valores
        valSize.textContent = ctrlSize.value + "px";
        valSpacing.textContent = ctrlSpacing.value + "px";
        valLeading.textContent = ctrlLeading.value;

        // Actualizar análisis semiótico dinámico
        tipoSemioticText.innerHTML = generateSemiotics(fontFamily, ctrlSize.value, ctrlSpacing.value, ctrlLeading.value, currentWeight, currentAlign, ctrlGrid.checked);
    }

    // Generador de interpretaciones semióticas según las variables de diseño
    function generateSemiotics(font, size, spacing, leading, weight, align, gridActive) {
        let textFont = "";
        let textWeight = "";
        let textSize = "";
        let textSpacing = "";
        let textLeading = "";
        let textAlign = "";
        let textGrid = "";

        // Semiótica de la Familia Tipográfica (Eje 4.1)
        if (font.includes("font-display") || font.includes("Georgia")) {
            textFont = "La tipografía <strong>Serif</strong> (Playfair/Georgia) cuenta con remates o gracias históricas. Aporta una semántica de <strong>tradición, elegancia académica, rigor clásico y alta credibilidad editorial</strong>, facilitando el recorrido de lectura continua.";
        } else if (font.includes("font-body") || font.includes("Trebuchet")) {
            textFont = "La tipografía <strong>Sans-Serif</strong> (DM Sans/Trebuchet) de palo seco prescinde de adornos. Connota <strong>modernidad, objetividad científica, limpieza técnica y minimalismo</strong>, reduciendo el ruido visual para un impacto inmediato.";
        } else if (font.includes("Courier")) {
            textFont = "El estilo <strong>Monoespaciado</strong> (Courier) tiene un ancho fijo por carácter, evocando la máquina de escribir o código técnico. Aporta un sentido de <strong>documento pericial, proceso inacabado o nostalgia literaria</strong>.";
        }

        // Semiótica del Peso (Eje 4.2)
        if (weight === "700") {
            textWeight = "Un peso <strong>Negrita (Bold)</strong> aumenta la densidad visual en la composición, imponiendo un tono <strong>imperativo, asertivo y de entrada jerárquica obligatoria</strong> (el texto 'alza la voz' en el afiche).";
        } else {
            textWeight = "El peso <strong>Regular</strong> mantiene el sosiego tipográfico y la sobriedad, dejando respirar el lienzo y facilitando una asimilación equilibrada y neutral del mensaje.";
        }

        // Semiótica del Tamaño (Eje 4.2)
        const sizeVal = parseInt(size);
        if (sizeVal > 34) {
            textSize = "El tamaño <strong>monumental</strong> del título crea un contraste drástico de jerarquía visual, perfecto para atraer miradas en un cartel de CIPAS.";
        } else {
            textSize = "El tamaño <strong>contenido</strong> del título mantiene la armonía con el cuerpo de texto, buscando sutileza por encima del impacto visual bruto.";
        }

        // Semiótica del Interletrado (Eje 4.2)
        const spacingVal = parseFloat(spacing);
        if (spacingVal > 2.5) {
            textSpacing = "El interletrado <strong>dilatado (amplio)</strong> añade aire entre caracteres, dotando a la tipografía de <strong>estatus premium, sofisticación y orden vanguardista</strong>.";
        } else if (spacingVal < 0) {
            textSpacing = "Un interletrado <strong>condensado (estrecho)</strong> connota <strong>tensión, peso físico comprimido o urgencia informativa</strong>, restando legibilidad pero ganando dramatismo visual.";
        } else {
            textSpacing = "El interletrado <strong>estándar</strong> respeta las métricas ópticas naturales, priorizando la legibilidad pura.";
        }

        // Semiótica del Interlineado (Eje 4.2)
        const leadingVal = parseFloat(leading);
        if (leadingVal > 1.6) {
            textLeading = "El interlineado <strong>amplio</strong> aligera visualmente la 'mancha' del párrafo, transmitiendo <strong>reposo visual, orden intelectual y espacialidad poética</strong>.";
        } else if (leadingVal < 1.1) {
            textLeading = "Un interlineado <strong>cerrado</strong> comprime las líneas de texto, haciendo que el bloque visual se perciba denso y pesado, reduciendo la holgura de lectura pero aumentando la cohesión.";
        } else {
            textLeading = "El interlineado <strong>neutro</strong> garantiza la legibilidad del texto sin forzar contrastes visuales.";
        }

        // Semiótica de la Alineación y Diagramación (Eje 4.3)
        if (align === "justify") {
            textAlign = "La alineación <strong>Justificada</strong> impone bloques rectangulares simétricos, comunicando <strong>orden institucional, rigor formal, estabilidad y estructura editorial clásica</strong>.";
        } else if (align === "center") {
            textAlign = "La alineación <strong>Centrada</strong> crea una composición axial simétrica, evocando <strong>solemnidad, equilibrio lírico, elegancia de cartel y estatismo clásico</strong>.";
        } else if (align === "left") {
            textAlign = "La alineación a la <strong>Izquierda</strong> connota <strong>dinamismo contemporáneo y honestidad funcional</strong>, imitando el fluir natural y asimétrico de la escritura.";
        } else if (align === "right") {
            textAlign = "La alineación a la <strong>Derecha</strong> crea una tensión visual atípica para el lector occidental, ideal para pies de página o piezas editoriales conceptuales.";
        }

        // Retícula de Diagramación (Eje 4.3)
        if (gridActive) {
            textGrid = " Al activar la <strong>retícula de 3 columnas</strong>, se hace visible el soporte invisible que distribuye los elementos espaciales en la diagramación, demostrando cómo el equilibrio de pesos y márgenes subyace al diseño final.";
        }

        // Combinar en un único párrafo
        return `${textFont} ${textWeight} ${textSize} ${textSpacing} ${textLeading} ${textAlign}.${textGrid}`;
    }
}
