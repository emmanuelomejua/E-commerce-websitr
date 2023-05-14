'use strict';

require('dotenv').config()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const encryptedPassword = (password) => {
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
    return hashedPassword;
}

//Register
const Register = async (req, res) => {

    const isExists = await User.findOne({email: req.body.email})

    if(!isExists){
        const { fullName, email, password } = req.body
        try {
            const user = await User.create({
                fullName,
                email,
                password: encryptedPassword(password)
            })
            const savedUser = await user.save()
            // const {password, ...otherInfo} = user._doc
            res.status(201).json(savedUser)
        } catch (error) {
           res.status(500).json(error.message)
        }

    } else {
        return res.status(400).json('User already exists, pls sign in')
    }

}


//login method
const Login = async (req, res) => { 

    try {
        const user = await User.findOne({username: req.body.username});
        if(!user){
            return res.status(401).json('Invalid credentials')
        } else {
            const vPassword = await bcrypt.compare(req.body.password, user.password)
        
            if(!vPassword){
                return res.status(401).json('Invalid password or password');
            } else {
                           
            const accessToken = jwt.sign({
                id: user._id,
                isAdmin: user.isAdmin
            }, process.env.JWT, {expiresIn: '3d'})
    
            const  { password, ...others } = user._doc;
            res.status(200).json({...others, accessToken})
            }

        }

    
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = { Register, Login }
