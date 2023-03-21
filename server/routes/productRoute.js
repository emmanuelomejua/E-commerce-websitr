const { Router } = require('express')
const { createProduct, updateProduct, deleteProduct, getProduct, getAllProduct } = require('../controllers/product')
const router = Router()

const { verifyTokenAndAdmin } = require('../verifyToken')

//CREATE
router.post('/', verifyTokenAndAdmin,  createProduct)

//UPDATE
router.put('/:id', verifyTokenAndAdmin,  updateProduct)


// //DELETE
router.delete('/:id', verifyTokenAndAdmin, deleteProduct)

// GET PRODUCT
router.get('/find/:id', getProduct)

// //GET ALL PRODUCT
router.get('/', getAllProduct)


module.exports = router
