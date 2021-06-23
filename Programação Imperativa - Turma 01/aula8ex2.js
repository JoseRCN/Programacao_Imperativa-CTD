//pensando em um sistema bancario
let pessoa= {
    nomeCompleto: 'José Henrique dos Santos',
    sexo: 'm',
    cpf: '111.222.333-44',
    nascimento: '05/01/2002',
    renda: 15000.00,
    verificarTipoConta: function(){
        if (pessoa.renda>=5000)
        {
            return 'O cliente'+ pessoa.nomeCompleto
        }
    }
}

console.log(pessoa)