function aceptarCookies() {

    document.getElementById('cookie-banner').style.display = 'none';

    localStorage.setItem('cookiesAceptadas', 'true');
}

function aceptarCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    localStorage.setItem('cookiesAceptadas', 'true');
    alert('¡Gracias por aceptar las Cookies mamapicos!');
}


window.onload = function () {
    var cookiesAceptadas = localStorage.getItem('cookiesAceptadas');
    if (!cookiesAceptadas) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
}