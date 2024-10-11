/** @type {HTMLInputElement} */ const volumeElement = document.getElementById('volume');
/** @type {HTMLDivElement} */ const teclasDoPiano = document.getElementsByClassName('tecla');

/**
 * 
 * @param {Nota} nota 
 */
function mostrarToque(nota) {
    const tecla = document.getElementById(nota.id);
    setTimeout(() => {
        tecla.style.backgroundColor = nota.corNormal;
    }, 50);
    tecla.style.backgroundColor = nota.corTocada;
}

/**
 * @param {Nota} nota
 */
function tocar(nota) {
    const audio = new Audio(nota.arquivo);
    audio.volume = Number(volumeElement.value) / 100;
    audio.play();
    mostrarToque(nota);
}

for (let i = 0; i < teclasDoPiano.length; i++) {
    const tecla = teclasDoPiano[i];
    tecla.addEventListener('click', () => tocar(notas.filter(nota => nota.id === tecla.id)[0]));
}

document.addEventListener('keydown', (event) => {
    const tecla = event.key;
    const nota = notas.filter(n => n.tecla === tecla)[0];
    if (nota) {
        tocar(nota);
    }
});