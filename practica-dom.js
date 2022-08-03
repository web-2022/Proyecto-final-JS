// //Ejercicio 01
// let elemento;

// elemento = document;
// elemento = document.all;
// // elemento = document.head;
// // elemento = document.body;
// // elemento = document.domain
// // elemento = document.images


// console.log(elemento);

// // Ejercicio 02
// const header = document.getElementsByClassName('navbar');
// console.log(header);

// // Ejercicio 03
// const button = document.getElementById('vacearCarrito');
// console.log(button)

// //Ejercicio 04--Queryselector

// const card = document.querySelector('.aaaa');
// console.log(card);

// const card1 = document.getElementsByClassName('aaaa');
// console.log(card1);

// //Seleccionando la segunda, tercera, cuarta  clase

// const segundaClase = document.querySelector('.card-group .card .card-body .card11');
// console.log(segundaClase);

// const segundaClase2 = document.querySelector('.card11');
// console.log(segundaClase2);

// // Cambiando el texto

// const curso = document.querySelector('.card1');
// curso.innerHTML = 'Planeamiento avanzado3';


// console.log(curso);

// traversing the DOM
const nav = document.querySelector('.card-group');
console.log(nav.children);
