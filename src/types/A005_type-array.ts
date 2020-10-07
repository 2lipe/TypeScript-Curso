// Array<T> - T[]

function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}

const resultado = multiplicaArgs(1, 2, 3);
console.log(resultado);

function concatString(...args: string[]): string {
  return args.reduce((acc, valor) => acc + valor);
}

const concat = concatString('a', 'b', 'c', 'd');
console.log(concat);

function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const upper = toUpperCase('a', 'b', 'c');
console.log(upper);
