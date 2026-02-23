/**
 * MÓDULO RÓTULOS - Lógica de evaluación y navegación
 */

const rotuloState = {
    current: 1,
    total: 3,
    finished: false,
};

const domRotulos = {
    views: [
        document.getElementById("rotulo-view-1"),
        document.getElementById("rotulo-view-2"),
        document.getElementById("rotulo-view-3"),
    ],
    btnPrev: document.getElementById("btn-rotulo-prev"),
    btnNext: document.getElementById("btn-rotulo-next"),
    btnFinish: document.getElementById("btn-rotulo-finish"),
    btnReset: document.getElementById("btn-rotulo-reset"),
    btnClear: document.getElementById("btn-rotulo-clear"),
    results: document.getElementById("rotulos-results"),
};

// Navegación entre los 3 rótulos
function updateRotuloView() {
    domRotulos.views.forEach((view, idx) => {
        if (idx + 1 === rotuloState.current) {
            view.classList.remove("hidden");
        } else {
            view.classList.add("hidden");
        }
    });

    domRotulos.btnPrev.classList.toggle("hidden", rotuloState.current === 1);
    domRotulos.btnNext.classList.toggle("hidden", rotuloState.current === rotuloState.total);

    if (!rotuloState.finished) {
        domRotulos.btnFinish.classList.remove("hidden");
        domRotulos.btnClear.classList.remove("hidden");
    } else {
        domRotulos.btnFinish.classList.add("hidden");
        domRotulos.btnClear.classList.add("hidden");
    }
}

domRotulos.btnNext.addEventListener("click", () => {
    if (rotuloState.current < rotuloState.total) {
        rotuloState.current++;
        updateRotuloView();
    }
});

domRotulos.btnPrev.addEventListener("click", () => {
    if (rotuloState.current > 1) {
        rotuloState.current--;
        updateRotuloView();
    }
});

domRotulos.btnClear.addEventListener("click", () => {
    const currentView = domRotulos.views[rotuloState.current - 1];
    const inputs = currentView.querySelectorAll(".eval-input");
    inputs.forEach((input) => {
        if (!input.readOnly) {
            input.value = "";
        }
    });
});

function cleanString(str) {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

domRotulos.btnFinish.addEventListener("click", () => {
    rotuloState.finished = true;
    let score = { correct: 0, wrong: 0, attemptedRotulos: 0 };
    let resultsHtml = `<h3 style="color: var(--primary); margin-bottom: 1rem;">Reporte de Corrección</h3>`;

    domRotulos.views.forEach((view, idx) => {
        const numRotulo = idx + 1;
        const inputs = view.querySelectorAll(".eval-input");

        let isAttempted = Array.from(inputs).some((input) => input.value.trim() !== "");

        if (isAttempted) {
            score.attemptedRotulos++;
            let localCorrect = 0;
            let localWrong = 0;
            let detailsHtml = "";

            inputs.forEach((input) => {
                const userOriginalValue = input.value.trim();
                const userVal = cleanString(userOriginalValue);
                const possibleAnswers = input.getAttribute("data-answer").split("|");

                // Obtenemos la respuesta principal que se mostrará como correcta (ej. "TOLERANCIAS GENERALES")
                const displayCorrectAnswer = possibleAnswers[0].toUpperCase();

                // Buscamos si tiene un nombre personalizado (ej. "Casillero 1"), sino usamos el texto por defecto
                const dataName = input.getAttribute("data-name");
                const itemTitle = dataName ? dataName : `Casillero: ${displayCorrectAnswer}`;

                const isCorrect = possibleAnswers.some((ans) => cleanString(ans) === userVal);
                let enteredText = userOriginalValue === "" ? "(en blanco)" : userOriginalValue;

                if (isCorrect) {
                    detailsHtml += `
                        <div class="results__item">
                            <span class="results__item-title">${itemTitle}</span>
                            Tu respuesta: <span class="text--success">${enteredText}</span>
                        </div>`;

                    input.classList.add("correct");
                    localCorrect++;
                    score.correct++;
                } else {
                    detailsHtml += `
                        <div class="results__item">
                            <span class="results__item-title">${itemTitle}</span>
                            Tu respuesta: <span class="text--danger">${enteredText}</span>
                            <span class="text--correct-hint">Respuesta Correcta: <strong>${displayCorrectAnswer}</strong></span>
                        </div>`;

                    input.classList.add("incorrect");
                    localWrong++;
                    score.wrong++;

                    if (userOriginalValue === "") {
                        input.value = `Faltó: ${possibleAnswers[0]}`;
                    } else {
                        input.title = `Era: ${possibleAnswers[0]}`;
                    }
                }

                input.readOnly = true;
            });

            resultsHtml += `
                <p>📝 <strong>Rótulo ${numRotulo}:</strong> <span class="text--success">${localCorrect} correctos</span> | <span class="text--danger">${localWrong} errores</span>
                    ${localCorrect > 0 || localWrong > 0 ? `<button class="results__toggle-btn" onclick="toggleDetails('det-rotulo-${numRotulo}')">Ver</button>` : ""}
                </p>
                <div id="det-rotulo-${numRotulo}" class="results__details hidden">
                    ${detailsHtml}
                </div>
            `;
        } else {
            inputs.forEach((input) => {
                input.classList.add("skipped");
                input.readOnly = true;
            });
            resultsHtml += `<p>⏭️ <strong>Rótulo ${numRotulo}:</strong> No intentado (ignorado).</p>`;
        }
    });

    if (score.attemptedRotulos === 0) {
        resultsHtml += `<hr style="margin: 1rem 0; border: 1px solid #eee;"><p>😅 ¡No completaste nada! Anímate a probar en el próximo intento.</p>`;
    } else {
        const efectividad = ((score.correct / (score.correct + score.wrong)) * 100).toFixed(1);
        resultsHtml += `
            <hr style="margin: 1rem 0; border: 1px solid #eee;">
            <p>📊 <strong>Efectividad Total: ${efectividad}%</strong> (Sobre los rótulos intentados)</p>
            <p style="font-size: 0.85rem; color: var(--secondary); margin-top: 10px;">* Los casilleros en rojo tienen un tooltip: deja el mouse sobre ellos en el plano para ver la respuesta correcta.</p>
        `;
    }

    domRotulos.results.innerHTML = resultsHtml;
    domRotulos.results.classList.remove("hidden");

    updateRotuloView();
    domRotulos.btnReset.classList.remove("hidden");
});

domRotulos.btnReset.addEventListener("click", () => {
    rotuloState.current = 1;
    rotuloState.finished = false;

    domRotulos.views.forEach((view) => {
        const inputs = view.querySelectorAll(".eval-input");
        inputs.forEach((input) => {
            input.value = "";
            input.readOnly = false;
            input.classList.remove("correct", "incorrect", "skipped");
            input.title = "";
        });
    });

    domRotulos.results.classList.add("hidden");
    domRotulos.btnReset.classList.add("hidden");
    updateRotuloView();
});

updateRotuloView();
