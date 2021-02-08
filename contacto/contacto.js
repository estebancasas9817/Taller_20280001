'use strict'
const nombre = document.querySelector(".contact__name");
const apellido = document.querySelector(".contact__apellido");
const telefono = document.querySelector(".contact__tel");
const correo = document.querySelector(".contact__email");
const mensaje = document.querySelector(".contact__mensaje");
const enviar = document.querySelector(".contact__enviar");
enviar.addEventListener("click",function(){
    alert(`    Nombre: ${nombre.value}
    Apellido: ${apellido.value}
    Telefono: ${telefono.value}
    Correo: ${correo.value}
    Mensaje: ${mensaje.value}`);
});