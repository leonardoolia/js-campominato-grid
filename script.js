//? RECUPERO GLI ELEMENTI DAL DOM
const form = document.getElementById('form');
const grid = document.getElementById('grid');

// Dati di partenza
const rows = 10;
const cols = 10;
const cells = rows * cols;

//? FUNZIONI

const createCell = (content) => {

    // Creo una cella
    const newCell = document.createElement('div');
    newCell.className = 'cell';
    newCell.innerText = content;
    return newCell;
}

