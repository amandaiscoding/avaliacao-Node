const ServicoCalculadora = require("../services/calculadora.js")
const servico = new ServicoCalculadora()

class ControllerCalculadora {
    Soma(req, res) {
        try {
            const result = servico.Soma(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Algo deu errado." })
        }
    }

    Subtracao(req, res) {
        try {
            const result = servico.Subtracao(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Algo deu errado." })
        }
    }

    Multiplicacao(req, res) {
        try {
            const result = servico.Multiplicacao(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Algo deu errado." })
        }
    }

    Divisao(req, res) {
        try {
            const result = servico.Divisao(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Algo deu errado." })
        }
    }

    Potencia(req, res) {
        try {
            const result = servico.Potencia(req.body.base, req.body.expoente)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Algo deu errado." })
        }
    }

    Raiz(req, res) {
        try {
            const result = servico.Raiz(req.body.num)
            res.status(200).json({
                message: `resultado: ${result}`
            }) 
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Algo deu errado." })
        }
    }

    Get(req, res){
        res.status(200).json({
            message: "Escolha entre as operações: soma, subtração, multiplicação, divisão, potência ou raiz."
        })
    }
}

module.exports = ControllerCalculadora