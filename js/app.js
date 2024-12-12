// Variável global para armazenar o valor total da compra
let totalGeral = 0;
// Limpa o conteúdo da lista de produtos e zera o valor total
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

// Adiciona um produto ao carrinho, atualizando a lista de produtos e o valor total
function adicionar() {
    // Obtém as referências aos elementos HTML relevantes
    let produtoElement = document.getElementById('produto');
    let quantidadeElement = document.getElementById('quantidade');
    let carrinho = document.getElementById('lista-produtos');
    let valorTotalElement = document.getElementById('valor-total');

    // Verifica se todos os elementos foram encontrados
    if (!produtoElement || !quantidadeElement || !carrinho || !valorTotalElement) {
        console.error('One or more required elements are missing from the document.');
        return;
    }

    // Verifica se um produto foi selecionado e se a quantidade é maior que zero
    let produto = produtoElement.value;
    if (!produto) {
        alert('Por favor, selecione um produto.');
        return;
    }

    // Extrai o nome do produto e o valor unitário
    let nomeProduto = produto.split('-')[0];

    // Verifica se o produto ja existe no carrinho
    let valorUnitário = parseFloat(produto.split('R$')[1].replace(',', '.'));

    // Verifica se a quantidade é um número inteiro maior que zero
    let quantidade = parseInt(quantidadeElement.value, 10);

    // Verifica se a quantidade é um número inteiro maior que zero
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('A quantidade deve ser maior que 0');
        return;
    }

    // Verifica se o valor unitário é um número
    if (isNaN(valorUnitário)) {
        console.error('Valor do produto não é válido.');
        return;
    }

    // Verifica se o produto ja existe no carrinho
    let produtosNoCarrinho = carrinho.children;
    let produtoJaExiste = false;
    for (let i = 0; i < produtosNoCarrinho.length; i++) {
        let produtoNoCarrinho = produtosNoCarrinho[i];
        if (produtoNoCarrinho.textContent.includes(nomeProduto)) {
            let quantidadeNoCarrinho = parseInt(produtoNoCarrinho.textContent.split('x')[0].trim());
            let precoNoCarrinho = parseFloat(produtoNoCarrinho.textContent.split('R$')[1].replace(',', '.'));
            precoNoCarrinho += quantidade * valorUnitário;
            produtoNoCarrinho.innerHTML = `<span class="texto-azul">${quantidade + quantidadeNoCarrinho}x</span> ${nomeProduto} <span class="texto-azul">R$${precoNoCarrinho.toFixed(2)}</span>`;
            produtoJaExiste = true;
        }
    }

    // Se o produto não existe, adiciona um novo item ao carrinho
    if (!produtoJaExiste) {
        carrinho.innerHTML += `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${(quantidade * valorUnitário).toFixed(2)}</span>
        </section>`;
    }

    // Atualiza o valor total da compra
    totalGeral += quantidade * valorUnitário;
    valorTotalElement.textContent = 'R$' + totalGeral.toFixed(2);
    quantidadeElement.value = ' ';
}

//Limpa o carrinho, removendo todos os produtos e zerando o valor total.
function limpar() {
    let listaProdutosElement = document.getElementById('lista-produtos');
    let valorTotalElement = document.getElementById('valor-total');
    
    // Verifica se os elementos foram encontrados/
    if (!listaProdutosElement || !valorTotalElement) {
        console.error('One or more required elements are missing from the document.');
        return;
    }
    // Limpa o conteúdo da lista de produtos e zera o valor total
    listaProdutosElement.innerHTML = '';
    valorTotalElement.textContent = 'R$ 0';
    totalGeral = 0;
}
