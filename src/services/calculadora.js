const e = require("express");

class ServicoCalculadora {
    Soma(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números válidos.")
        }
        const resultado = num1 + num2
        return resultado;
    }

    Subtracao(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números válidos.")
        }
        const resultado = num1 - num2
        return resultado;
    }

    Multiplicacao(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números válidos.")
        }
        const resultado = num1 * num2
        return resultado;
    }

    Divisao(num1, num2) {  
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números válidos.")
        }
        const resultado = num1 / num2
        return resultado;
    }

    Potencia(base, expoente) {
        if(isNaN(base) || isNaN(expoente)){
            throw new Error("Favor informar números válidos.")
        }
        const resultado = Math.pow(base, expoente) // referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
        return resultado;
    }

    Raiz(num) {
        if(isNaN(num)){
            throw new Error("Favor informar números válidos.")
        }
        const resultado = Math.sqrt(num) // referencia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
        return resultado;
    }

}


module.exports = ServicoCalculadora