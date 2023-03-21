const { Router } = require('express')
const router = Router()

const Payment = require('../controllers/stripe')

router.post('/payment', Payment)

module.exports = router