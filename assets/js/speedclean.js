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
  let cwPersona = $("input[name='cwPersona']").value;
  let cwEmail = $("input[name='cwEmail']").value;
  let cwCelular = $("input[name='cwCelular']").value;
  let cwServicio = $("input[name='cwServicio']").value;
  let cwDireccion = $("input[name='cwDireccion']").value;
  let cwFecha = $("input[name='cwFecha']").value;

  let formData = new FormData();

  formData.append("cwPersona", cwPersona);
  formData.append("cwEmail", cwEmail);
  formData.append("cwCelular", cwCelular);
  formData.append("cwServicio", cwServicio);
  formData.append("cwDireccion", cwDireccion);
  formData.append("cwFecha", cwFecha);

  const cwresponse = await fetch("../enviar.php", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
  });

  if ((cwresponse = "true")) {
    alert("mensaje enviado");
  } else {
    alert("mensaje no enviado");
  }
}

async function mensajeContacto(){
  let cw_nombres = $("input[name='cw_nombres']").value;
  let cw_apellidos = $("input[name='cw_apellidos']").value;
  let cw_correo = $("input[name='cw_correo']").value;
  let cw_telefono = $("input[name='cw_telefono']").value;
  let cw_mensaje = $("textarea[name='cw_mensaje']").value;

  let formData = new FormData();

  formData.append("cw_nombres", cw_nombres);
  formData.append("cw_apellidos", cw_apellidos);
  formData.append("cw_correo", cw_correo);
  formData.append("cw_telefono", cw_telefono);
  formData.append("cw_mensaje", cw_mensaje);

  const cwresponse = await fetch("../enviar.php", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
  });

  if ((cwresponse = "true")) {
    alert("mensaje enviado");
  } else {
    alert("mensaje no enviado");
  }
}