window.addEventListener("load", function () {
  let formulario = document.querySelector("form.form-1");

  formulario.addEventListener("submit", function (e) {
    let errores = [];

    let nombre = document.querySelector("input.name");

    if (nombre.value == "") {
      errores.push("Por favor añade tu nombre");
    } else if (nombre.value.length < 5) {
      errores.push("El campo de nombre debe tener al menos 5 caracteres");
    }

    let descripcion = document.querySelector("input.descripcion");

    if (descripcion.value == "") {
      errores.push("Por favor añade la descripción");
    } else if (nombre.value.length < 20) {
      errores.push("El campo de descripción debe tener al menos 20 caracteres");
    }

    let image = document.querySelector("input.file");
    let extensions = /(.jpeg |.jpeg |.png |.gif)$/i;

    if (image.value == "") {
      errores.push("Inserta una imagen");
    } else if (image.value != extensions) {
      errores.push(
        "No se admiten este tipo de archivos. Por favor carga un archivo con extensión .jpeg, .jpg, .png, .gif"
      );
    }

    if (errores.length > 0) {
      e.preventDefault();

      let ulErrores = document.querySelector("div.errores ul");
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
  });
});
