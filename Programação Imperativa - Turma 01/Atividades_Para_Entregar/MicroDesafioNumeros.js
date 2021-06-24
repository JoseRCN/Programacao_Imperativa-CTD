let numerosPrimos = [2, 3, 5, 7, 11, 13];
let numeros = [...numerosPrimos, 14, 15, 16, 17,18];

console.log(numeros, "\n\n");



function maiorNumero(...nums) {
   console.log(Math.min(...nums))
}

maiorNumero(10, 50, 23, 12, 100, 27, 8, 542);