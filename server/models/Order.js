const mongoose = require('mongoose');
const { Schema, model } = mongoose

const orderSchema = new Schema({
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
        }
    ],
    amount: {
        type: Number,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        default: 'Pending'
    },
}, { timestamps: true} )

module.exports = model('Order', orderSchema) 
