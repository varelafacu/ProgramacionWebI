var add=document.getElementById("add");
var form=document.getElementById("formulario");
var restar=document.querySelector('.restar');

add.addEventListener("click", function(){
    clonarArticle();
});

restar.addEventListener('click', function(){
    ultimoArticle=form.parentNode;
    var inputs=ultimoArticle.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.value = '';
    });
});

function clonarArticle(){

    var ultimoArticle=form.lastElementChild;
    var clon = ultimoArticle.cloneNode(true);

    clon.value = "Otro";
    clon.querySelector('.restar').addEventListener('click', function(){
        form.removeChild(clon);
    });

    form.appendChild(clon);
};

window.addEventListener("resize", function(){
    if(this.window.innerWidth<720){
        restar.textContent="Borrar";
        add.textContent="Agregar nueva persona";
    }else{
        restar.textContent = "-";
        add.textContent = "+";
    }
});


//Guardar Datos
function addAlumno() {
    var nombre = document.getElementById("nombre").value;

    var apellido = document.getElementById("apellido").value;

    sessionStorage.setItem(nombre, apellido);

    mostrarDatos(nombre);
}

function mostrarDatos() {
    var datosDisponibles = document.getElementById("tablaAlumnos");

    datosDisponibles.innerHTML = "";

    for(var i=0; i<sessionStorage.length; i++) {
        var nombre = sessionStorage.key(i);

        var apellido = sessionStorage.getItem(nombre);

        var filaAlumnos = document.createElement("tr");
        filaAlumnos.innerHTML += `
            <td>${nombre}</td>
            <td>${apellido}</td>
        `;

        datosDisponibles.append(filaAlumnos);

    }
    
}

//PopUp
const open=document.getElementById("open");
const close=document.getElementById("close");
const modal_container=document.getElementById("modal_container");

open.addEventListener('click', ()=>{
    modal_container.classList.add('show');
});

close.addEventListener('click', ()=>{
    modal_container.classList.remove('show');
    navigation.reload();
});


//Precio
var precio = 29.50;
function sumar() {
    precio += 29.50;
    mostrador.value = precio;
    mostrador.innerHTML = '$' + precio;
}

function disminuir(){
    
    if(mostrador.innerHTML === '$' + '29.5'){
        alert('Debe inscribir una persona como mínimo');
    }else{
        precio -= 29.50;
        mostrador.value = precio;
        mostrador.innerHTML = '$' + precio;
    }
}
