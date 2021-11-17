//Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const title = document.createElement('h1')
title.className = "title"
title.innerText = 'Exercício 5.2 - JavaScript DOM'
document.body.appendChild(title)

//Adicione a tag main com a classe main-content como filho da tag body ;
const tagMain = document.createElement('main')
tagMain.className = 'main-content'
document.body.appendChild(tagMain)

//Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const tagSection = document.createElement('section');
tagSection.className='center-content';
tagMain.appendChild(tagSection);

//Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;/
const paragraph = document.createElement('p')
paragraph.innerText = "Trybe"
tagSection.appendChild(paragraph)


//Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const tagSectionLeft = document.createElement('section');
tagSectionLeft.className='left-content';
tagMain.appendChild(tagSectionLeft);

//Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const tagSectionRight = document.createElement('section');
tagSectionRight.className='right-content';
tagMain.appendChild(tagSectionRight);


//Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
const image = document.createElement('img')
image.className='small-image'
image.src = 'https://picsum.photos/200'
tagSectionLeft.appendChild(image)


//Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const list = document.createElement('ul')
tagSectionRight.appendChild(list)
let array = ["um",'dois','tres','quatro','cinco','seis','sete','oito','nove','dez'];

for (let index in array) {
    let elemento = array[index]
    let listElements = document.createElement('li')
    listElements.innerText = elemento
    list.appendChild(listElements)
}

//Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

for(let i =1; i<=3; i++){
    let elementH3 = document.createElement('h3')
    elementH3.className='description'
    elementH3.innerText= "teste " + i
    tagMain.appendChild(elementH3)
}

//Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() 

let leftContent = document.getElementsByClassName('left-content')[0];
tagMain.removeChild(leftContent) ;

// 4. Centralize a `section` criado no passo 6 (aquele que possui a classe `right-content`). Dica: para centralizar, basta configurar o `margin-right: auto` da `section`;

tagSectionRight.style.marginRight = 'auto'

//Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

let paiSectionCenter = tagSection.parentElement
paiSectionCenter.style.color = 'green'

//Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

list.lastChild.remove()
list.lastChild.remove()