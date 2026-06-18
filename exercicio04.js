let par = "";
let impar = "";

for(let contador = 1; contador <= 8; contador++){
    let numero = Number(prompt(`Digite o ${contador} número`));
    if(numero %2 === 0){
        par += numero + " ";
    }
    else{
        impar += numero + " ";
    }
}
console.log(`Os números pares são ${par}`);
console.log(`Os números ímpares são ${impar}`);