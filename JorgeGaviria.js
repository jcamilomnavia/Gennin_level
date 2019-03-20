class Estudiante {
    constructor(nombre, email, cedula, nivel) {
        this.nombre = nombre
        this.email = email
        this.cedula = cedula
        this.nivel = nivel
    }
}

function inicializar(){
    let estudiante1 = new Estudiante('nombre', 'jorge.gaviria@gmail.com', '1000409003', 'Pruebas')
    let estudiante2 = new Estudiante('nombre', 'jorge.gaviria@gmail.com', '1000409003', 'Pruebas')
}

inicializar()