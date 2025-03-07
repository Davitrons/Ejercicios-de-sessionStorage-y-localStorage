// Ejercicio 1: Guardar y recuperar un mensaje
// Guarda un mensaje en sessionStorage y recupéralo para mostrarlo en la consola.

sessionStorage.setItem("nombre", "David");
console.log(sessionStorage.getItem("nombre"));

// Ejercicio 2: Contador de visitas en la sesión
// Crea un contador que aumente cada vez que el usuario recargue la página, pero que se borre al cerrar la pestaña.

let contador = sessionStorage.getItem("contador") || 0;
contador++;
sessionStorage.setItem("contador", contador);

// Ejercicio 3: Guardar un nombre y mostrarlo en la página
// Solicita al usuario un nombre, guárdalo en sessionStorage y muéstralo en la página.

const btnnombre = document.querySelector("input[type='button']");
btnnombre.addEventListener('click', ()=>{
    if (nombre = document.querySelector("input[type='text']")) {
        sessionStorage.setItem('NombreGuardado', nombre.value)
        document.querySelector(".elemento").replaceWith(crearElemento(sessionStorage.getItem('NombreGuardado')))
    }
})

// Ejercicio 4: Eliminar un dato de sessionStorage
// Guarda un dato en sessionStorage, luego agrega un botón para eliminarlo manualmente.
const btneliminar = document.querySelectorAll("input[type='button']")[1];
btneliminar.addEventListener('click', ()=>{
    sessionStorage.removeItem("nombre");
})


// Ejercicio 5: Verificar si un dato existe en sessionStorage
// Comprueba si un dato específico existe en sessionStorage y muestra un mensaje en la consola indicando si está presente o no.

let dato = "edad"

sessionStorage.getItem(dato) 
? console.log(`El dato '${dato}' está presente en sessionStorage: ${sessionStorage.getItem(dato)}`)
: console.log(`El dato '${dato}' NO está presente en sessionStorage.`);

function crearElemento(txt) {
    let parrafo = document.createElement("p");
    parrafo.classList.add("elemento");
    let texto = document.createTextNode(txt);
    parrafo.append(texto);
    return parrafo;
  }