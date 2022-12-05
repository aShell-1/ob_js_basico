import chalk from "chalk";

export const sumar = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return `${a} + ${b} = ${chalk.green.bold(a + b)}`;
  }
  return chalk.red.bold("Error: No se pudo sumar")
}

export const multiplicar = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return `${a} * ${b} = ${chalk.green.bold(a * b)}`;
  }
  return chalk.red.bold("Error: No se pudo multiplicar")
}