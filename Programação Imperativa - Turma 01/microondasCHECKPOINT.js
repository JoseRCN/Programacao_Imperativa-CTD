//juntando tudo
const tempoPadrao= require('./micro-modulo')

function microondas(alimentos,a){
    if (typeof alimentos=="number" && typeof a=="number") {
        switch (alimentos){
            case 1: console.log(tempoPadrao.prato(a,10));
            break;
            case 2: console.log(tempoPadrao.prato(a,8));
            break;
            case 3: console.log(tempoPadrao.prato(a,15));
            break;
            case 4: console.log(tempoPadrao.prato(a,12));
            break;
            case 5:console.log(tempoPadrao.prato(a,8));
            break;
            default:console.log("Prato inexistente.");
        }
    } else{
        console.log("Por favor, digite o tempo desejado em numero e escolha um prato valido")
    }
}


microondas(2,10)


/* - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!" */ 