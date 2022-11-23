// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
// - Un nuevo Set con los nombres de tu familia
// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

let mySet = new Set(["Carly", "Lia", "Axell"])
console.log(mySet)

mySet.add("Axell")
console.log(mySet)

mySet.add("Javascript")
console.log(mySet)