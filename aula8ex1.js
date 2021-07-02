let carro={ 
    cor: 'preta', //cor=prorpiedade ou caracteristica e preta= valor da propriedade
    placa: 'DRU2258',
    largura: 2,
    altura: 1.5,
    flex: true,
    movimentar: function(){
        return 'O carro está andando!';

    }
}

console.log(carro);
console.log(carro.cor);
console.log(carro.movimentar())
