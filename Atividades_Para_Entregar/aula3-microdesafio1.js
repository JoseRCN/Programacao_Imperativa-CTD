function calcularIndiceDeMassaCorporal(peso, altura) {
    altura = altura / 100;
    return (peso / (altura * altura)).toFixed(2);
}

//Invocando a função
console.log("IMC= " + calcularIndiceDeMassaCorporal(70, 168));


//fazendo atividade de novo

function CalcularIndiceDeMassaCorporal(peso1, altura1){

altura1 = altura1 / 100;
return (peso1 / (altura1 * altura1)).toFixed(2)

}

console.log("IMC= " + CalcularIndiceDeMassaCorporal(70,168));