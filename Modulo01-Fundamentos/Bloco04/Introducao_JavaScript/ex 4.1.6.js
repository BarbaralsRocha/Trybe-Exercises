//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop (bispo) -> diagonals (diagonais)

let movement= 'torre';
switch(movement.toLowerCase()){
    case 'peão':
        console.log("Movimento apenas para a frente");
        break;
    case  'bispo':
        console.log("Movimento para as diagonais");
        break;
    case 'torre':
        console.log("Movimento em linhas retas horizontais ou verticais");
        break;
    case 'cavalo':
        console.log("Movimento em L");
        break;
    case 'rainha':
        console.log("Movimento vertical, horizontla ou diagonal");
        break;
    case 'rei':
        console.log("Move-se para qualquer casa adjacente");
        break;
    default:
        console.log("Erro, Peça inválida");

}

