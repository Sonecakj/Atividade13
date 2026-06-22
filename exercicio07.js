let k = Number(prompt("Digite a quantidade de termo de Fibonacci deseja exibir"));
let anterior = 0;
let atual = 1;
let fibonacci = "";

for(let i = 1; i <= k; i++){
    fibonacci += anterior + " ";

    let proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
}
console.log(`Os primeiros ${k} da sequencia são ${fibonacci}`);