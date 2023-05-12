document.getElementById('menu-icon').addEventListener('click', function () {
    var headerMenu = document.getElementById('header-menu');

    if (headerMenu.classList.contains('show')) {
        headerMenu.style.opacity = '0';
        headerMenu.style.transform = 'translateY(-100%)';

        setTimeout(function () {
            headerMenu.classList.remove('show');
        }, 300); // Tiempo de espera para que se complete la animación (en milisegundos)
    } else {
        headerMenu.classList.add('show');

        setTimeout(function () {
            headerMenu.style.opacity = '1';
            headerMenu.style.transform = 'translateY(0)';
        }, 0); // Tiempo de espera antes de aplicar la animación (en milisegundos)
    }
});
