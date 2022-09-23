"use strict";
const mensaje = document.getElementById("input-text");
const btnEncriptar = document.querySelector(".btn-primario");
const btnDesencriptar = document.querySelector(".btn-secundario");
const btnCopiar = document.querySelector(".copiar");
let encriptado = 0;

const displayMensaje = function (display) {
  document.querySelector(".mensaje-primero").style.display = display;
};

const displayMensaje2 = function (display2) {
  document.querySelector(".mensaje-dos").style.display = display2;
};

const encriptadoValor = function (valor) {
  document.querySelector(".encriptado").value = valor;
};

const encriptar = function () {};

btnEncriptar.addEventListener("click", function () {
  encriptado = mensaje.value
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
  displayMensaje("none");
  displayMensaje2("block");
  encriptadoValor(encriptado);
  document.querySelector(".input-text").value = "";
});

btnDesencriptar.addEventListener("click", function () {
  encriptado = mensaje.value
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
  displayMensaje("none");
  displayMensaje2("block");
  encriptadoValor(encriptado);
});

btnCopiar.addEventListener("click", function () {
  navigator.clipboard.writeText(encriptado);
  displayMensaje("block");
  displayMensaje2("none");
  document.querySelector(".input-text").value = "";
});
