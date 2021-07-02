let andar=()=>'Carro em movimento';

let parar=()=>'Carro parou';

let acaoCarro=(callback)=>console.log(callback(andar,parar));

acaoCarro(andar);
acaoCarro(parar);