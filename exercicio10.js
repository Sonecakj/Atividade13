function verificarPrimo(numero){
    let divisor = 0;
    
    for(let contador = 1; contador <= numero; contador++){
        if(numero %1 === 0){
            divisor++;
        }
    }
    return divisor;
}

let numero = Number(prompt("Digite um valor inteiro e positivo"));

if(verificarPrimo(numero) === 2){
    console.log(`${numero} é Primo.`);
}
else{
    console.log(`${numero} NÃO é Primo.`);
}