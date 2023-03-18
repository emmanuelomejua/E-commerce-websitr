const router = require('express').Router();
const { Register, Login } = require('../controllers/auth');


//USER REGISTRATION ROUTE
router.post('/register', Register)


//USER LOGIN ROUTE
router.post('/login', Login)

module.exports = router
