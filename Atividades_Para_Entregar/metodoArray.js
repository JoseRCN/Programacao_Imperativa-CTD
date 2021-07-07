// Microdesafio

let numeros = [1, 2, 3, 4, 5, 6];

let numStr = numeros.reduce((acumulador, el )=> {
    return acumulador + " - " + el;
})

console.log(numStr);


let animais = ["Macaco", "Leão", "Hipopotamo", "Zebra"];

let nomeAnimal = animais.forEach(animal => console.log("O nome do animal é " + animal));