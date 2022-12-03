const logger = require('./logger')

const division = (numerador, denominador) => {
  try{
    // Sin control
    const result = (numerador)/(denominador)
    console.log(resultado)
    
  }catch(e){
    logger.error(`${e}`)
  }
}

division(15,2)
