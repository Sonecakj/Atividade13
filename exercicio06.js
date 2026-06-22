function calcularFatorial(numero){
    let resultado = 1;
    
    for(let contador = numero; contador >= 1; contador--){
        resultado *= contador;
    }
    return resultado
}
let numero = Number(prompt("Digite um valor inteiro e positivo"));
console.log(`O fatoral de ${numero} é ${calcularFatorial(numero)}`);