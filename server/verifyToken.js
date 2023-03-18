const jwt = require('jsonwebtoken')

//All 
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token

    if(authHeader){
        const token = authHeader.split(' ')[1]
        jwt.verify(token, process.env.JWT, (err, user) => {
            if(!err){
                return req.user = user;
            } else {
                return res.status(403).json('Token is not valid')
            }
        })
        next()
    } else {
        return res.status(401).json('Please, you require an authentication')
    }
}

//For authorised users
const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        } else {
            res.status(403).json('Action not allowed')
        }
    })
}

//For admin only
const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin){
            next()
        } else {
            res.status(403).json('Action not allowed')
        }
    })
}

module.exports = { verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
 } 
