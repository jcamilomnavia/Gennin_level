class Estudiante {
    constructor(id, nombre, email, nivel) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.nivel = nivel;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }
}

let estudianteUno = new Estudiante("1", "john", "john.florez@live.com", "roja");
let estudianteDos = new Estudiante("2", "john", "john.florez@live.com", "negra");

console.log(estudianteUno);