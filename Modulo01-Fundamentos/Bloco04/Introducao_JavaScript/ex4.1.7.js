/*Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/

function notas(value){
if(value >=90){
    console.log("Nota A");
} else if (value >=80){
    console.log("Nota B");
} else if (value >=80){
    console.log("Nota B");
} else if (value >=70){
    console.log("Nota C");
} else if (value >=60){
    console.log("Nota D");
} else if (value < 50){
    console.log("Nota F");
} else if (value<0|| value >100){
    console.log('Erro')
}
}

console.log (notas(67));

