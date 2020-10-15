// Disponibiliza acesso através de metodos públicos, através do getter podemos
// manipular a maneira de entregar esses dados

export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  // Maneira Antiga de se fazer
  // getCpf(): string {
  //   return this.cpf.replace(/\D/g, '');
  // }

  // setCpf(valor: string): void {
  //   this.cpf = valor;
  // }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}
