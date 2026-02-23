/**
 * APP: Normas IRAM - Tipos de Líneas
 * Organización de imágenes:
 * - img/tipos/ : 7 imágenes de representación técnica (carga automática).
 * - img/opciones/ : 45 imágenes de ayuda de aplicación (carga con botón).
 */

// --- 1. ESTRUCTURA DE DATOS (45 líneas) ---
const LINE_DATA = [
    { type: "continua", thickness: "fina", purpose: "Línea imaginaria de acuerdos", image: "linea-imaginaria-acuerdos.png" },
    { type: "continua", thickness: "fina", purpose: "Línea de cota", image: "linea-cota.png" },
    { type: "continua", thickness: "fina", purpose: "Línea auxiliar de cota", image: "linea-auxiliar-cota.png" },
    {
        type: "continua",
        thickness: "fina",
        purpose: "Línea de indicación y línea de referencia",
        image: "linea-indicacion-referencia.png",
    },
    { type: "continua", thickness: "fina", purpose: "Rayado", image: "rayado.png" },
    { type: "continua", thickness: "fina", purpose: "Contorno de secciones giradas", image: "contorno-secciones-giradas.png" },
    { type: "continua", thickness: "fina", purpose: "Eje corto de centro", image: "eje-corto-centro.png" },
    { type: "continua", thickness: "fina", purpose: "Núcleo del filete de rosca", image: "nucleo-filete-rosca.png" },
    { type: "continua", thickness: "fina", purpose: "Origen de líneas de cota", image: "origen-lineas-cota.png" },
    {
        type: "continua",
        thickness: "fina",
        purpose: "Diagonales para la indicación de secciones transversales cuadradas",
        image: "diagonales-secciones-cuadradas.png",
    },
    {
        type: "continua",
        thickness: "fina",
        purpose: "Línea de doblado sobre pieza terminada y desarrollo",
        image: "linea-doblado-desarrollo.png",
    },
    { type: "continua", thickness: "fina", purpose: "Cuadro de detalles", image: "cuadro-detalles.png" },
    { type: "continua", thickness: "fina", purpose: "Indicación de detalles repetitivos", image: "detalles-repetitivos.png" },
    {
        type: "continua",
        thickness: "fina",
        purpose: "Línea de indicación del plano de calibración del cono",
        image: "plano-calibracion-cono.png",
    },
    { type: "continua", thickness: "fina", purpose: "Posición de láminas", image: "posicion-laminas.png" },
    { type: "continua", thickness: "fina", purpose: "Línea de proyección", image: "linea-proyeccion.png" },
    { type: "continua", thickness: "fina", purpose: "Línea de grilla", image: "linea-grilla.png" },
    {
        type: "continua",
        thickness: "fina",
        purpose: "Línea de interrupción a mano alzada fina continua",
        image: "interrupcion-mano-alzada.png",
    },
    {
        type: "continua",
        thickness: "fina",
        purpose: "Línea de interrupción en zigzag fina continua",
        image: "interrupcion-zigzag.png",
    },

    { type: "continua", thickness: "gruesa", purpose: "Arista visible", image: "arista-visible.png" },
    { type: "continua", thickness: "gruesa", purpose: "Contorno visible", image: "contorno-visible.png" },
    { type: "continua", thickness: "gruesa", purpose: "Cresta del filete de rosca", image: "cresta-filete-rosca.png" },
    { type: "continua", thickness: "gruesa", purpose: "Límite del largo del roscado", image: "limite-largo-roscado.png" },
    {
        type: "continua",
        thickness: "gruesa",
        purpose: "Representación gráfica de diagramas, mapas y diagramas de flujo",
        image: "diagramas-flujo.png",
    },
    {
        type: "continua",
        thickness: "gruesa",
        purpose: "Barra de una estructura metálica",
        image: "barra-estructura-metalica.png",
    },
    {
        type: "continua",
        thickness: "gruesa",
        purpose: "Línea de separación de matrices en vista de pieza",
        image: "separacion-matrices.png",
    },
    { type: "continua", thickness: "gruesa", purpose: "Línea de flechas de cortes y secciones", image: "flechas-cortes.png" },

    { type: "discontinua", thickness: "fina", purpose: "Aristas no visibles", image: "aristas-no-visibles.png" },
    { type: "discontinua", thickness: "fina", purpose: "Contornos no visibles", image: "contornos-no-visibles.png" },

    {
        type: "discontinua",
        thickness: "gruesa",
        purpose: "Indicación de tratamiento superficial",
        image: "tratamiento-superficial-discontinua.png",
    },

    { type: "raya larga y punto", thickness: "fina", purpose: "Eje", image: "eje.png" },
    { type: "raya larga y punto", thickness: "fina", purpose: "Eje de simetría", image: "eje-simetria.png" },
    {
        type: "raya larga y punto",
        thickness: "fina",
        purpose: "Circunferencia primitiva de engranajes",
        image: "circunferencia-primitiva.png",
    },
    {
        type: "raya larga y punto",
        thickness: "fina",
        purpose: "Circunferencia de centro de agujeros",
        image: "circunferencia-centro-agujeros.png",
    },

    {
        type: "raya larga y punto",
        thickness: "gruesa",
        purpose: "Indicación de áreas requeridas de tratamiento superficial",
        image: "areas-tratamiento-superficial.png",
    },
    {
        type: "raya larga y punto",
        thickness: "gruesa",
        purpose: "Posición de planos de corte",
        image: "posicion-planos-corte.png",
    },

    {
        type: "raya larga y doble punto",
        thickness: "fina",
        purpose: "Contorno de partes adyacentes",
        image: "contorno-partes-adyacentes.png",
    },
    {
        type: "raya larga y doble punto",
        thickness: "fina",
        purpose: "Posiciones extremas de partes móviles",
        image: "posiciones-extremas-moviles.png",
    },
    { type: "raya larga y doble punto", thickness: "fina", purpose: "Eje baricéntrico", image: "eje-baricentrico.png" },
    {
        type: "raya larga y doble punto",
        thickness: "fina",
        purpose: "Desarrollo previo al conformado",
        image: "desarrollo-previo-conformado.png",
    },
    {
        type: "raya larga y doble punto",
        thickness: "fina",
        purpose: "Partes situadas en el frente de un plano de corte",
        image: "partes-frente-plano-corte.png",
    },
    { type: "raya larga y doble punto", thickness: "fina", purpose: "Zona de desplazamiento", image: "zona-desplazamiento.png" },
    {
        type: "raya larga y doble punto",
        thickness: "fina",
        purpose: "Contorno de la pieza terminada dentro de la pieza en bruto",
        image: "contorno-pieza-terminada-en-bruto.png",
    },
    {
        type: "raya larga y doble punto",
        thickness: "fina",
        purpose: "Enmarcado de zonas particulares",
        image: "enmarcado-zonas-particulares.png",
    },
    {
        type: "raya larga y doble punto",
        thickness: "fina",
        purpose: "Zona de tolerancia proyectada",
        image: "zona-tolerancia-proyectada.png",
    },
];

// --- 2. ESTADO Y SELECTORES ---
let state = {
    questions: [],
    currentIndex: 0,
    userAnswers: [], // Almacena elecciones para volver atrás
    isHelpVisible: false,

    // Variables del cronómetro
    timerInterval: null,
    timeElapsed: 0,
    isTimerRunning: false,
};

const dom = {
    currentTxt: document.getElementById("current-idx"),
    totalTxt: document.getElementById("total-idx"),
    purposeTxt: document.getElementById("line-purpose"),
    selectType: document.getElementById("select-type"),
    selectThickness: document.getElementById("select-thickness"),

    // Visor 1: Representación Automática
    imageRepr: document.getElementById("repr-img"),
    placeholderRepr: document.getElementById("placeholder-repr"),

    // Visor 2: Ayuda de Aplicación
    imageHelp: document.getElementById("help-img"),
    containerHelp: document.getElementById("help-container"),

    // Botones
    btnHelp: document.getElementById("btn-help"),
    btnNext: document.getElementById("btn-next"),
    btnFinish: document.getElementById("btn-finish"),
    btnReset: document.getElementById("btn-reset"),
    btnPrev: document.getElementById("btn-prev"),
    resultsData: document.getElementById("results-data"),

    // Cronómetro
    btnTimer: document.getElementById("btn-timer"),
    timerDisplay: document.getElementById("timer-display"),

    // Menú Hamburguesa
    navToggle: document.querySelector(".nav__toggle"),
    navMenu: document.querySelector(".nav__menu"),
    navLinks: document.querySelectorAll(".nav__link"),
};

// --- 3. LÓGICA DEL CRONÓMETRO ---

function formatTime(seconds) {
    const m = Math.floor(seconds / 60)
        .toString()
        .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
}

function startTimer() {
    dom.btnTimer.classList.add("hidden");
    dom.timerDisplay.classList.remove("hidden");

    state.isTimerRunning = true;
    state.timerInterval = setInterval(() => {
        state.timeElapsed++;
        dom.timerDisplay.textContent = formatTime(state.timeElapsed);
    }, 1000);
}

function stopTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
}

function resetTimer() {
    stopTimer();
    state.timeElapsed = 0;
    state.isTimerRunning = false;
    dom.timerDisplay.textContent = "00:00";
    dom.timerDisplay.classList.add("hidden");

    if (dom.btnTimer) dom.btnTimer.classList.remove("hidden");
}

// Escuchar botón cronómetro
if (dom.btnTimer) {
    dom.btnTimer.addEventListener("click", startTimer);
}

// --- 4. LÓGICA DEL QUIZ ---

function initQuiz() {
    state.questions = [...LINE_DATA].sort(() => Math.random() - 0.5);
    state.currentIndex = 0;
    state.userAnswers = new Array(state.questions.length).fill(null);
    resetTimer(); // Reinicia el cronómetro al empezar un nuevo quiz
    renderQuestion();
}

function renderQuestion() {
    const q = state.questions[state.currentIndex];
    dom.currentTxt.textContent = state.currentIndex + 1;
    dom.totalTxt.textContent = state.questions.length;
    dom.purposeTxt.textContent = q.purpose;

    // Recuperar respuesta si el usuario volvió atrás
    const saved = state.userAnswers[state.currentIndex];
    dom.selectType.value = saved ? saved.type : "";
    dom.selectThickness.value = saved ? saved.thickness : "";

    // LÓGICA NUEVA: Bloquear o desbloquear al cargar la pregunta
    if (dom.selectType.value === "raya larga y doble punto") {
        dom.selectThickness.disabled = true;
    } else {
        dom.selectThickness.disabled = false;
    }

    // Resetear panel de ayuda
    state.isHelpVisible = false;
    dom.containerHelp.classList.add("hidden");
    dom.btnHelp.textContent = "Ver imagen de ayuda";

    // Actualizamos imagen y estado del botón "Siguiente"
    updateRepresentationImage();
}

/**
 * Carga la imagen de representación automáticamente y habilita el botón "Siguiente"
 */
function updateRepresentationImage() {
    const type = dom.selectType.value;
    const thick = dom.selectThickness.value;

    if (type !== "" && thick !== "") {
        dom.btnNext.disabled = false; // Habilita el botón Siguiente

        const formattedType = type.trim().toLowerCase().split(" ").join("-");
        const fileName = `${formattedType}-${thick}.png`;

        dom.imageRepr.src = `img/tipos/${fileName}`;
        dom.imageRepr.classList.remove("hidden");
        dom.placeholderRepr.classList.add("hidden");
    } else {
        dom.btnNext.disabled = true; // Apaga el botón Siguiente

        dom.imageRepr.classList.add("hidden");
        dom.placeholderRepr.classList.remove("hidden");
        dom.imageRepr.src = "";
    }
}

function showHelpImage() {
    const q = state.questions[state.currentIndex];
    dom.imageHelp.src = `img/opciones/${q.image}`;
    dom.containerHelp.classList.remove("hidden");
}

// --- 5. EVENTOS DEL QUIZ ---

dom.selectType.addEventListener("change", () => {
    // Si elige "raya larga y doble punto", fuerza "fina" y BLOQUEA el selector
    if (dom.selectType.value === "raya larga y doble punto") {
        dom.selectThickness.value = "fina";
        dom.selectThickness.disabled = true;
    } else {
        // Si elige cualquier otra, DESBLOQUEA el selector
        dom.selectThickness.disabled = false;
    }

    updateRepresentationImage();
});
dom.selectThickness.addEventListener("change", updateRepresentationImage);

dom.btnNext.addEventListener("click", () => {
    if (dom.selectType.value === "" || dom.selectThickness.value === "") {
        return;
    }

    state.userAnswers[state.currentIndex] = {
        type: dom.selectType.value,
        thickness: dom.selectThickness.value,
    };

    if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex++;
        renderQuestion();
    } else {
        finishQuiz();
    }
});

if (dom.btnPrev) {
    dom.btnPrev.addEventListener("click", () => {
        if (state.currentIndex > 0) {
            state.userAnswers[state.currentIndex] = {
                type: dom.selectType.value,
                thickness: dom.selectThickness.value,
            };
            state.currentIndex--;
            renderQuestion();
        }
    });
}

dom.btnHelp.addEventListener("click", () => {
    state.isHelpVisible = !state.isHelpVisible;
    if (state.isHelpVisible) {
        showHelpImage();
        dom.btnHelp.textContent = "Ocultar imagen de ayuda";
    } else {
        dom.containerHelp.classList.add("hidden");
        dom.btnHelp.textContent = "Ver imagen de ayuda";
    }
});

dom.btnFinish.addEventListener("click", () => {
    if (dom.selectType.value !== "" && dom.selectThickness.value !== "") {
        state.userAnswers[state.currentIndex] = {
            type: dom.selectType.value,
            thickness: dom.selectThickness.value,
        };
    }
    finishQuiz();
});

dom.btnReset.addEventListener("click", initQuiz);

function finishQuiz() {
    stopTimer();

    let score = { correct: 0, partial: 0, wrong: 0 };
    let attempted = 0;

    // Aquí guardaremos el HTML detallado para cada categoría
    let htmlCorrect = "";
    let htmlPartial = "";
    let htmlWrong = "";

    state.userAnswers.forEach((ans, index) => {
        if (!ans || (ans.type === "" && ans.thickness === "")) {
            return;
        }

        attempted++;
        const q = state.questions[index];
        const tMatch = ans.type === q.type;
        const thMatch = ans.thickness === q.thickness;

        // Armar la visualización del ítem
        const typeClass = tMatch ? "text--success" : "text--danger";
        const thickClass = thMatch ? "text--success" : "text--danger";

        let itemHtml = `
            <div class="results__item">
                <span class="results__item-title">${q.purpose}</span>
                Tu respuesta: <span class="${typeClass}">${ans.type}</span> | <span class="${thickClass}">${ans.thickness}</span>
        `;

        // Si hay un error (parcial o total), mostramos cuál era la correcta
        if (!tMatch || !thMatch) {
            itemHtml += `<span class="text--correct-hint">Respuesta Correcta: <strong>${q.type}</strong> | <strong>${q.thickness}</strong></span>`;
        }
        itemHtml += `</div>`;

        // Clasificar según acierto
        if (tMatch && thMatch) {
            score.correct++;
            htmlCorrect += itemHtml;
        } else if (tMatch || thMatch) {
            score.partial++;
            htmlPartial += itemHtml;
        } else {
            score.wrong++;
            htmlWrong += itemHtml;
        }
    });

    const total = state.questions.length;
    const efectividad = attempted > 0 ? ((score.correct / attempted) * 100).toFixed(1) : 0;

    let timeHtml = "";
    if (state.timeElapsed > 0 || state.isTimerRunning) {
        timeHtml = `
            <hr style="margin: 1rem 0; border: 1px solid #eee;">
            <p>⏱️ Tiempo de resolución: <strong>${formatTime(state.timeElapsed)}</strong></p>
        `;
    }

    // Armamos la pantalla de resultados con los botones "Ver" integrados
    dom.resultsData.innerHTML = `
        <div class="results__card">
            <p>📝 Líneas respondidas: <strong>${attempted} de ${total}</strong></p>
            <hr style="margin: 1rem 0; border: 1px solid #eee;">
            
            <p>✅ Aciertos Totales: <strong>${score.correct}</strong> 
               ${score.correct > 0 ? `<button class="results__toggle-btn" onclick="toggleDetails('det-correct')">Ver</button>` : ""}
            </p>
            <div id="det-correct" class="results__details hidden">${htmlCorrect}</div>

            <p>🟡 Aciertos Parciales: <strong>${score.partial}</strong>
               ${score.partial > 0 ? `<button class="results__toggle-btn" onclick="toggleDetails('det-partial')">Ver</button>` : ""}
            </p>
            <div id="det-partial" class="results__details hidden">${htmlPartial}</div>

            <p>❌ Errores: <strong>${score.wrong}</strong>
               ${score.wrong > 0 ? `<button class="results__toggle-btn" onclick="toggleDetails('det-wrong')">Ver</button>` : ""}
            </p>
            <div id="det-wrong" class="results__details hidden">${htmlWrong}</div>

            <hr style="margin: 1rem 0; border: 1px solid #eee;">
            <p>📊 Efectividad: <strong>${efectividad}%</strong></p>
            ${timeHtml}
        </div>
    `;
    // navigateTo("results");
    document.getElementById("quiz").classList.remove("section--active");
    document.getElementById("results").classList.add("section--active");
    window.scrollTo(0, 0);
}

// Función global (agregada al final) para desplegar los detalles
window.toggleDetails = function (id) {
    const el = document.getElementById(id);
    if (el.classList.contains("hidden")) {
        el.classList.remove("hidden");
    } else {
        el.classList.add("hidden");
    }
};

initQuiz();
