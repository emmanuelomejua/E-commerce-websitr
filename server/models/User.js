const mongoose = require('mongoose'); 
const { Schema, model } = mongoose

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        required: true,
        type: String,
        min: [4, 'Password must contain minmum of 4 characters'],
        min: [25, 'Password should not exceed 25 characters'],
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true} )

module.exports = model('User', userSchema) 
