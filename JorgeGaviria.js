class Estudiante {
    constructor(nombre, email, cedula, nivel) {
        this.nombre = nombre;
        this.email = email;
        this.cedula = cedula;
        this.nivel = nivel

    }

}

function inicializar(){
    var estudiante1 = new Estudiante();
    estudiante1.cedula = "nombre"
    estudiante1.email = "jorge.gaviria@gmail.com"
    estudiante1.cedula = 1000409003;
    estudiante1.nivel = "Pruebas"

    var estudiante2 = new Estudiante();
    estudiante2.cedula = "nombre"
    estudiante2.email = "jorge.gaviria@gmail.com"
    estudiante2.cedula = 1000409003;
    estudiante2.nivel = "Pruebas"
}
