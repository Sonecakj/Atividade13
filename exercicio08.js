let maior = 0;
let numero;
let menor = 100000000000;

while(numero !== 0){
     numero = Number(prompt("Digite um valor"));
    
    if(numero>maior){
        maior = numero;
    }
    
    if(numero<menor && numero !==0){
        menor = numero;
    }
}

console.log("O maior numero foi: " + maior);
console.log("O menor numero foi: " + menor);