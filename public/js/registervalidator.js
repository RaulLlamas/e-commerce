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

    document.getElementById("file").addEventListener("change", validateFile);

    function validateFile() {
      const allowedExtensions = ["jpg", "jpeg", "png"],
        sizeLimit = 1000000;

      const { name: fileName, size: fileSize } = this.files[0];

      const fileExtension = fileName.split(".").pop();

      if (!allowedExtensions.includes(fileExtension)) {
        alert("please upload only jpg, jpeg and png files");
        this.value = null;
      } else if (fileSize > sizeLimit) {
        alert("file size too large");
        this.value = null;
      }
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
      ulErrores.innerHTML="<li></li>"
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
  });
});
