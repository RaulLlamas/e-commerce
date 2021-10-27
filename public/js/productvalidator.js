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

    if (errores.length > 0) {
      e.preventDefault();

      let ulErrores = document.querySelector("div.errores ul");
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
  });
});
