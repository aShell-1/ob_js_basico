// Lista de compras
const listaCompra = ["Gaseosa", "Veduras", "Cebolla", "Ajo", "Detergente"]

listaCompra.push("Aceite de girasol")
console.log(listaCompra)

listaCompra.pop()
console.log(listaCompra)

// Lista de películas
const listaPeliculas = [
    {titulo: "Guerra de papás", directors: "Sean Anders, John Morris", fecha: new Date(2015,11,25)}, 
    {titulo: "Piratas de caribe", directors: "Gore Verbinski", fecha: new Date(2003,06,09)},
    {titulo: "Spiderman", directors: "Sam Raimi", fecha: (new Date(2002,04,03))}
]

const pelisEnero2010 = listaPeliculas.filter( p => p.fecha > new Date(2010,00,01) )
console.log(pelisEnero2010)

const listaDirectores = listaPeliculas.map( e => e.directors )
console.log(listaDirectores)

const listaTitulos = listaPeliculas.map( e => e.titulo )
console.log(listaTitulos)

const listaConcantenada = listaDirectores.concat(listaTitulos)
console.log(listaConcantenada)

const listaConcantenada2 = [...listaDirectores, ...listaTitulos]
console.log(listaConcantenada2)