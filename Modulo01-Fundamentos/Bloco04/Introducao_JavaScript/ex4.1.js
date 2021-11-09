//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
//Adição (a + b)
//Subtração (a - b)
//Multiplicação (a * b)
//Divisão (a / b)
//Módulo (a % b)
let a=12;
let b=6;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);


//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
let a=12;
let b=6;
if (a>b){
    console.log (a);
} else {
    console.log (b);
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

let a=173;
let b=347;
let c=436;

if (a>b && a>c){
    console.log(a);
} else if (b>a && b>c){
    console.log(b);
} else {
    console.log(c);
}

//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let a=0;

if(a>0){
    console.log("positivo");
}else if (a<0){
    console.log("negativo");
} else {
    console.log("zero");
}

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
    
/*Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .*/

const valueA=45;
const valueB=97;
const valueC=77;


if(valueA%2==0||valueB%2==0||valueC%2==0){
    console.log("true");
} else{
    console.log("false");
}


/*Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .*/

const valueA=45;
const valueB=97;
const valueC=77;


if(valueA%2 !==0||valueB%2 !==0||valueC%2!==0){
    console.log("true");
} else{
    console.log("false");
}

/*Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)*/

const valorCusto=3*1.2;
const valorVenda=7;

if(valorCusto==0||valorVenda==0){
    console.log('Erro, valor inválido');
} else{
    let valorLucroTotal = (valorVenda - valorCusto) *1000;
    console.log(valorLucroTotal)

}



/*Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.

Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.

Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?
*/

let salarioBruto = 3000;
var salarioBase;

if (salarioBruto <= 1556.94){
   var aliquotaINSS = (salarioBruto*0.08);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    aliquotaINSS = (salarioBruto*0.09);
} else if (salarioBruto >= 2594.93 && salarioBruto < 5189.82){
    aliquotaINSS = (salarioBruto*0.11);
} else {
    aliquotaINSS = 570,88
}

salarioBase = salarioBruto - aliquotaINSS


if (salarioBase <= 1903.98){
    var salarioLiquido = salarioBase;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
    salarioLiquido = salarioBase - (salarioBase*0.075 - 142.80);

} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    salarioLiquido = salarioBase - (salarioBase*0.15 - 354.80);

} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
    salarioLiquido = salarioBase - (salarioBase*0.225 - 636.13);
} 
else {
    salarioLiquido = salarioBase - (salarioBase*0.275 - 869,36);
}

console.log("Salário: " + salarioLiquido)