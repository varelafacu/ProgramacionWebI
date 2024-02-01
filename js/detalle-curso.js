//PopUp
const open = document.getElementById("boton-naranja");
const close = document.getElementById("continuar");
const modal_container = document.getElementById("modal_container");

open.addEventListener('click', ()=>{
    modal_container.classList.add('show');
});

close.addEventListener('click', ()=>{
    modal_container.classList.remove('show');
});