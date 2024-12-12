# 🛒 Carrinho de Compras

Bem-vindo ao **Carrinho de Compras**! Este é um projeto simples em JavaScript que simula um carrinho de compras interativo. Vamos às compras! 🛍️💻

## 📋 Descrição

Este projeto permite ao usuário adicionar produtos ao carrinho, atualizar a quantidade e visualizar o valor total da compra. Ele foi desenvolvido utilizando HTML, CSS e JavaScript.

## 🚀 Funcionalidades

- Adicionar produtos ao carrinho 🛒
- Atualizar a quantidade de produtos 🔄
- Visualizar o valor total da compra 💵
- Limpar o carrinho 🗑️

## 📂 Estrutura do Projeto

├── index.html </br>
├── style.css <br>
└── js <br>
&nbsp;&nbsp;&nbsp;&nbsp;└── app.js


## ⚙️ Como Usar

1. Clone o repositório:
    ```sh
    git clone https://github.com/Paulo-Lisboa/carrinho-compras.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd carrinho-de-compras
    ```
3. Abra o arquivo `index.html` em seu navegador preferido.

## 📄 Código de Exemplo

### index.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Carrinho de compras</title>
</head>

<body>
  <main class="conteudo-principal">
    <section class="adicionar-produto">
      <h1 class="titulo">Carrinho de <span class="texto-azul">compras</span></h1>
      <form class="formulario">
        <!-- Formulário aqui -->
      </form>
    </section>
    <section class="carrinho">
      <h2 class="carrinho__titulo">Produtos no carrinho</h2>
      <section id="lista-produtos"></section>
      <p class="carrinho__total">Total: <span id="valor-total">R$ 0</span></p>
    </section>
  </main>
  <script src="js/app.js"></script>
</body>

</html>
```
app.js

```
// Variável global para armazenar o valor total da compra
let totalGeral = 0;

// Limpa o conteúdo da lista de produtos e zera o valor total
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar() {
    // Código da função adicionar
}

function limpar() {
    // Código da função limpar
}
```

🛠️ Tecnologias Utilizadas
HTML5 🖋️

CSS3 🎨

JavaScript (ES6) 🚀

💬 Contato
Se você tiver alguma dúvida, sinta-se à vontade para entrar em contato:

GitHub: https://github.com/Paulo-Lisboa

💡 Dica: Não se esqueça de dar uma olhada nos comentários no código para entender melhor o funcionamento das funções.

Espero que esse README.md ajude! 🚀✨


Se precisar de mais alguma coisa, estarei por aqui para ajudar! 📚💻
