let nota = Number(prompt("Digite a nota do aluno"));
while ((nota <0) || (nota > 10)){
    console.log(`Nota inválida: Digite novamente`);
    alert(`Nota inválida: Digite novamente`);
    nota = Number(prompt("Digite a nota do aluno"));
}
console.log(`Nota ${nota}. Nota válida`)