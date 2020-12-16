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
  $("html, body").animate({ scrollTop: $("#SERVICIOS").offset().top }, 1500);
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
