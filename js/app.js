let totalGeral;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto= produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
   
// calcular o preco, o nosso subtotal
 let preco = quantidade * valorUnitario;
 let carrinho = document.getElementById('lista-produtos')
carrinho.innerHTML = carrinho.innerHTML+`<section class="carrinho__produtos__produto">
<span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$ ${valorUnitario}</span>
</section>`;

 totalGeral = totalGeral + preco;
 let campoTotal = document.getElementById('valor-total');
 campoTotal.textContent = `R$ ${totalGeral}`
 document.getElementById('quantidade').value = 0;
 
   //adicionar no carrinho
    
    //recuperar valores nome do produto, quantidade e valor
    //atualizar o total
}

function limpar() {
totalGeral = 0
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent= 'R$ 0';
}