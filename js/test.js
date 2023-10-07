// script.js

const casillas = document.querySelectorAll('.casilla');

casillas.forEach((casilla, index) => {
    casilla.addEventListener('click', () => {
        const valorActual = parseInt(casilla.textContent) || 0;
        const nuevoValor = (valorActual + 1) % 10; // Ciclo de 0 a 9
        casilla.textContent = nuevoValor;
    });
});