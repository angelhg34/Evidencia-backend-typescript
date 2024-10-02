"use strict";
//INTEGRANTES: MIGUEL ORTIZ - NICOLAS FANDIÑO - 2902093
let nombre = "Mikis";
nombre = "Fandiñi";
let numero = 19;
const e1 = {
    firstName: "Carlos",
    lastName: "Rodriguez",
    age: 23,
    adress: {
        ciudad: "Bogota",
        pais: "Colombia",
        ad: "cra 80#45"
    }
};
const e2 = {
    firstName: "Miguel",
    lastName: "Ortiz",
    age: 17,
    adress: {
        ciudad: "Bogota",
        pais: "Colombia",
        ad: "cra 845"
    }
};
// ARREGLOS
let estudiantes = [];
// Agregar estudiantes
const agregarEstudiante = (estudiante) => {
    estudiantes.push(estudiante);
};
// Actualizar estudiante por firstName
const actualizarPorNombre = (nombre, nuevoDato) => {
    const estudiante = estudiantes.find(e => e.firstName === nombre);
    if (estudiante) {
        Object.assign(estudiante, nuevoDato);
    }
    else {
        console.error("Estudiante no encontrado");
    }
};
// Eliminar estudiante por índice
const eliminarEstudiante = (indice) => {
    if (indice >= 0 && indice < estudiantes.length) {
        estudiantes.splice(indice, 1);
    }
    else {
        console.error("Índice fuera de rango");
    }
};
// Agregamos estudiantes
agregarEstudiante({
    firstName: "Carlos",
    lastName: "Ortega"
});
agregarEstudiante({
    firstName: "Miguel",
    lastName: "Ortiz"
});
// Actualizar estudiante por nombre
actualizarPorNombre("Carlos", { lastName: "Lopez" });
// Imprimir el arreglo de estudiantes
console.log(estudiantes);
