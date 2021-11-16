//Exercicio 1 - Crie uma função que mude o texto na tag <p> para uma descrição de como voce se vê daqui a 2 anos.
function changeParagraph(string){
   let p = document.getElementsByTagName("p")[1]
   p.innerText = string
}
//console.log(changeParagraph("onde me vejo"))

//Exercicio 2 - Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe.
function changeColorYellow(){
    let colorGreen= document.getElementsByClassName("main-content")[0]
    colorGreen.style.background = "rgb(0,128,0)" ;
}
changeColorYellow()

//Exercicio 3 - Crie uma função que mude a cor do quadrado vermelho para branco.
function changeColorRed(){
    let colorWhite = document.querySelector(".main-content .center-content ")
    colorWhite.style.background="rgb(255,255,255)"
}
changeColorRed()

//Exercicio 4 - Crie uma função que corrija o texto da tag <h1>.
function correctText(){
    let text = document.getElementsByTagName("h1")[0]
    text.innerText = "Exercício 5.1 - Java Script"
}
correctText()

//Exercicio 5 - Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function upperCase(){
    let upperCaseText = document.getElementsByTagName("p")
    for(i=0;i<upperCaseText.length;i++){
        upperCaseText[i].style.textTransform= "uppercase"
    }
}
upperCase()
 
//Exercicio 6 - Crie uma função que exiba o conteúdo de todas as tags <p> no console
function allContentP(){
    let paragraph = document.getElementsByTagName("p")
    for(i=0;i<paragraph.length;i++){
        console.log(paragraph[i].innerText)
    }
}
console.log(allContentP())