/**
 * MÓDULO FORMATOS - Normas IRAM
 */

const FORMATOS_DATA = [
    { name: "A4", w: 210, h: 297, areaBase: 1 },
    { name: "A3", w: 297, h: 420, areaBase: 2 },
    { name: "A2", w: 420, h: 594, areaBase: 4 },
    { name: "A1", w: 594, h: 841, areaBase: 8 },
    { name: "A0", w: 841, h: 1189, areaBase: 16 },
];

let state = {
    questions: [],
    currentIndex: 0,
    isRefVisible: false,
};

const dom = {
    currentTxt: document.getElementById("current-idx"),
    totalTxt: document.getElementById("total-idx"),
    container: document.getElementById("question-container"),
    refContainer: document.getElementById("reference-container"),

    btnRef: document.getElementById("btn-ref"),
    btnNext: document.getElementById("btn-next"),
    btnPrev: document.getElementById("btn-prev"),
    btnFinish: document.getElementById("btn-finish"),
    btnReset: document.getElementById("btn-reset"),
    btnRetry: document.getElementById("btn-retry"),

    quizSection: document.getElementById("quiz-formatos"),
    resultsSection: document.getElementById("results"),
    resultsData: document.getElementById("results-data"),
};

function generateQuestions() {
    let qList = [];

    // 1. Preguntas de Dimensiones (Aleatorias)
    let dims = [...FORMATOS_DATA].sort(() => Math.random() - 0.5);
    dims.forEach((f) => {
        qList.push({
            id: `dim_${f.name}`,
            type: "dimensions",
            format: f.name,
            ansW: f.w.toString(),
            ansH: f.h.toString(),
            userW: "",
            userH: "",
        });
    });

    // 2. Preguntas de Relación de Área (¡TODAS las 20 combinaciones posibles!)
    let relations = [];
    for (let i = 0; i < FORMATOS_DATA.length; i++) {
        for (let j = 0; j < FORMATOS_DATA.length; j++) {
            // Evitamos comparar el mismo formato consigo mismo (ej. A4 vs A4)
            if (i !== j) {
                let f1 = FORMATOS_DATA[i];
                let f2 = FORMATOS_DATA[j];
                let answer = "";

                // Si f1 es más grande que f2 (ej. A0 vs A3 -> factor 8)
                if (f1.areaBase > f2.areaBase) {
                    answer = (f1.areaBase / f2.areaBase).toString();
                } else {
                    // Si f1 es más chico que f2 (ej. A3 vs A0 -> factor 1/8)
                    answer = `1/${f2.areaBase / f1.areaBase}`;
                }

                relations.push({
                    id: `rel_${f1.name}_${f2.name}`,
                    type: "relation",
                    f1: f1.name,
                    f2: f2.name,
                    ans: answer,
                    userAns: "",
                });
            }
        }
    }

    // Mezclamos el bloque de relaciones para que el orden sea impredecible en cada intento
    relations.sort(() => Math.random() - 0.5);

    // Unimos todo: primero te toma las 5 medidas y después los 20 casos de relación
    qList = qList.concat(relations);

    return qList;
}

function initQuiz() {
    state.questions = generateQuestions();
    state.currentIndex = 0;

    dom.quizSection.classList.add("section--active");
    dom.resultsSection.classList.remove("section--active");

    hideReference();
    renderQuestion();
}

function renderQuestion() {
    const q = state.questions[state.currentIndex];
    dom.currentTxt.textContent = state.currentIndex + 1;
    dom.totalTxt.textContent = state.questions.length;

    dom.btnPrev.disabled = state.currentIndex === 0;

    let html = "";

    if (q.type === "dimensions") {
        html = `
            <p class="quiz__text" style="font-size: 1.3rem;">Ingrese las medidas en milímetros del formato <strong class="text--primary" style="font-size: 1.5rem;">${q.format}</strong>:</p>
            <div class="format-dim-group">
                <input type="number" id="inp-w" class="format-input" placeholder="Ancho" value="${q.userW}">
                <span>x</span>
                <input type="number" id="inp-h" class="format-input" placeholder="Alto" value="${q.userH}">
                <span>mm</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--secondary); margin-top: 10px;">(Ancho x Alto)</p>
        `;
    } else if (q.type === "relation") {
        html = `
            <div class="relation-text">
                El área del formato <strong>${q.f1}</strong> es 
                <input type="text" id="inp-rel" class="relation-input" placeholder="..." value="${q.userAns}" autocomplete="off">
                veces la del formato <strong>${q.f2}</strong>.
            </div>
            <p style="font-size: 0.85rem; color: var(--secondary); margin-top: 10px;">(Nota: Si es una fracción, escríbela con barra. Ej: 1/8)</p>
        `;
    }

    dom.container.innerHTML = html;
}

function saveCurrentAnswer() {
    const q = state.questions[state.currentIndex];
    if (q.type === "dimensions") {
        const inputW = document.getElementById("inp-w");
        const inputH = document.getElementById("inp-h");
        if (inputW && inputH) {
            q.userW = inputW.value.trim();
            q.userH = inputH.value.trim();
        }
    } else if (q.type === "relation") {
        const inputRel = document.getElementById("inp-rel");
        if (inputRel) {
            q.userAns = inputRel.value.trim();
        }
    }
}

// Navegación
dom.btnNext.addEventListener("click", () => {
    saveCurrentAnswer();
    if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex++;
        renderQuestion();
        hideReference();
    } else {
        finishQuiz();
    }
});

dom.btnPrev.addEventListener("click", () => {
    saveCurrentAnswer();
    if (state.currentIndex > 0) {
        state.currentIndex--;
        renderQuestion();
        hideReference();
    }
});

dom.btnFinish.addEventListener("click", () => {
    saveCurrentAnswer();
    finishQuiz();
});

dom.btnReset.addEventListener("click", initQuiz);
dom.btnRetry.addEventListener("click", initQuiz);

// Imagen de referencia
function hideReference() {
    state.isRefVisible = false;
    dom.refContainer.classList.add("hidden");
    dom.btnRef.textContent = "Ver imagen de referencia";
}

dom.btnRef.addEventListener("click", () => {
    state.isRefVisible = !state.isRefVisible;
    if (state.isRefVisible) {
        dom.refContainer.classList.remove("hidden");
        dom.btnRef.textContent = "Ocultar imagen";
    } else {
        hideReference();
    }
});

function finishQuiz() {
    let score = 0;
    let attempted = 0;
    let htmlResult = "";

    state.questions.forEach((q) => {
        // 1. Verificamos si el usuario intentó responder la pregunta
        let isAttempted = false;
        if (q.type === "dimensions") {
            if (q.userW !== "" || q.userH !== "") isAttempted = true;
        } else if (q.type === "relation") {
            if (q.userAns !== "") isAttempted = true;
        }

        // Si está en blanco, la salteamos y no cuenta para la estadística
        if (!isAttempted) {
            return;
        }

        attempted++;
        let details = "";

        // 2. Evaluamos la respuesta si fue intentada
        if (q.type === "dimensions") {
            const wOk = q.userW === q.ansW;
            const hOk = q.userH === q.ansH;

            if (wOk && hOk) {
                score++;
                details = `<span class="text--success">${q.userW} x ${q.userH} mm</span>`;
            } else {
                details = `
                    Tu respuesta: <span class="text--danger">${q.userW || "?"} x ${q.userH || "?"} mm</span><br>
                    <span class="text--correct-hint">Correcta: <strong>${q.ansW} x ${q.ansH} mm</strong></span>
                `;
            }
            htmlResult += `
                <div class="results__item">
                    <span class="results__item-title">Medidas formato ${q.format}</span>
                    ${details}
                </div>
            `;
        } else if (q.type === "relation") {
            // Limpiamos espacios para evitar errores si escribís "1 / 8" en vez de "1/8"
            const userClean = q.userAns.replace(/\s/g, "");
            if (userClean === q.ans) {
                score++;
                details = `El ${q.f1} es <span class="text--success">${q.userAns}</span> veces el ${q.f2}.`;
            } else {
                details = `
                    Tu respuesta: <span class="text--danger">${q.userAns || "?"}</span><br>
                    <span class="text--correct-hint">Respuesta correcta: <strong>${q.ans}</strong></span>
                `;
            }
            htmlResult += `
                <div class="results__item">
                    <span class="results__item-title">Relación ${q.f1} y ${q.f2}</span>
                    ${details}
                </div>
            `;
        }
    });

    const total = state.questions.length;
    // Calculamos los errores restando los aciertos a las preguntas intentadas
    const wrong = attempted - score;
    // Evitamos dividir por cero si el usuario no respondió nada
    const efectividad = attempted > 0 ? ((score / attempted) * 100).toFixed(1) : 0;

    let emptyMessage =
        attempted === 0
            ? `<p style="color: var(--secondary); margin-top: 1rem;">No respondiste ninguna pregunta. ¡Animate en el próximo intento!</p>`
            : "";

    dom.resultsData.innerHTML = `
        <div class="results__card">
            <p>📝 Preguntas respondidas: <strong>${attempted} de ${total}</strong></p>
            <hr style="margin: 1rem 0; border: 1px solid #eee;">
            
            <p>✅ Aciertos: <strong>${score} de ${attempted}</strong></p>
            <p>❌ Errores: <strong>${wrong} de ${attempted}</strong></p>
            <p>📊 Efectividad: <strong>${efectividad}%</strong></p>
            
            ${emptyMessage}
            
            <div style="margin-top: 1rem;">
                ${htmlResult}
            </div>
        </div>
    `;

    dom.quizSection.classList.remove("section--active");
    dom.resultsSection.classList.add("section--active");
    window.scrollTo(0, 0);
}

// Inicializar al cargar
initQuiz();
