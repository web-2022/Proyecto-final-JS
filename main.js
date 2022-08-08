
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

//Eliminó el último curso que deseaba comprar
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




//-------------Carrito-------------//

// Variables
const carritoo = document.querySelector('#carritoo');
const listaCursos = document.querySelector('#Lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 

let articulosCarrito = [];

cargarEvenListener();
// Se agrega el curso
function cargarEvenListener() {
    listaCursos.addEventListener('click', agregaCurso);

    // Elimina cursos de carrito
    carritoo.addEventListener('click', eliminarCurso);

    //Vacear carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];

        limpiarHTML();
        console.log('vaceando carrito...');
    });

}


// Funciones
function agregaCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        // console.log(cursoSeleccionado);
        leerDatosCurso(cursoSeleccionado);

    }
}


// Lee el html y extrae informacion del curso
function leerDatosCurso(curso) {
    // console.log(curso)
    // Crea un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h5').textContent,
        info: curso.querySelector('p').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('button').getAttribute('data-id'),
        cantidad: 1,

    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    // console.log(existe);
    if (existe) {
        // Actualizamos cantidad
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++; //retorna el objeto actualizado en cantidad
                return curso;
            } else {
                return curso; // retorna el objeto con los cursos no duplicados
            }
        })


    } else {

        //Agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }



    // console.log(articulosCarrito);

    carritoHTML();

}

//Elimina un curso
function eliminarCurso (e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar-curso')) {    
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId)
        console.log(articulosCarrito);

        carritoHTML ();
    }
    
}


//Mostrar el carrito de compras en el HTML
function carritoHTML() {
    //Limpiar el HTML
    limpiarHTML();

    //Recorre el HTML y genera el HTML


    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
               <td>  
                    <img src="${curso.imagen}" width=100>
               </td>
               <td>${curso.titulo}</td>
               <td>${curso.precio}</td>
               <td>${curso.cantidad} </td>
               <td>
                    <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
               </td>
          `;
        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);

        // console.log(querySelector('.tbody'));
    })


   

}


 //Elimina los cursos del tbody
 function limpiarHTML() {
    //Forma lenta
    // contenedorCarrito.innerHTML = "";
    //optimizando la limpieza del HTML
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}
