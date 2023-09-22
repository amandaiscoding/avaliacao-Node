const express = require('express')
const ControllerCalculadora = require('../controllers/calculadora.js')

const controller = new ControllerCalculadora()
const router = express.Router()

router.post('/api/soma', controller.Soma)
router.post('/api/subtracao', controller.Subtracao)
router.post('/api/multiplicacao', controller.Multiplicacao)
router.post('/api/divisao', controller.Divisao)
router.post('/api/potencia', controller.Potencia)
router.post('/api/raiz', controller.Raiz)

router.get('/api', controller.Get)



module.exports = router