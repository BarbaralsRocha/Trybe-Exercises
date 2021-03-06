const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

//Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela


const turnoModification = (licao, value, key) => {
  licao[value] = key;
  console.log(lesson2)
}
turnoModification(lesson2, 'turno', 'noite')
 
/* //Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const keys = (obj) => Object.keys(obj)
console.log(keys((lesson1)));

//Crie uma função para mostrar o tamanho de um objeto.

const keysSizes = (obj) => Object.keys(obj).length
console.log(keysSizes(lesson1));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const keysValues = (obj) => Object.values(obj)
console.log(keysValues(lesson1));
 */
// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . 

const allLessons =  Object.assign({lesson1} , {lesson2}, {lesson3})
console.log(allLessons)

//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const allStudents = (obj) => {
    let soma = 0;
    let keys = Object.keys(obj);
    for(let index in keys){
        soma += obj[keys[index]].numeroEstudantes
    }
    return soma

}
console.log(allStudents(allLessons))

//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.