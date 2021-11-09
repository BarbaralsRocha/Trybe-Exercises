//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
let anguloX=60;
let anguloY=10;
let anguloZ=30;

let somaAngulos = anguloX+anguloY+anguloZ;
if (somaAngulos == 180){
    console.log(true) ;
} else if (anguloX == 0 || anguloY == 0 || anguloZ ==0){
    console.log('Erro, angulo inválido');
} else {
    console.log (false)

}

