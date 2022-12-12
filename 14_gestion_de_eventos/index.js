document.addEventListener('DOMContentLoaded', () => {
  const vanillaBtn = document.getElementsByClassName("vanilla-btn")
  vanillaBtn[0].addEventListener('click', () => {alert("Click en el botón")})
});

$(document).ready(() => {
  $(".jq-btn").click(() => {
    console.log("Hola, estoy utilizando jQuery")
  })
})