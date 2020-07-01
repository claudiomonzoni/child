// nav
const menuIco = document.querySelector(".menu-toggle");
const menuFull = document.querySelector("#menuFull");
const menuUl = document.querySelector("#derUl");
const donar = document.querySelector("#donar");
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
donar.addEventListener("click", abrirMenuFull);

//ramdom
// function randombg() {
//   let random = Math.floor(Math.random() * 3) + 0;
//   const portada = ["img/portada1.jpg", "img/portada2.jpg", "img/portada3.jpg"];
//   document.getElementById("portada").src = portada[random];
// }

// randombg();

//jquery

//lax

window.onload = function () {
  lax.setup(); // init

  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };
  window.requestAnimationFrame(updateLax);
};

//jquery

$(document).ready(function () {
  //video popup
  $(".videoNino").videoPopup();
  // ventanas de condiciones en los formularios
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
  // los sliders
  $(".slider").owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: false,
    video: true,
    //lazyLoad: true,
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

  var sliderInicio = $("#sliderInicio");
  sliderInicio.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    margin: 0,
    mouseDrag: false,
    touchDrag: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
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

  // contacto
  $("#contactoBtn").click(function (e) {
    var name = $("#nameC").val();
    var lastname = $("#lastnameC").val();
    var email = $("#emailC").val();
    var city = $("#cityC").val();
    var country = $("#countryC").val();
    var phone = $("#phoneC").val();
    var message = $("#messageC").val();

    $("#msj").empty(); // To empty previous error/success message.
    // Checking for blank fields.
    if (name == "" || lastname == "" || email == "") {
      alert("Please fill the fields of Name, Lastname or Email");
    } else {
      // Returns successful data submission message when the entered information is stored in database.

      $.post(
        "contact.php",
        {
          name,
          lastname,
          email,
          city,
          country,
          phone,
          message,
        },
        function (data) {
          $("#msj").append(data); // Append returned message to message paragraph.

          if (
            data ==
            "Thanks for contacting us, we will respond as soon as possible"
          ) {
            $("#formaContacto")[0].reset(); // To reset form fields on success.
          }
        }
      );
    }

    e.preventDefault();
  });

  //secuecia

  // $("#mundo").sequencer(
  //   {
  //     count: 128,
  //     path: "../img/sec",
  //     ext: "jpg",
  //   },
  //   function () {
  //     $("div#preload").hide();
  //   }
  // );

  // scroll magic
  var images = [
    // "../img/sec/example_imagesequence_01.png",
    // "../img/sec/example_imagesequence_02.png",
    // "../img/sec/example_imagesequence_03.png",
    // "../img/sec/example_imagesequence_04.png",
    // "../img/sec/example_imagesequence_05.png",
    // "../img/sec/example_imagesequence_06.png",
    // "../img/sec/example_imagesequence_07.png",
    "./img/sec/0.jpg",
    "./img/sec/1.jpg",
    "./img/sec/2.jpg",
    "./img/sec/3.jpg",
    "./img/sec/4.jpg",
    "./img/sec/5.jpg",
    "./img/sec/6.jpg",
    "./img/sec/7.jpg",
    "./img/sec/8.jpg",
    "./img/sec/9.jpg",
    "./img/sec/10.jpg",
    "./img/sec/11.jpg",
    "./img/sec/12.jpg",
    "./img/sec/13.jpg",
    "./img/sec/14.jpg",
    "./img/sec/15.jpg",
    "./img/sec/16.jpg",
    "./img/sec/17.jpg",
    "./img/sec/18.jpg",
    "./img/sec/19.jpg",
    "./img/sec/20.jpg",
    "./img/sec/21.jpg",
    "./img/sec/22.jpg",
    "./img/sec/23.jpg",
    "./img/sec/24.jpg",
    "./img/sec/25.jpg",
    "./img/sec/26.jpg",
  ];

  // TweenMax can tween any property of any object. We use this object to cycle through the array
  var obj = { curImg: 0 };

  // create tween
  var tween = TweenMax.to(obj, 0.5, {
    curImg: images.length - 1, // animate propery curImg to number of images
    roundProps: "curImg", // only integers so it can be used as an array index
    repeat: 3, // repeat 3 times
    immediateRender: true, // load first image automatically
    ease: Linear.easeNone, // show every image the same ammount of time
    onUpdate: function () {
      $("#myimg").attr("src", images[obj.curImg]); // set the image source
    },
  });

  // init controller
  var controller = new ScrollMagic.Controller();

  // build scene
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger",
    triggerHook: "onEnter",
    //offset: 1000,
    duration: 3500,
  })
    .setTween(tween)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});

//subir video

const formaVideo = document.getElementById("formuVideo");
const mensajeUI = document.querySelector("#msjVideo > p");
const submit = document.getElementById("submit");
const spin = document.querySelector(".lds-ring");

formaVideo.addEventListener("submit", (e) => {
  e.preventDefault();
  submit.disable = true;
  // mostramos carga
  spin.classList.add("mostrarSpin");
  mensajeUI.innerHTML = "Uploading file and data";
  const datos = new FormData(formaVideo);
  console.log("click");
  // //con fetch
  fetch("video.php", {
    method: "POST",
    body: datos,
  })
    .then((res) => res.json())
    //los datos son echo de php
    .then((data) => {
      console.log(data);
      mensajeUI.innerHTML = `Message: ${data}`;
      formaVideo.reset();
      submit.disable = false;
      spin.classList.remove("mostrarSpin");
    })
    .catch((error) => {
      console.log(`el error es: ${error.message}`);
    });
});
