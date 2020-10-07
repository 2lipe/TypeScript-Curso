/* eslint-disable */

// --> Tipos básicos (Ocorre a inferência de tipos)
let nome: string = 'Felipe';
let idade: number = 25; // --> 10, 1.50, -5.50, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // --> true ou false
let simbolo: symbol = Symbol('any-symbol');
// let big: bigint = 10n;

// --> Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];

let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings2: string[] = ['a', 'b', 'c'];

// --> Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Felipe',
  idade: 25,
};

// --> Funções
function soma(x: number, y: number): number {
  return x + y;
}
const result = soma(3, 5);

const soma2: (x: number, y: number) => number = (x, y) => x + y;
