document.getElementById('navbar-toggler').addEventListener('click', function() {
    document.getElementById('offcanvasNavbar').classList.add('show');
});

document.getElementById('offcanvasClose').addEventListener('click', function() {
    document.getElementById('offcanvasNavbar').classList.remove('show');
});

// Close sidebar when clicking outside of it
document.addEventListener('click', function(event) {
    const offcanvas = document.getElementById('offcanvasNavbar');
    if (!offcanvas.contains(event.target) && !event.target.matches('#navbar-toggler, #navbar-toggler *')) {
        offcanvas.classList.remove('show');
    }
});

// sidebar

function openNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("mySidebar_destop").style.width = "350px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("mySidebar_destop").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("main_destop").style.marginLeft= "0";
  }



//   CARD SLICK 

$(document).ready(function () {
    $('.card-slider .row').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


// testimunial
$(document).ready(function () {
    $('.card-testimonial .row').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
  