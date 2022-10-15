let _factorial = 1, i = 1
const _number = 10

while (true) {
    _factorial = _factorial * i
    
    if (i === _number) {
        console.log(`!${_number} = ${_factorial}`)
        break
    }
    
    i++
}