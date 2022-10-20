let alturacm = 163
console.log(alturacm, typeof(alturacm))

let alturam = parseFloat((alturacm*0.01).toFixed(2))
console.log(alturam, typeof(alturam))

let pesokg = 68.85
console.log(pesokg, typeof(pesokg))

let alturamru = Math.round(alturam)
console.log(alturamru, typeof(alturamru))

let pesokgrd = Math.floor(pesokg)
console.log(pesokgrd, typeof(pesokgrd))

let latrue = (Number.MAX_VALUE + 1 == Number.MAX_VALUE)
console.log(latrue, typeof(latrue))