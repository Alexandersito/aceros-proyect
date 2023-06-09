var alturaBloque = $(".bloque").outerHeight(true);

$("#menu-icon").click(function () {
    $(".logo img").toggleClass("logo-anime-img");
    $(".logo h1").toggleClass("logo-anime-h1");

    var $contenedor = $(".header-menu");

    if ($contenedor.height() === 0) {
        $contenedor.height(alturaBloque);
        $(".bloque").slideDown();
    } else {
        $contenedor.height(0);
        $(".bloque").slideUp();
    }
});

//=======================================================================================================================================
//CARRUSEL
//=======================================================================================================================================
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000
    });
});


//=======================================================================================================================================
//EFECTO SCROLL AUTOMATICO
//=======================================================================================================================================
function scrollToSection(selector) {
    const section = document.querySelector(selector);
    let scrollAdjust = -10;

    if (section) {
        const header = document.querySelector('.header-fixed');
        const headerStyle = getComputedStyle(header);
        const headerHeight = parseInt(headerStyle.height, 10) + 15;
        scrollAdjust = -headerHeight || scrollAdjust;

        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: sectionTop + scrollAdjust, behavior: 'smooth' });
    }
}

//=======================================================================================================================================
//REDIRECCIONAR AL INDEX
//=======================================================================================================================================
function enviarIndex() {
    var url = 'index.html';
    window.location.href = url;
}

//=======================================================================================================================================
//EFECTO DE DESPLIEGUE DE SUBCATEGORIAS EN BASE AL DATO GET DE LA URL
//=======================================================================================================================================
function enviarInformacion(palabra) {
    // Codifica la palabra para asegurar que sea válida en una URL
    var palabraCodificada = encodeURIComponent(palabra);

    // Construye la URL con el parámetro de consulta
    var url = 'productos.html?dato=' + palabraCodificada;

    // Redirecciona a la página con la URL construida
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', function () {
    const categoryHeaders = document.querySelectorAll('.category-header');

    categoryHeaders.forEach((header, index) => {
        header.addEventListener('click', () => {
            const category = header.parentElement;
            const isActive = category.classList.contains('active');
            const subcategories = category.querySelector('.subcategories-productos');

            if (isActive) {
                category.classList.remove('active');
                subcategories.style.maxHeight = null;
            } else {
                categoryHeaders.forEach(header => {
                    header.parentElement.classList.remove('active');
                    header.parentElement.querySelector('.subcategories-productos').style.maxHeight = null;
                });

                category.classList.add('active');
                subcategories.style.maxHeight = subcategories.scrollHeight + 'px';
            }
        });

        // Obtén el valor del parámetro de consulta llamado 'dato'
        var parametro = new URLSearchParams(window.location.search).get('dato');

        // Comprueba si el parámetro coincide con el índice actual
        if (parametro && Number(parametro) === index + 1) {
            header.click(); // Simula un clic en la categoría correspondiente
        }
    });
});

//=======================================================================================================================================
//
//=======================================================================================================================================
// Obtén los elementos del DOM
const menuToggle = document.getElementById('menu-toggle');
const icon = menuToggle.firstElementChild;
const categorias = document.querySelector('.categorias');

// Agrega un controlador de eventos al botón
menuToggle.addEventListener('click', () => {
    icon.classList.toggle('ri-arrow-right-line');
    icon.classList.toggle('ri-arrow-left-line');
    if (icon.style.color === 'black') {
        icon.style.color = 'white';
    } else {
        icon.style.color = 'black';
    }
    categorias.classList.toggle('categorias-visible');
});

//=======================================================================================================================================
//BOTON SCROLL TOP
//=======================================================================================================================================
window.addEventListener('scroll', function () {
    var scrollButton = document.getElementById('scrollButton');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

document.getElementById('scrollButton').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//=======================================================================================================================================
//MOSTRAR / OCULTAR CARRITO
//=======================================================================================================================================
function mostrarCarrito() {
    // Obtenemos el elemento con la clase 'cart'
    var cart = $(".cart");

    // Removemos la clase 'oculto' del elemento cart
    cart.removeClass("oculto");
}

function ocultarCarrito() {
    // Agregamos el listener de click al botón con la clase 'close-cart-btn'
    // Obtenemos el elemento con la clase 'cart'
    var cart = $(".cart");
    // Agregamos la clase 'oculto' al elemento cart
    cart.addClass("oculto");
}











