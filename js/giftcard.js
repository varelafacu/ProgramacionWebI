const preview=document.getElementById("preview");
const text=document.getElementById("texto")
const titulo=document.getElementById("titulo");
const precio=document.getElementById("precio");
const valor=document.getElementById("valor");

const monto=document.getElementById("monto");
const ubi=document.getElementsByName('ubicacion');
const sizeFuente=document.getElementsByName('size')
const colorFondo=document.getElementById("fondo");
const colorTexto=document.getElementsByName('colorText');

text.addEventListener("keyup", function(){
    titulo.innerHTML=this.value;
});

colorFondo.addEventListener("change", function(){
    let fondoNuevo=colorFondo.value;

    preview.style.backgroundColor=fondoNuevo;  
});

colorTexto.forEach((color)=>{
    color.addEventListener("click", ()=>{
        preview.style.color=color.value;
    });
});

sizeFuente.forEach((input)=>{
    input.addEventListener("click", ()=>{
        titulo.style.fontSize=input.value;
    });
});

monto.addEventListener("keyup", function(){
    let signo="$";
    precio.innerHTML=signo + this.value;
});

ubi.forEach((input)=>{
    input.addEventListener("click", ()=>{
        valor.style.alignSelf=input.value;
    });
});

function mensaje(){
    
    if(titulo.innerHTML !== ''){
        alert('Gift-Card creada... !Revise su mail!');
    }
    
}