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