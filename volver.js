// Aplicando la libreria tostify para que salga un mensaje y volver a seguir comprando
function volver() {
    Toastify({
        text: "Seguir comprando",
        duration: 3000,
        destination: "index.html",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, rgb(0 64 144), 0 32 55)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

// considero 04 segundospara que salga el mensaje
setTimeout(volver, 1000);
setTimeout(volver, 5000);
setTimeout(volver, 10000);
setTimeout(volver, 15000);
setTimeout(volver, 20000);

function regresar(){
   location.href="./index.html"
}