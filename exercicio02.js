let numSoma = Number(prompt("Digite um valor para a soma"));
console.log(`Iniciando soma`);
let somatoria = 0;
for(let soma = 1; soma <= numSoma; soma++){
    somatoria = soma + somatoria;
}
console.log(`A soma acomulada é ${somatoria}`);