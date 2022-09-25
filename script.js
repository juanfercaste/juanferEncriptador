"use strict";
const mensaje = document.getElementById("mensaje");
const mensaje2 = document.getElementById("mensaje2");
const btnEncriptar = document.querySelector(".encriptar");
const btnDesencriptar = document.querySelector(".desencriptar");
const btnCopiar = document.querySelector(".copiar");
let encriptado = 0;

const encriptadoValor = function (valor) {
  document.getElementById("mensaje2").value = valor;
};

const encriptar = function () {};

btnEncriptar.addEventListener("click", function () {
  encriptado = mensaje.value
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
  encriptadoValor(encriptado);
  mensaje.value = "";
});

btnDesencriptar.addEventListener("click", function () {
  encriptado = mensaje.value
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
  encriptadoValor(encriptado);
  mensaje.value = "";
});

btnCopiar.addEventListener("click", function () {
  navigator.clipboard.writeText(encriptado);
  mensaje.value = encriptado;
  mensaje2.value = "";
});
