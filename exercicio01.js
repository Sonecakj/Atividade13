let numeroB = Number(prompt("Digite um numero inteiro para ver a tabuada"));
console.log(`Iniciado tabuada do ${numeroB}`);
for(let multiplicador = 1; multiplicador <= 10; multiplicador++){
    let resul = numeroB * multiplicador
    console.log(`${numeroB} X ${multiplicador} = ${resul}`)
}