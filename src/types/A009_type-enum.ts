enum Cores {
  VERMELHO, // = 100
  AZUL, // = 10
  AMARELO, // = 200
}

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.AMARELO);
