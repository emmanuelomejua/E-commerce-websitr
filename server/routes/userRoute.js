const { getStats, getAllUser, getUser, deleteUser, updateUser } = require('../controllers/user');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../verifyToken')

const {Router} = require('express');
const router = Router()


router.put('/:id', verifyTokenAndAuthorization, updateUser)


//DELETE
router.delete('/:id', verifyTokenAndAuthorization, deleteUser)

//GET USER
router.get('/find/:id', verifyTokenAndAdmin, getUser)

//GET ALL USERS
router.get('/', verifyTokenAndAdmin, getAllUser)

//GET USERS STATS
router.get('/stats',  verifyTokenAndAdmin, getStats)


module.exports = router
