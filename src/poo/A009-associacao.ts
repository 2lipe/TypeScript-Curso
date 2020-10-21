export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  get nome(): string {
    return this._nome;
  }

  escrever(): void {
    if (this._ferramenta === null) {
      console.log('Não posso escrever sem ferramenta');
      return;
    }

    this._ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está sendo utilizado para escrever...`);
  }
}

const escritor = new Escritor('Felipe');
const maquina = new MaquinaEscrever('Maquina de Escrever');

console.log(escritor.nome);
console.log(maquina.nome);
console.log(escritor.escrever());
escritor.ferramenta = maquina; // Inversão de Dependência
console.log(escritor.escrever());
