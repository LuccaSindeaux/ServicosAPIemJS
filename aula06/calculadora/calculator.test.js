const calculator = require('./calculator');


describe("Teste das funcionalidades do calculator", ()=> {
    test("Soma de 3 e 5 é: 8", () => {
        expect(calculator.somar(3,5)).toBe(8);
    });
    
    test('Dividir 8 por 2 é 4', () =>{
        expect(calculator.dividir(8,2)).toBe(4);
    });
    test('Dividir por 0 é impossível', () =>{
        expect(calculator.dividir(10,0)).toBeNaN;
    });
    
    test('Multiplicar 2 e 3 dá 6', () => {
        expect(calculator.multiplicar(2,3)).toBe(6);
    });
    
    test('Subtração de 6 por 4 é 2', () => {
        expect(calculator.subtrair(6,4)).toBe(2)
    })
})
