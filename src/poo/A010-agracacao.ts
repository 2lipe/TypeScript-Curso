export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeDeProdutos(): number {
    return this.produtos.length;
  }

  valorTotalDosProdutos(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public _nome: string, public preco: number) {}
}

const produto1 = new Produto('Camisa', 49.9);
const produto2 = new Produto('Caneca', 79.9);
const produto3 = new Produto('Caneta', 2.9);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProduto(produto1, produto2, produto3);
console.log(carrinhoDeCompras.valorTotalDosProdutos());
