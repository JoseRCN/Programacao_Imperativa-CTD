const somar = (n1, n2) => n1 + n2;
 
const calculadora = (n1, n2, operacao) => operacao(n1, n2);

console.log(calculadora(10, 20, somar))
