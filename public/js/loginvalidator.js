window.addEventListener("load", function () {
  let formulario = document.querySelector("form.form");

  formulario.addEventListener("submit", function (e) {
    let errores = [];

    let correo = document.querySelector("input.email");

    if (correo.value == "") {
      errores.push("Por favor añade un correo valido");
    }

    let passwordbd = document.querySelector("input.password");

    if (passwordbd.value == "") {
      errores.push("Por favor inserta la contraseña");
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
