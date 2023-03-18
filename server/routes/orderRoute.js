const router = require('express').Router()

const { createOrder, updateOrder, deleteOrder, getOrder, getAllOrder, getIncome  } = require('../controllers/order');
const Order = require('../models/Order');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require('../verifyToken')

// CREATE
router.post('/', verifyToken, createOrder)

// UPDATE
router.put('/:id',  verifyTokenAndAdmin,  updateOrder)


// DELETE
router.delete('/:id', verifyTokenAndAdmin,  deleteOrder)


// GET user orders
router.get('/find/:userId', verifyTokenAndAuthorization,  getOrder)

// //GET ALL orders
router.get('/', verifyTokenAndAdmin,  getAllOrder)

//Get monthly income
router.get('/income',  verifyTokenAndAdmin, getIncome)


module.exports = router