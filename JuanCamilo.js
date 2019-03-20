class Estudiante {
    constructor(nombre, email, id, nivel) {
        this.nombre = nombre;
        this.email = email;
        this.id = id;
        this.nivel = nivel;
    }
}

let estudiante1 = new Estudiante("juanca", "jc@email.com", 123456, "gennin");
let estudiante2 = new Estudiante("andres", "ac@email.com", 654321, "gennin2");

console.log(estudiante1.nombre);
