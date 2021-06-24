function Restaurante (nome, cardapio){
    this.nome = nome;
    this.cardapio = cardapio;
    entrada = function() { return console.log('Seja bem vindo ao',this.nome,'Cardapio de hoje:',this.cardapio)}
    this.entrada();
};
Restaurante ('A lanchonete Marcolino,',['Frango Frito','Coxinha','Miojo']);