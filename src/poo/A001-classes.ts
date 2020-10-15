export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = []; // Classe também é tipo
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

// Atalho Public não é redundante
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Empresa Teste', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Felipe', 'Vieira');
empresa1.adicionaColaborador(colaborador1);
console.log(empresa1);
