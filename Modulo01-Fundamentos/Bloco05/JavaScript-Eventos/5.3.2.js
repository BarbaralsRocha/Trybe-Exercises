function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  /* O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
        Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
        Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
        Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
 */

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    let listUl = document.getElementById('days')
function daysMonth(){
    for (i=0;i<dezDaysList.length;i++){
        let element = dezDaysList[i]
        let listLi=document.createElement('li')
        listLi.classList='day'
            if(element == 24 || element == 31){
            listLi.className='day holiday'
            }
            if(element == 4 || element == 11 || element == 18 ){
                listLi.className='day friday'
            }
        
            if(element == 25){
                listLi.className='day holiday friday'
            }

        listLi.innerText = element
        listUl.appendChild(listLi)

    }
}
daysMonth()

/* Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

function holidays(string){
    let div= document.querySelector('.buttons-container');
    let button = document.createElement('button')
    button.id='btn-holiday'
    button.innerText = 'Feriados'
    div.appendChild(button)
}
holidays('Feriados')

/* Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
 */


function holiday(){
    let buttonsHoli = document.getElementById('btn-holiday')
    let holidays = document.querySelectorAll('.holiday')
    let colorWhite = 'white'
    let colorOriginal = 'rgb(238,238,238)'

    buttonsHoli.addEventListener('click', function(){
        for(index1 in holidays){
            let element = holidays[index1]
            if(element.style.backgroundColor === colorWhite ){
                element.style.backgroundColor = colorOriginal;
            } else  {
               element.style.backgroundColor = colorWhite;
            }

        }

})

}
holiday()

/* Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

function fridays(string){
    let div= document.querySelector('.buttons-container');
    let button = document.createElement('button')
    button.id='btn-friday'
    button.innerText = 'Sexta-feira'
    div.appendChild(button)
}
fridays('Sexta-feira')

/* Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias. */

function fridayText(){
    let getButtonFridays = document.getElementById('btn-friday')
    let getFridays = document.querySelectorAll('.friday')
    let textFriday = 'Sexta-Feira'
    let colorOriginal = 'rgb(238,238,238)'

    getButtonFridays.addEventListener('click', function(){
        for(index1 in getFridays){
            let element = getFridays[index1]
            if(element.innerText == textFriday ){
                element = getFridays[index1] 
            } else  {
                element.innerText = textFriday   ;
            }

        }

})

}
//não estou conseguindo fazer o inverso
fridayText()

/* Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
Dica - Propriedade: event.target . */

function zoom (){
    let days = document.getElementById('days')

    days.addEventListener('mouseover', function(event){
            event.target.style.fontSize = '30px'
    })
    days.addEventListener('mouseout', function(event){
        event.target.style.fontSize = '20px'
    })
}
zoom()

/* Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" . */

function tarefas(string){
    let divTarefas= document.querySelector('.my-tasks');
    let tarefa = document.createElement('span')
    tarefa.innerText = 'Cozinhar'
    divTarefas.appendChild(tarefa)
}
tarefas('Cozinhar')

/* Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" . */

function colorTasks(cor){
    let divTasks= document.querySelector('.my-tasks');
    let divCreate= document.createElement('div')
    divCreate.className='task';
    divCreate.style.backgroundColor= cor
    divTasks.appendChild(divCreate)

}
colorTasks('yellow')

/* Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada. */

 function taskSelected(){
    let getTasks = document.querySelector('.task');

    getTasks.addEventListener('click', function(){
        if(getTasks.className == 'task'){
            getTasks.className='task selected'
        } else {
            getTasks.className='task'
        }
    })
}
taskSelected()


/* Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
 */

function daysTasks(){
    let days = document.getElementById('days')
    let getDay = document.querySelector('.day');
    let getTasks = document.querySelector('.task');
    let getTasksSelected = document.querySelector('.task selected');
    let getTaskColor = getTasks.style.backgroundColor;


        days.addEventListener('click', function(event){
        if (getTasks.classList.contains('selected') && event.target.style.color == 'rgb(119,119,119)'){
            event.target.style.color = getTaskColor
            console.log(getTaskColor)

        } else  {
            event.target.style.color = 'rgb(119,119,119)'
            
        } 

    })


}
daysTasks()

/* function daysTasks(){
    let days = document.getElementById('days')
    let getTasks = document.querySelector('.task');
    let getTasksSelected = document.querySelector('.task selected');
    let getTaskColor = getTasks.style.backgroundColor;


        days.addEventListener('click', function(event){
        if (getTasks.className == 'task selected' ){
            event.target.style.color = getTaskColor
        } else {
            event.target.style.color = 'rgb(119,119,119)'
        } 
    })


}
daysTasks()
 */ 

/* function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();
 */