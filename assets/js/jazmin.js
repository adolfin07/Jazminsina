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

function loadContent(url) {
    const contentElement = document.getElementById('content');
    contentElement.classList.add('fade-out');


    fetch(url)
        .then(response => response.text())
        .then(html => {

            contentElement.innerHTML = html;

            setTimeout(() => {
                contentElement.classList.remove('fade-out');
            }, 100);
        })
        .catch(error => console.error('Error al cargar el contenido:', error));
}