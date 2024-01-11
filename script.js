//? RECUPERO GLI ELEMENTI DAL DOM
const form = document.getElementById('form');
const grid = document.getElementById('grid');

// Dati di partenza
const rows = 10;
const cols = 10;
const cells = rows * cols;

//? FUNZIONI
/**
 * Funzione che crea delle celle da aggiungere successivamente in una grid
 * @param {number} content index del ciclo for
 * @returns {node} restituisce un div (cella)
 */
const createCell = (content) => {

    // Creo una cella
    const newCell = document.createElement('div');
    newCell.className = 'cell';
    newCell.innerText = content;
    return newCell;
}

//? CREO EVENT LISTENER

form.addEventListener('submit', function (e) {
    //! Impedisco che venga ricaricata la pagina
    e.preventDefault();

    //! Rimuovo griglia precedente quando viene cliccato nuovamente il bottone
    grid.innerHTML = '';

    for (let i = 1; i <= cells; i++) {

        // Invoco la funzione che crea la cella
        const cell = createCell(i);

        //! La cella cambia colore quando viene cliccata
        cell.addEventListener('click', function () {
            cell.classList.toggle('clicked');
            console.log(i);
        })

        // Inserisco la cella nella grid
        grid.appendChild(cell);
    }


})