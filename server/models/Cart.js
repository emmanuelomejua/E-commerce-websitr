const mongoose = require('mongoose');
const { Schema, model } = mongoose

const CartSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    product: [
        {
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
                default: 1
            }
        },
    ],

}, { timestamps: true} )

module.exports = model('Cart', CartSchema)
