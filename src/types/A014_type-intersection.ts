type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

// AND
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
  nome: 'Felipe',
  sobrenome: 'Vieira',
  idade: 25,
};

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type intersection = AB & AC;

export default pessoa;
