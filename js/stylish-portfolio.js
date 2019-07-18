let i = 0;
let txt = 'Software Developer / Networking Enthusiast';
let speed = 80;

(function ($) {

  /* mobile timeline */
  let $timeline_block = $('.cd-timeline-block');

  //hide timeline blocks which are outside the viewport
  $timeline_block.each(function () {
    if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
      $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    }
  });
  /* mobile timeline */

  if ($("#rest_body").hasClass("hidden")) {
    $("#rest_body").removeClass("hidden");
  }

  if (!$("#loader").hasClass("hidden")) {
    $("#loader").addClass("hidden");
  }

  $("#rest_body .masthead.d-flex.animated").addClass("bounceInDown");

  typeWriter();

  // AOS
  AOS.init({
    duration: 700
  });

  /* timeline Slider */
  $('.timeline-nav').slick({
    slidesToShow: 12,
    slidesToScroll: 1,
    asNavFor: '.timeline-slider',
    centerMode: false,
    focusOnSelect: true,
    mobileFirst: true,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 8,
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      }
    ]
  });
  $('.timeline-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.timeline-nav',
    centerMode: true,
    cssEase: 'ease',
    edgeFriction: 0.5,
    mobileFirst: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true
        }
      }
    ]
  });
  /* timeline Slider */

  /* Particle JS */
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  /* Particle JS */

  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function () {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function (event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function (event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);

$("#showMore").click(function () {
  let content = $("#showMoreContent");
  let button = $("#showMore");
  if (content.hasClass("active")) {
    content.removeClass("active");
    setTimeout(function () {
      button.html('Show More &nbsp;&nbsp; <i class="fas fa-angle-down"></i>');
    }, 700);
  } else {
    content.addClass("active");
    setTimeout(function () {
      button.html('Hide &nbsp;&nbsp; <i class="fas fa-angle-up"></i>');
    }, 700);
  }
});

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeWriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

$(".service-icon.rounded-circle.mx-auto.mb-3").one('mouseover', function (e) {
  let bar = new ProgressBar.Circle(this, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2000,
    color: '#08E000',
    trailColor: '#eee',
    trailWidth: 4,
    svgStyle: null
  });

  bar.animate($(this).find("span.value").html());  // Number from 0.0 to 1.0
});
