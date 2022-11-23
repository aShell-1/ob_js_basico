// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// - La fecha de hoy
// - La fecha de tu nacimiento
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
// - Una variable que contenga el día de tu nacimiento
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const hoy = new Date()
console.log(hoy)

const nac = new Date(1997,09-01,08)
console.log(nac)

const esMayor = ( hoy > nac )
console.log(esMayor)

const nacDay = nac.getDate()
console.log(nacDay)
const nacMonth = ( nac.getMonth() + 1 )
console.log(nacMonth)
const nacYear = nac.getFullYear()
console.log(nacYear)