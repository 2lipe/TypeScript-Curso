export abstract class Personagem {
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    this.bordao();
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  bordao(): void {
    console.log('Guerreira ao ataque');
  }
}
export class Monstro extends Personagem {
  bordao(): void {
    console.log(`Birl... monstro agora com ${this.vida} de vida.`);
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
