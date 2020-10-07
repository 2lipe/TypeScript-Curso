// Tupla --> tipo específico e tamanho específico

const dadosCliente: [number, string] = [1, 'Felipe'];
const dadosCliente2: [number, string, string, string?] = [
  2,
  'Felipe',
  'Vieira',
];
const dadosCliente3: readonly [number, string, ...string[]] = [3, 'Felipe'];

console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);
