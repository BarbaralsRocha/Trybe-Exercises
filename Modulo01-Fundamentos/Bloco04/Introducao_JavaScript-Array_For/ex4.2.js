/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let array of numbers){
    console.log(array);
}

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; */
var soma=0;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (var index=0; index < numbers.length; index++){
    soma = soma + numbers[index]; 

}
console.log(soma);

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;*/

let soma=0;
let media=0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index=0; index < numbers.length; index++){
    soma = soma + numbers[index]; 
}
media = soma/(numbers.length);

console.log(media);

/*Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";*/

let soma=0;
let media=0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index=0; index < numbers.length; index++){
    soma = soma + numbers[index]; 
}
media = soma/(numbers.length);
if (media>20){
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
Utilizando for , descubra qual o maior valor contido no array e imprima-o;*/


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var maiorValor=numbers[0];
for (let index=1; index < numbers.length; index++){
    if (numbers[index] > maiorValor){
      maiorValor = numbers[index];
    } 
}
console.log(maiorValor)

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var numerosImpares=0;
for (let index=0; index < numbers.length; index++){
    if( numbers[index]%2 !==0){
        numerosImpares = numerosImpares +1
    }
}

if (numerosImpares == 0){
    console.log('Nenhum valor ímpar encontrado');
} else {
    console.log('Quantidade de numeros ímpares no array: ' + numerosImpares);
}


/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
Utilizando for , descubra qual o menor valor contido no array e imprima-o;*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var menorValor=numbers[0];
for (let index=1; index < numbers.length; index++){
    if (numbers[index] < menorValor){
      menorValor = numbers[index];
    } 
}
console.log(menorValor)


/*Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;*/

let arr = []
for (let index=1; index <= 25; index++){
    arr.push(index);
    
}
console.log(arr)


/*Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
*/
let arr = []
for (let index=1; index <= 25; index++){
    arr.push(index);
    
}

for (let j =0; j<arr.length; j++){
    division=arr[j]/2;
    console.log(division)
}

