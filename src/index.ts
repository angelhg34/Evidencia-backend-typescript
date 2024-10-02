//INTEGRANTES: MIGUEL ORTIZ - NICOLAS FANDIÑO - 2902093
let nombre: string = "Mikis";
nombre = "Fandiñi";

let numero: number = 19;

type Address = {
    ciudad?: string;
    pais?: string;
    ad: string;
}

type Estudiante = {
    firstName: string;
    lastName: string;
    age?: number | string;
    adress?: Address;
}

const e1: Estudiante = {
    firstName: "Carlos",
    lastName: "Rodriguez",
    age: 23,
    adress: {
        ciudad: "Bogota",
        pais: "Colombia",
        ad: "cra 80#45"
    }
}

const e2: Estudiante = {
    firstName: "Miguel",
    lastName: "Ortiz",
    age: 17,
    adress: {
        ciudad: "Bogota",
        pais: "Colombia",
        ad: "cra 845"
    }
}

// ARREGLOS

let estudiantes: Estudiante[] = [];

// Agregar estudiantes
const agregarEstudiante = (estudiante: Estudiante) => {
    estudiantes.push(estudiante);
}

// Actualizar estudiante por firstName
const actualizarPorNombre = (nombre: string, nuevoDato: Partial<Estudiante>) => {
    const estudiante = estudiantes.find(e => e.firstName === nombre);
    if (estudiante) {
        Object.assign(estudiante, nuevoDato);
    } else {
        console.error("Estudiante no encontrado");
    }
}

// Eliminar estudiante por índice
const eliminarEstudiante = (indice: number) => {
    if (indice >= 0 && indice < estudiantes.length) {
        estudiantes.splice(indice, 1);
    } else {
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
actualizarPorNombre("Carlos", {lastName: "Lopez" });

// Imprimir el arreglo de estudiantes
console.log(estudiantes);
