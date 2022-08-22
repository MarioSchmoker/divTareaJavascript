let contador = 0;
function contarClicks() {
  contador++;
  // console.log("Se realizaron", contador, "clicks");
  document.getElementById("cuenta").innerHTML =
    "Se realizaron " + contador + " clicks";
}

document.querySelector(".parrafoDom").innerHTML = "<h4> Agregado desde js";

let imagen = document.querySelector("img");
imagen.src =
  "https://loscormoranes.com/wp-content/uploads/2018/07/tierradelfuego.jpg";

let btn = document.getElementById("btn-contar");
btn.addEventListener("click", contarClicks);
// ultima clase
let caja = document.createElement("div");
let body = document.querySelector("body");
body.appendChild(caja);
let lista = document.createElement("ul");
let elemento = document.createElement("li");
let texto = document.createTextNode("item 1");

elemento.appendChild(texto);
lista.appendChild(elemento);
caja.appendChild(lista);

// ocultar y mostrar div
let boton = document.createElement("button");
boton.appendChild(document.createTextNode("Ocultar/Mostar Imagen"));
body.appendChild(boton);
boton.addEventListener("click", () => {
  // imagen.style.display = "none";
  // boton.appendChild(document.createTextNode("Mostar Imagen"));
  // imagen.classList.toggle("alternar_img");
  imagen.classList.toggle("alternar_img");
});
// ejercicio 2 reutilizar //
//  function cambiarClick() {
//    if ( %2 === 0){

//    }

// function ocultar(elemento) {

// }
