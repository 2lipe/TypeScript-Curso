let x: unknown;

x = 100;
x = 'Felipe';
x = 900;
x = '10';

const y = 800;

console.log(x + 1); // --> ele não deixa realizar a operação caso não cheque o tipo

if (typeof x === 'number') console.log(x + y);
