
// Aplicando localStorage para que se almacenen los datos seleccionados
const productosEnElStorage = JSON.parse(localStorage.getItem('carrito'));
const carrito = productosEnElStorage ?? [];

//Cargamos nuestros cursos a vender
const cursos = [
    {
        id: 1,
        nombre: 'Planeamiento',
        nivel: { basico: 'principiantes', intermedio: 'experiencia previa', avanzado: 'requieren resolver ejercicios' },
        precio: { basico: 40, intermedio: 80, avanzado: 120 },
        estado: 'No disponible',
        descripción: 'Curso especializado en la planificación de operaciones mineras subterraneas',
    },

    {
        id: 2,
        nombre: 'Operaciones',
        nivel: { basico: 'principiantes', intermedio: 'experiencia previa', avanzado: 'requieren resolver ejercicios' },
        precio: { basico: 45, intermedio: 85, avanzado: 125 },
        estado: 'Disponible',
        descripción: 'Curso especializado en operaciones mineras, se desarrollan todas las operaciones unitarias',
    },

    {
        id: 3,
        nombre: 'Seguridad',
        nivel: { basico: 'principiantes', intermedio: 'experiencia previa', avanzado: 'requieren resolver ejercicios' },
        precio: { basico: 35, intermedio: 75, avanzado: 115 },
        estado: 'No disponible',
        descripción: 'Curso especializado en gestión d ela seguridad',
    },

    {
        id: 4,
        nombre: 'Costos',
        nivel: { basico: 'principiantes', intermedio: 'experiencia previa', avanzado: 'requieren resolver ejercicios' },
        precio: { basico: 40, intermedio: 85, avanzado: 125 },
        estado: 'Disponible',
        descripción: 'Curso especializado en costos ABC',
    },

    {
        id: 5,
        nombre: 'Contabilidad',
        nivel: { basico: 'principiantes', intermedio: 'experiencia previa', avanzado: 'requieren resolver ejercicios' },
        precio: { basico: 20, intermedio: 40, avanzado: 60 },
        estado: 'Disponible',
        descripción: 'Curso especializado en contabilidad de principio a fin',
    },

    {
        id: 6,
        nombre: 'Finanzas',
        nivel: { basico: 'principiantes', intermedio: 'experiencia previa', avanzado: 'requieren resolver ejercicios' },
        precio: { basico: 20, intermedio: 40, avanzado: 60 },
        estado: 'No disponible',
        descripción: 'Curso especializado en finanzas para evaluación de proyectos',
    },

    {
        id: 7,
        nombre: 'Geomecánica',
        nivel: { basico: 'principiantes', intermedio: 'experiencia previa', avanzado: 'requieren resolver ejercicios' },
        precio: { basico: 20, intermedio: 40, avanzado: 60 },
        estado: 'Disponible',
        descripción: 'Curso especializado en mecánica de rocas ',
    },

    {
        id: 8,
        nombre: 'Geología',
        nivel: { basico: 'principiantes', intermedio: 'experiencia previa', avanzado: 'requieren resolver ejercicios' },
        precio: { basico: 20, intermedio: 40, avanzado: 60 },
        estado: 'Disponible',
        descripción: 'Curso especializado en geología de operaciones mineras',
    },
]


// Agrego al contador el número de cursos a comprar
function agregarAlCarrito(id) {
    let found = cursos[id].estado;


    //Aplicamos desestructuración extraer la descripción de  los cursos
    const [curso1, curso2, curso3, curso4, curso5, curso6, curso7, curso8] = cursos;
    if (id === 0) {
        document.getElementById('lista').innerHTML = curso1.descripción;
        

    } else {
        if (id === 1) {
            document.getElementById('lista').innerHTML = curso2.descripción;
        } else {
            if (id === 2) {
                document.getElementById('lista').innerHTML = curso3.descripción;
            } else {
                if (id === 3) {
                    document.getElementById('lista').innerHTML = curso4.descripción;
                } else {
                    if (id === 4) {
                        document.getElementById('lista').innerHTML = curso5.descripción;
                    } else {
                        if (id === 5) {
                            document.getElementById('lista').innerHTML = curso6.descripción;
                        } else {
                            if (id === 6) {
                                document.getElementById('lista').innerHTML = curso7.descripción;
                            } else {
                                if (id === 7) {
                                    document.getElementById('lista').innerHTML = curso8.descripción;
                                } else {

                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // `curso${id}`.estado

    if (found === 'Disponible') {

        let mensaje = document.getElementById("btn-mensaje");
        mensaje.innerText = "Curso Disponible"

        const resultado = cursos.find((curso) => curso.id === id);
        carrito.push(resultado);


        document.getElementById('carrito-elementos').innerHTML = carrito.length;
        localStorage.setItem('carrito', JSON.stringify(carrito));





        //Si el curso no se encuentra disponible se carga en el html el mensaje "Curso no disponible"

    } else {
        let mensaje = document.getElementById("btn-mensaje");
        mensaje.innerText = "Curso no disponible"
    }

}

//Elimino el último curso que deseaba comprar
function borrar() {
    carrito.pop();
    document.getElementById('carrito-elementos').innerHTML = carrito.length;

    localStorage.setItem('carrito', JSON.stringify(carrito))

    // Incorporando librería tostify

    Toastify({
        text: "Eliminaste un curso",
        duration: 3000,
        destination: "recomendaciones.html",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();

}

let boton = document.getElementById("borra");
boton.addEventListener("click", avisar);

//Mensaje sobre la eliminación del último curso seleccionado
function avisar() {

    carrito.length > 1 ? Swal.fire({
        title: 'Atención!',
        text: 'Por cada 05 cursos comprados, uno te sale gratis',
        imageUrl: '/img/Cursos-alerta-sweet-alert.jpg',
        icon: 'success',
        confirmButtonText: 'Salir'
    }) : Swal.fire({
        title: 'Atención!',
        text: 'Lleva 02 cursos y tendrás un descuento del 10%',
        imageUrl: '/img/Cursos-alerta-sweet-alert.jpg',
        icon: 'success',
        confirmButtonText: 'Salir'
    })

}



