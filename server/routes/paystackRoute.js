const { Router } = require('express')
const router = Router()

const { Paystack } = require('../controllers/paystack1')

app.get('/paystack', Paystack)

module.exports = router