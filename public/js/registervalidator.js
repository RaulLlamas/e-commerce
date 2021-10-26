window.addEventListener("load", function () {
  let formulario = document.querySelector("form.form-1");

  formulario.addEventListener("submit", function (e) {
    let errores = [];

    let nombre = document.querySelector("input.name");

    if (nombre.value == "") {
      errores.push("Por favor añade tu nombre");
    } else if (nombre.value.length < 2) {
      errores.push("El campo de nombre debe tener al menos 3 caracteres");
    }

    let correo = document.querySelector("input.email");

    if (correo.value == "") {
      errores.push("Por favor añade un correo valido");
    }

    let fecha = document.querySelector("input.fecha");

    if (fecha.value == "") {
      errores.push("Inserte la fecha de cumpleaños");
    }

    let password = document.querySelector("input.password");

    if (password.value == "") {
      errores.push("Por favor inserta una contraseña");
    } else if (password.value.length < 8) {
      errores.push(
        "El campo de contraseña debe de contener al menos 8 caracteres"
      );
    }

    let password2 = document.querySelector("input.password2");

    if (password2.value != password) {
      errores.push("La contraseña no coincide");
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

    let telefono = document.querySelector("input.tel");

    if (telefono.value == "") {
      errores.push("Agrega tu número de télefono");
    } else if (telefono.value.length > 10) {
      errores.push(" Por favor ingresa un número de télefono válido");
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
