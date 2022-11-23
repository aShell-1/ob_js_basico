// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
// - Una variable que obtenga tu edad a partir del objeto anterior
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const miData = {
    nombre: "Axell",
    apellido: "Gutierrez",
    edad: 25,
    altura: 1.63,
    eresDesarrollador: true
}

const miEdad = miData.edad
console.log(miEdad)

const amigos = [
    {
        nombre: "Diego",
        apellido: "Lucario",
        edad: 27,
        altura: 1.75,
        eresDesarrollador: false
    },
    {
        nombre: "José",
        apellido: "Huallpa",
        edad: 26,
        altura: 1.70,
        eresDesarrollador: false
    }
]

const personas = [miData, ...amigos]
console.log(personas)

console.log(personas.sort((a,b) => a.edad - b.edad))