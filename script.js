var myCarousel = document.querySelector("#carousel");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 4000,
  wrap: false,
});

$("#carousel1").carousel({
  interval: 5000,
  pause: "hover",
  wrap: true,
  keyboard: true,
});



//dissapearing text
$(function () {
  var text = $(".text");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
      text.removeClass("hidden");
    } else {
      text.addClass("hidden");
    }
  });
});

// form validation

$(document).ready(function () {
  $("#form").validate({

    rules: {
      "firstname": {
        required: true,
      },
      "lastname": {
        required: true,
      },
      "guest": {
        required: true,
      },
      "phone": {
        required: true,
      },
    },
    messages: {
      "firstname": {
        required: "Enter your name",
      },
      "lastname": {
        required: "Enter your last name",
      },
      "guest": {
        required: "Choose number of guests"
      },
      "phone": {
        required: "Enter your phone number"
      },

    },
  });
});







//scroll to content 
$().ready(function () {
  $("#nav-home").click(function (event) {
    // event.preventDefault();
    var goTop = $("#home").offset().top;
    $("html, body").scrollTop(goTop);
  });

  $("#nav-about").click(function (event) {
    // event.preventDefault();
    var goTop = $("#about").offset().top;
    $("html, body").animate({
        scrollTop: goTop,
      },
      500
    );
  });

  $("#nav-menu").click(function (event) {
    // event.preventDefault();
    var goTop = $("#menu").offset().top;
    $("html, body").animate({
        scrollTop: goTop,
      },
      500
    );
  });
});

$("#nav-reserve").click(function (event) {
  // event.preventDefault();
  var goTop = $("#reservation").offset().top;
  $("html, body").animate({
      scrollTop: goTop,
    },
    500
  );
});

$("#nav-contact").click(function (event) {
  // event.preventDefault();
  var goTop = $("#contact").offset().top;
  $("html, body").animate({
      scrollTop: goTop,
    },
    500
  );
});

const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-links");


  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};



$(document).ready(function () {
  navSlide();
});