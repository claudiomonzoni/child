// nav
const menuIco = document.querySelector(".menu-toggle");
const menuFull = document.querySelector("#menuFull");
const menuUl = document.querySelector("#derUl");
const abierto = false;

let abrirMenuFull = () => {
  this.abierto = !this.abierto;
  menuFull.classList.remove("menuFullAbierto");
  menuFull.classList.remove("desanimaMenu");
  menuIco.classList.toggle("is-active");

  this.abierto
    ? menuFull.classList.toggle("menuFullAbierto")
    : menuFull.classList.toggle("desanimaMenu");
};

menuIco.addEventListener("click", abrirMenuFull);
menuUl.addEventListener("click", abrirMenuFull);

//ramdom
function randombg() {
  let random = Math.floor(Math.random() * 3) + 0;
  const portada = ["img/portada1.jpg", "img/portada2.jpg", "img/portada3.jpg"];
  document.getElementById("portada").src = portada[random];
}

randombg();

//jquery

$(document).ready(function () {

  $("#condiciones1").click(function (e) {
    e.preventDefault();
    $(".condiciones1").css("visibility", "visible");
  });
  $(".close").click(function (e) {
    e.preventDefault();
    $(".condiciones1").css("visibility", "hidden");
  });

  $("#condiciones").click(function (e) {
    e.preventDefault();
    $(".condiciones").css("visibility", "visible");
  });
  $(".close").click(function (e) {
    e.preventDefault();
    $(".condiciones").css("visibility", "hidden");
  });

  $(".slider").owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: false,
    video: true,
    videoWidth: 800, // Default false; Type: Boolean/Number
    videoHeight: 600, // Default false; Type: Boolean/Number
    dots: true,
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

  var sliderMusical = $("#sliderMusical");
  sliderMusical.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    items: 1,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
  });

  $("#adela").click(function (e) {
    e.preventDefault();
    sliderMusical.trigger("next.owl.carousel");
  });
});
