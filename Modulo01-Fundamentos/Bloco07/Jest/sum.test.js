/* Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
 */

const
    { sum,
        myRemove,
        myFizzBuzz,
    } = require('./sum.js');

describe('The function sun:', () => {
    it('return sum (4,5) to be 9:', () => {
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0);
    })

    it('retun a error when any of the parameters are string:', () => {
        expect(() => { sum(4, '5') }).toThrowError("parameters must be numbers");
    })
})

/* Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
 */

describe('The function myRemove:', () => {
    it('Return a copy of the array without the item:', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
})

/* Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado */

describe('The function myFizzBuzz:', () =>{
    it('Return a string:', ()=>{
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(9)).toBe('fizz');
        expect(myFizzBuzz(10)).toBe('buzz');
        expect(myFizzBuzz(11)).toBe(11);
        expect(myFizzBuzz("")).toBe(false);
    })
})