function siempreTrue() {
    return true
}

async function esperaImprime() {
    setTimeout(() => {
        console.log("Hola soy una promesa")
    }, 5000);
}

esperaImprime()

function* generaPares() {
    let i = 0 // Se considera 0 como par
    while (true) {
        yield i 
        i += 2     
    }
}

let ar = generaPares()
console.log(ar.next())
console.log(ar.next())
console.log(ar.next())
console.log(ar.next())
console.log(ar.next())
