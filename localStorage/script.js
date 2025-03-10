// Ejercicio 1: Guardar y recuperar una preferencia de usuario
// Guarda un color de fondo elegido por el usuario en localStorage y aplícalo cuando la página se cargue.

const colorInput = document.getElementById("color");

// Recuperar color guardado
const savedColor = localStorage.getItem("bgColor");
if (savedColor) {
  document.body.style.backgroundColor = savedColor;
  colorInput.value = savedColor;
}

// Guardar el color seleccionado
colorInput.addEventListener("input", () => {
  const color = colorInput.value;
  localStorage.setItem("bgColor", color);
  document.body.style.backgroundColor = color;
});

// Ejercicio 2: Lista de tareas con localStorage
// Permite agregar tareas a una lista y guárdalas en localStorage para que no se pierdan al recargar la página.

const lista = document.getElementById("lista");
const btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", agregarTarea);

function cargarTareas() {
  const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  lista.innerHTML = "";
  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    li.textContent = tarea;
    lista.appendChild(li);
  });
}

function agregarTarea() {
  const tarea = document.getElementById("tarea").value;
  if (tarea.trim() !== "") {
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    document.getElementById("tarea").value = "";
    cargarTareas();
  }
}

function eliminarTarea(index) {
  const tareas = JSON.parse(localStorage.getItem("tareas"));
  tareas.splice(index, 1);
  localStorage.setItem("tareas", JSON.stringify(tareas));
  cargarTareas();
}

cargarTareas();

// Ejercicio 3: Contador de visitas persistente
// Crea un contador que aumente cada vez que el usuario recargue la página y persista incluso si la pestaña se cierra.

let visitas = localStorage.getItem("visitas") || 0;
visitas++;
localStorage.setItem("visitas", visitas);
document.getElementById("contador").textContent = visitas;

// Ejercicio 4: Guardar y eliminar datos en localStorage
// Guarda un dato en localStorage, muéstralo en la consola y agrega un botón para eliminarlo.

const btnGuardar = document.getElementById("btnGuardar");
const btnEliminar = document.getElementById("btnEliminar");

btnGuardar.addEventListener("click", guardarDato);
btnEliminar.addEventListener("click", eliminarDato);

function guardarDato() {
  const dato = document.getElementById("dato").value;
  if (dato.trim() !== "") {
    localStorage.setItem("miDato", dato);
    console.log("Dato guardado:", dato);
  }
}

function eliminarDato() {
  localStorage.removeItem("miDato");
  console.log("Dato eliminado.");
}

// Ejercicio 5: Limpiar todo localStorage
// Agrega un botón que permita borrar completamente todos los datos almacenados en localStorage.

const btnEliminarTodo = document.getElementById("btnEliminarTodo");
btnEliminarTodo.addEventListener("click", () => {
  localStorage.clear();
  console.log("Todos los datos han sido eliminados.");
});
