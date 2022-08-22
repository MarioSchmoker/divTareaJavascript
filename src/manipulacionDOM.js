let body = document.querySelector("body");
let imagen = document.querySelector("img");
imagen.src =
  "https://loscormoranes.com/wp-content/uploads/2018/07/tierradelfuego.jpg";
let boton = document.createElement("button");
ocultarDiv();

function ocultarDiv() {
  boton.appendChild(document.createTextNode("Ocultar/Mostar Imagen"));
  body.appendChild(boton);
  boton.addEventListener("click", () => {
    imagen.classList.toggle("alternar_img");
  });
}

let caja = document.createElement("div");
body.appendChild(caja);
let lista = document.createElement("ul");
let elemento = document.createElement("li");
let texto = document.createTextNode("Tarea 1");
elemento.appendChild(texto);
lista.appendChild(elemento);
caja.appendChild(lista);

elemento = document.createElement("li");
texto = document.createTextNode("Tarea 2");
elemento.appendChild(texto);
lista.appendChild(elemento);

elemento = document.createElement("li");
texto = document.createTextNode("Tarea 3");
elemento.appendChild(texto);
lista.appendChild(elemento);
let nuevaTarea = String;
nuevaTarea = document.createElement("input");
body.appendChild(nuevaTarea);
nuevaTarea.appendChild(document.createTextNode("Nueva Tarea"));
// nuevaTarea = document.getElementById(this.value);

boton = document.createElement("button");
boton.appendChild(document.createTextNode("Agregar tarea"));
body.appendChild(boton);
boton.addEventListener("click", () => {
  elemento = document.createElement("li");
  texto = document.createTextNode(nuevaTarea.value);
  elemento.appendChild(texto);
  lista.appendChild(elemento);
  document.getElementsByTagName("input")[0].value = "";
  console.log(texto);
});
