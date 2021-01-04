$("#owl-subservice").owlCarousel({
  loop: true,
  dots: false,
  nav: true,
  items: 3,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
$("#owl-servicios").owlCarousel({
  loop: true,
  dots: false,
  nav: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$("#owl-contacto").owlCarousel({
  loop: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});

function cwGetParams(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$("#link-contacto").click(function () {
  $("html, body").animate({ scrollTop: $("#CONTACTO").offset().top }, 1500);
});

$("#link-nosotros").click(function () {
  $("html, body").animate({ scrollTop: $("#NOSOTROS").offset().top }, 1500);
});

$("#link-servicios").click(function () {
  $("html, body").animate({ scrollTop: $("#SERVICIOS").offset().top }, 800);
});

$("#cw-ini").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 1000);
});

let CW_SECTION = cwGetParams("section");
switch (CW_SECTION) {
  case "NOSOTROS":
    $("#link-nosotros").trigger("click");
    break;
  case "SERVICIOS":
    $("#link-servicios").trigger("click");
    break;
  case "CONTACTO":
    $("#link-contacto").trigger("click");
    break;

  default:
    break;
}

async function mensajeServicios() {
  let cwPersona = $("input[name='cwPersona']").val();
  let cwEmail = $("input[name='cwEmail']").val();
  let cwCelular = $("input[name='cwCelular']").val();
  let cwServicio = $("input[name='cwServicio']").val();
  let cwDireccion = $("input[name='cwDireccion']").val();
  let cwFecha = $("input[name='cwFecha']").val();

  let formData = new FormData();

  formData.append("cwPersona", cwPersona);
  formData.append("cwEmail", cwEmail);
  formData.append("cwCelular", cwCelular);
  formData.append("cwServicio", cwServicio);
  formData.append("cwDireccion", cwDireccion);
  formData.append("cwFecha", cwFecha);

  await fetch("https://speedcleanperu.com/enviar.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((response) => {
      if (response === "true") {
        console.log("mensaje enviado :", response);
        clearInputServicios()
        $('button[name="cw_service_submit"]').attr("disabled", false);
        alert("Mensaje enviado correctamente");
      } else {
        $('button[name="cw_service_submit"]').attr("disabled", false);
        console.log("mensaje no enviado :", response);
      }
    });
}

$("#cw-modal-service").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget);
  var recipient = button.data("whatever");
  $('[name="cwServicio"]').val(recipient);
});

async function mensajeContacto() {
  let cw_nombres = $("input[name='cw_nombres']").val();
  let cw_apellidos = $("input[name='cw_apellidos']").val();
  let cw_correo = $("input[name='cw_correo']").val();
  let cw_telefono = $("input[name='cw_telefono']").val();
  let cw_mensaje = $("textarea[name='cw_mensaje']").val();

  let formData = new FormData();

  formData.append("cw_nombres", cw_nombres);
  formData.append("cw_apellidos", cw_apellidos);
  formData.append("cw_correo", cw_correo);
  formData.append("cw_telefono", cw_telefono);
  formData.append("cw_mensaje", cw_mensaje);

  console.log(formData);
  console.log(cw_mensaje);

  await fetch("https://speedcleanperu.com/enviarContacto.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((response) => {
      if (response === "true") {
        console.log("mensaje enviado :", response);
        clearInputContacto();
        $('button[name="cw_contact_submit"]').attr("disabled", false);
        alert("Mensaje enviado correctamente");
      } else {
        console.log("mensaje no enviado :", response);
      }
    });
}

const validText = (texto) => {
  const re = /^[a-zA-Z0-9\s]*$/;
  return re.test(texto);
};
const validEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
const validNumb = (numero) => {
  const re = /^([0-9])*$/;
  return re.test(numero);
};
const formValidateInputText = (input) => {
  if (validText(input.value)) {
    $('[name="' + input.name + '"]').removeClass("bg-dark");
    $('[name="' + input.name + '"]').removeClass("is-invalid");
    $('[name="' + input.name + '"]').removeClass("text-white");
  } else {
    $('[name="' + input.name + '"]').addClass("bg-dark");
    $('[name="' + input.name + '"]').addClass("is-invalid");
    $('[name="' + input.name + '"]').addClass("text-white");
  }
};
const formValidateInputCorreo = (input) => {
  if (validEmail(input.value)) {
    $('[name="' + input.name + '"]').removeClass("bg-dark");
    $('[name="' + input.name + '"]').removeClass("is-invalid");
    $('[name="' + input.name + '"]').removeClass("text-white");
  } else {
    $('[name="' + input.name + '"]').addClass("bg-dark");
    $('[name="' + input.name + '"]').addClass("is-invalid");
    $('[name="' + input.name + '"]').addClass("text-white");
  }
};
const formValidateInputNumber = (input) => {
  if (validNumb(input.value)) {
    $('[name="' + input.name + '"]').removeClass("bg-dark");
    $('[name="' + input.name + '"]').removeClass("is-invalid");
    $('[name="' + input.name + '"]').removeClass("text-white");
  } else {
    $('[name="' + input.name + '"]').addClass("bg-dark");
    $('[name="' + input.name + '"]').addClass("is-invalid");
    $('[name="' + input.name + '"]').addClass("text-white");
  }
};

$('button[name="cw_contact_submit"]').click(function () {
  $('button[name="cw_contact_submit"]').attr("disabled", true);
  let cw_nombres = validText($("input[name='cw_nombres']").val());
  let cw_apellidos = validText($("input[name='cw_apellidos']").val());
  let cw_correo = validEmail($("input[name='cw_correo']").val());
  let cw_telefono = validNumb($("input[name='cw_telefono']").val());
  let cw_mensaje = validText($("textarea[name='cw_mensaje']").val());

  if (cw_nombres && cw_apellidos && cw_mensaje && cw_correo && cw_telefono) {
    console.log("enviar mensaje");
    mensajeContacto();
  } else {
    console.log(":c");
    $('button[name="cw_contact_submit"]').attr("disabled", false);
  }
});

$('button[name="cw_service_submit"]').click(function () {
  $('button[name="cw_service_submit"]').attr("disabled", true);
  let cwPersona = validText($("input[name='cwPersona']").val());
  let cwEmail = validEmail($("input[name='cwEmail']").val());
  let cwCelular = validNumb($("input[name='cwCelular']").val());
  let cwServicio = $("input[name='cwServicio']").val();
  let cwDireccion = $("input[name='cwDireccion']").val();
  let cwFecha = $("input[name='cwFecha']").val();

  if (
    cwPersona &&
    cwEmail &&
    cwCelular &&
    cwServicio != "" &&
    cwDireccion != "" &&
    (cwFecha != "" && cwFecha != undefined)
  ) {
    console.log("enviar mensaje", cwFecha);
    mensajeServicios();
  } else {
    console.log(":c", cwFecha);
    $('button[name="cw_service_submit"]').attr("disabled", false);
  }
});

function clearInputContacto() {
  $("input[name='cw_nombres']").val("");
  $("input[name='cw_apellidos']").val("");
  $("input[name='cw_correo']").val("");
  $("input[name='cw_telefono']").val("");
  $("textarea[name='cw_mensaje']").val("");
}
function clearInputServicios() {
  $("input[name='cwPersona']").val("");
  $("input[name='cwEmail']").val("");
  $("input[name='cwCelular']").val("");
  $("input[name='cwServicio']").val("");
  $("input[name='cwDireccion']").val("");
  $("input[name='cwFecha']").val("");
}