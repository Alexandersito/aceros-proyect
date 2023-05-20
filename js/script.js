$(document).ready(function () {
    var alturaBloque = $(".bloque").outerHeight(true);

    $("#menu-icon").click(function () {
        $("img").toggleClass("logo-anime-img");
        $("h1").toggleClass("logo-anime-h1");

        var $contenedor = $(".header-menu");

        if ($contenedor.height() === 0) {
            $contenedor.height(alturaBloque);
            $(".bloque").slideDown();
        } else {
            $contenedor.height(0);
            $(".bloque").slideUp();
        }
    });
});

//=======================================================================================================================================
//CARRUSEL
//=======================================================================================================================================
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true, // Activar el autoplay
        autoplayTimeout: 2000, // Intervalo de 2 segundos
    });
});

//=======================================================================================================================================
//EFECTO SCROLL AUTOMATICO
//=======================================================================================================================================
function scrollToSection(selector) {
    const section = document.querySelector(selector);
    const scrollAdjust = -10;

    if (section) {
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: sectionTop + scrollAdjust, behavior: 'smooth' });
    }
}



