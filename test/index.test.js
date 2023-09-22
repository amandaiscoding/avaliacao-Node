const { describe, expect, it } = require('@jest/globals')
const ServicoCalculadora = require("../src/services/calculadora.js")

describe('Testes de soma', () => {
   
   const servico = new ServicoCalculadora()

   it('Should sum two numbers', () => {
      const result = servico.Soma(1, 2)
      expect(result).toBe(3);
   })

   it('Should error', () => {
      const result = () => servico.Soma(1, "a")      
      expect(result).toThrowError("Favor informar números válidos.");
   })
})

describe('Testes de subtração', () => {
    
    const servico = new ServicoCalculadora()
    
    it('Should subtract two numbers', () => {
        const result = servico.Subtracao(1, 2)
        expect(result).toBe(-1);
    })
    
    it('Should error', () => {
        const result = () => servico.Subtracao(1, "b")      
        expect(result).toThrowError("Favor informar números válidos.");
    })

    it('Should subtract two numbers', () => {
        const result = servico.Subtracao(2, 1)
        expect(result).toBe(1);
    })
})

describe('Testes de multiplicação', () => {
        
    const servico = new ServicoCalculadora()
        
    it('Should multiply two numbers', () => {
        const result = servico.Multiplicacao(1, 2)
        expect(result).toBe(2);
        })
        
    it('Should error', () => {
        const result = () => servico.Multiplicacao(1, "c")      
        expect(result).toThrowError("Favor informar números válidos.");
        })
    
    it('Should multiply two numbers', () => {
        const result = servico.Multiplicacao(2, 1)
        expect(result).toBe(2);
        })
    })

describe('Testes de divisão', () => {

    const servico = new ServicoCalculadora()
            
    it('Should divide two numbers', () => {
        const result = servico.Divisao(10, 2)
        expect(result).toBe(5);
        })
    it('Should error', () => {
        const result = () => servico.Divisao(1, "d")      
        expect(result).toThrowError("Favor informar números válidos.");
        })
    it('Should divide two numbers', () => {
        const result = servico.Divisao(2, 1)
        expect(result).toBe(2);
        })
    })

describe('Testes de potenciação', () => {
    
    const servico = new ServicoCalculadora()
                
    it('Should return the value of a base raised to a power', () => {
        const result = servico.Potencia(2, 2)
        expect(result).toBe(4);
        })
    it('Should error', () => {
        const result = () => servico.Potencia(1, "e")      
        expect(result).toThrowError("Favor informar números válidos.");
        })
    it('Should return the value of a base raised to a power', () => {
        const result = servico.Potencia(2, 1)
        expect(result).toBe(2);
        })
        })

describe('Testes de raiz quadrada', () => {
        
    const servico = new ServicoCalculadora()
                    
    it('Should return the square root of a number', () => {
        const result = servico.Raiz(4)
        expect(result).toBe(2);
        })
    it('Should error', () => {
        const result = () => servico.Raiz("f")      
        expect(result).toThrowError("Favor informar números válidos.");
        })
    it('Should return the square root of a number', () => {
        const result = servico.Raiz(1)
        expect(result).toBe(1);
        })
})

