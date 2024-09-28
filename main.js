//OBTENER LOS ID DE LAS ETIQUETAS DE MI INDEX.HTML
const formulario_tarea = document.getElementById("tareaFormulario");
const appUl = document.getElementById("appUl");
const app = document.getElementById("app");
const mensaje_error = document.createElement("p");

formulario_tarea.addEventListener("submit", function (e) {
  //EVITAR QUE SE RECARGE LA PAGINA
  e.preventDefault();

  //ID GENERAR
  const id = Math.floor(Math.random() * 999999);

  //CREACION DE ETIQUETAS
  const li_tarea = document.createElement("li");
  const tarea_parrafo = document.createElement("p");
  const tarea_texto = document.createElement("input");
  const btn_contenedor = document.createElement("div");

  //OBTENER EL NOMBRE DE LA TARA
  const tarea_nombre = document.getElementById("input_tareas").value;

  //BOTONES
  const boton_tarea_eliminar = document.createElement("button");
  const boton_tarea_estado = document.createElement("button");
  const boton_tarea_editar = document.createElement("button");

  //VALIDACION
  if (tarea_nombre.length > 5) {
    //Etiqueta <li></li>
    appUl.appendChild(li_tarea);

    //Nombre de la tarea
    tarea_parrafo.textContent = tarea_nombre;

    //Li tarea
    li_tarea.appendChild(tarea_parrafo);
    li_tarea.id = id;

    //Reset input
    document.getElementById("input_tareas").value = "";

    //boton eliminar
    boton_tarea_eliminar.textContent = "Borrar";
    boton_tarea_eliminar.id = "eliminar";
    boton_tarea_eliminar.disabled = true;

    //boton estado
    boton_tarea_estado.textContent = "Pendiente";
    boton_tarea_estado.id = "estado";

    //boton editar & input
    boton_tarea_editar.textContent = "editar";
    boton_tarea_editar.id = "editar";
    tarea_texto.type = "text";
    tarea_texto.style.visibility = "hidden";

    //contenedores

    //Agregamos el boton el li
    li_tarea.appendChild(boton_tarea_estado);
    li_tarea.appendChild(boton_tarea_eliminar);
    li_tarea.appendChild(boton_tarea_editar);
    li_tarea.appendChild(tarea_texto);

    mensaje_error.textContent = "";
  } else {
    //Creamos un p de error
    mensaje_error.textContent = "la tarea tiene que tener mas de 5 caracteres";
    formulario_tarea.appendChild(mensaje_error);
  }
});

app.addEventListener("click", function (e) {
  const dom_element = e.target;
  const opt_next = e.target.nextSibling;
  const btn_id = e.target.parentNode;

  //Cambiar el estado del boton
  if (dom_element.id === "estado" || dom_element.id == "terminado") {
    dom_element.textContent =
      dom_element.textContent === "Pendiente" ? "Terminado" : "Pendiente";
    dom_element.id = dom_element.id === "estado" ? "terminado" : "estado";
    opt_next.disabled = opt_next.disabled == true ? false : true;
  }

  //Eliminar la tarea
  if (dom_element.id === "eliminar") {
    btn_id.remove();
  }

  //Editar la tarea
  if (dom_element.id === "editar") {
    dom_element.textContent =
      dom_element.textContent === "editar" ? "guardar" : "editar";
    opt_next.style.visibility =
      opt_next.style.visibility === "hidden" ? "visible" : "hidden";
    if (opt_next.value.length >= 5) {
      btn_id.firstChild.textContent = opt_next.value;
    }
  }
});
