'SameSite=Lax';

const form=document.getElementById("form");
const btn=document.getElementById("button");
let regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    validar();

    btn.value = "Sending...";

    const serviceID='defaulta_service';
    const templateID = 'template_lah6rma';

    emailjs.sendForm(serviceID, templateID, this).then(()=>{
        btn.value = 'Send Email';
        alert('Sent!');
    }, (err) =>{
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
    });
});

function validar(){
    let error=false;
    let mensajeError= "";
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("mail").value;

    if(nombre == ""){
        error=true;
        mensajeError += "<p>El campo nombre es obligatorio</p>";
    }
    if(!regexEmail.test(correo)){
        error=true;
        mensajeError += "<p>El campo debe ser un mail</p>";
    }
    if(error){
        document.getElementById("mensaje").innerHTML=mensajeError;
    }else{

    }
}


$('#mensaje_ayuda').text('1000 carácteres restantes');
  $('#message').keydown(function () {
    var max = 1000;
    var len = $(this).val().length;
    if (len >= max) {
        $('#mensaje_ayuda').text('Has llegado al límite');
        document.getElementById('inputsubmit').disabled = true;
        alert('Llegaste al máximo de caracteres')               
    }else{
        var ch = max - len;
        $('#mensaje_ayuda').text(ch + ' carácteres restantes');
        document.getElementById('inputsubmit').disabled = false;            
    }
});

//PopUp
const open = document.getElementById("inputsubmit");
const close = document.getElementById("aceptar");
const modal_container = document.getElementById("modal_container");

open.addEventListener('click', ()=>{
    if(validar()!==null){
        modal_container.classList.add('show');
    }
});

close.addEventListener('click', ()=>{
    modal_container.classList.remove('show');
});