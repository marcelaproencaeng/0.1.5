//Adapte o Exercício 0.1.2 para que o desconto seja aplicado para um valor de no máximo 100 reais independente do tipo de desconto. Além disso, adicione um quarto parâmetro que irá representar se essa é a primeira compra desse usuário no estabelecimento. Dê um desconto de 5% se for a primeira compra. 

function compra(valorCompra, temConvenio, cartaoLoja,primeiraCompra) {
  let valorFinal = 0;
  const descontoMax=100;

  if (temConvenio && cartaoLoja) {
    if((valorCompra*0.15>100)){
      return valorCompra-100;
    }else if(valorCompra*0.15<100){
      return valorCompra -100;
    }
      
  if (temConvenio || cartaoLoja) {
    if((valorCompra* 0.1>100)){
      return valorCompra-100;
    }else if(valorCompra*0.10<100){
      return valorCompra-100;
    }
    if()
    
  } else {
    valorFinal = valorCompra;
    return valorCompra;
  }
}
console.log(compra(100, true, true));
console.log(compra(100, false, true));
console.log(compra(100, false, false));
