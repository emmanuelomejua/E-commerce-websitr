const router = require('express').Router()

const { createCart, updateCart, deleteCart, getCart, getAllCart } = require('../controllers/cart');

const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require('../verifyToken')

// CREATE
router.post('/', verifyToken, createCart)

// UPDATE
router.put('/:id', verifyTokenAndAuthorization,  updateCart)



// DELETE
router.delete('/:id', verifyTokenAndAuthorization, deleteCart)

// GET user cart
router.get('/find/:userId', verifyTokenAndAuthorization,  getCart)

// //GET ALL PRODUCT
router.get('/', verifyTokenAndAdmin, getAllCart)


module.exports = router