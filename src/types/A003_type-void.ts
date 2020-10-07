function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Felipe',
  sobrenome: 'Vieira',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Felipe', 'Vieira');
pessoa.exibirNome();

export { pessoa };
