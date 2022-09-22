const mensaje = document.getElementById("input-text");
let encriptado = "";

document.querySelector(".btn-primario").addEventListener("click", function () {
  encriptado = mensaje.value
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat")
    .replaceAll("a", "ai");
  document.querySelector(".mensaje-primero").style.display = "none";
  document.querySelector(".mensaje-dos").style.display = "block";
  document.querySelector(".encriptado").value = encriptado;
  document.querySelector(".input-text").value = "";
});

document
  .querySelector(".btn-secundario")
  .addEventListener("click", function () {
    encriptado = mensaje.value
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u")
      .replaceAll("ai", "a");
    document.querySelector(".mensaje-primero").style.display = "none";
    document.querySelector(".mensaje-dos").style.display = "block";
    document.querySelector(".encriptado").value = encriptado;
    console.log();
  });

document.querySelector(".copiar").addEventListener("click", function () {
  navigator.clipboard.writeText(encriptado);
  document.querySelector(".mensaje-primero").style.display = "block";
  document.querySelector(".mensaje-dos").style.display = "none";
  document.querySelector(".input-text").value = "";
});
