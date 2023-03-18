'use strict'

require('dotenv').config()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

//Register
const Register = async (req, res) => {

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt).toString()

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        
    })
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


//login method
const Login = async (req, res) => {

    try {
        const user = await User.findOne({username: req.body.username});
        if(!user){
            return res.status(401).json('User not found')
        }

        const vPassword = await bcrypt.compare(req.body.password, user.password)
        
        if(!vPassword){
            return res.status(401).json('Invalid password');
        }
       
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT, {expiresIn: '3d'})

    const  { password, ...others } = user._doc;
        res.status(200).json({...others, accessToken})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = { Register, Login }
