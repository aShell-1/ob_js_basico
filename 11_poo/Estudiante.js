class Estudiante {
  #nombre
  #asignaturas = ['JS','HTML','CSS']

  constructor(name){
    this.#nombre = name
  }

  obtenDatos() {
    const obj = {
      nombre: this.#nombre,
      asignaturas: this.#asignaturas
    }

    return obj
  }
}

const estudiante1 = new Estudiante("Ryumi")
console.log(estudiante1.obtenDatos())