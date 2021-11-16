/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for. */

function verificaPalindrome(string){
    let words = string.split("")
    let reverse= words.reverse()
    let junta=reverse.join("")
    if(string === junta){
        return true
    } else {
        return false
    }
    
}
console.log (verificaPalindrome('arara'))


/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 21]; .
Valor esperado no retorno da função: 5 .
*/

function inteiros(array){
comparacao = 1
    for(let index = 0; index < array.length ; index++){
        if(array[index]>array[comparacao]){
            comparacao = index
        
        }
        
    }
    return comparacao;
}   
console.log(inteiros([2, 3, 6, 7, 10, 21]))

/* 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 .
 */

function inteiros(array){
    comparacao = 1
        for(let index = 0; index < array.length ; index++){
            if(array[index]<array[comparacao]){
                comparacao = index
            
            }
            
        }
        return comparacao;
    }   

console.log(inteiros([2, 4, 6, 7, 10, 0, -3]))

/* 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda .
 */

function longestWord(array){

let word;
let long = "";
    for(let index = 0; index<array.length; index++){
        word = array[index];
        
        if( word.length > long.length){
            long = word
            
        }

    }
   return long
}
console.log(longestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

/* 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 . 
*/


REFAZEEEEEEEEEEER (ARRUMAR ULTIMA POSIÇÃO)

function repeat(array){
    let comparacao = 1;
    let soma = 0;
        for(let index = 0; index<array.length;index++){
            if(array[index] == array[comparacao]){
                soma++
            } 
            comparacao++
        } 

        return soma
    }
        
console.log(repeat([2, 3, 5, 5, 1, 5, 5]))

/* 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15 . */

function soma(n){
    let soma =n;
    let j=1;
    for (i=1;i<=n;i++){
        soma+= n-j
        j++
    }
return soma
}
console.log(soma(100))

/* 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be') ;
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan') ;
Retorno esperado: false
 */

function verificaFimPalavra(string,ending){

let endingWord="";
let startContagem = string.length - ending.length ;
    for(z=startContagem;z<string.length;z++){
        endingWord = endingWord + string[z];
    
    }
    if(endingWord == ending){
        return true
    } else{
        return false
    }
    
     
}
console.log (verificaFimPalavra("fernanda","nanda"))
    