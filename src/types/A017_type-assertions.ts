// Acha que talvez pode exister
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// Non-null Assertion ! -> certeza de que existe (não pode ser nulo)
const body1 = document.querySelector('body')!;
body1.style.background = 'red';

// Type Assertion (as) -> Recomendados
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'red';

const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Foo';
input.focus();
