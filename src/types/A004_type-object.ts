const objetoA = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro valor';
objetoA.chaveC = 'Nova chave';

/** */

const objetoB: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoB.chaveA;
objetoB.chaveJ = 'Outra chave';
