//Dragstart -> quando começa a ser arrastado
//Drag -> quando está sendo arrastado
//Dragend -> quando parar de arrastar 
//Dragenter -> quando entra na zona para ser soltado
//Dragover -> ele está em cima de onde é pra ser solto
//Dragleave -> ele saiu da zona para ser solto
//Drop -> ele foi solto

//**Help/
function log(message) {
    console.log(message);
}


const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

//our cards
cards.forEach((card) => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
});

function dragstart() {
   dropzones.forEach(dropzone => dropzone.classList.add('highlight'));

    this.classList.add('isDraging');
};

function drag() {
    log('drag');
};

function dragend() {
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));

    this.classList.remove('isDraging');
};

//Local onde será solto os cartoẽs
dropzones.forEach((dropzone) => {
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
});

function dragenter() {
    //this.classList.remove('over');
};

function dragover() {
    //this = dropzone
   // this.classList.add('over');

    //get dragging card
    const cardBeingDragged = document.querySelector('.isDraging');

    this.appendChild(cardBeingDragged);
};

function dragleave() {
    //this.classList.remove('over');
};

function drop() {
//this.classList.remove('over');
};

