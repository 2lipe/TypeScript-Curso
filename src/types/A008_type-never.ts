// never --> pode ser usado para criar erros

function criaErro(): never {
  throw new Error('Erro qualquer');
}
