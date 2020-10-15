// Protected pode ser acessado por uma subclasse

export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = []; // Classe também é tipo
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

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  pop(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

const empresa1 = new Empresa('Empresa Teste', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Felipe', 'Vieira');
empresa1.adicionaColaborador(colaborador1);
console.log(empresa1);
