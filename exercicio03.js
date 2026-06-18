let valorProd = 0;

for(let prod = 1; prod <= 10; prod++){
    let preco = Number(prompt(`Informe o preço do ${prod}º produto`));
    valorProd += preco;
}

console.log(`O valor gasto foi de ${valorProd}`);