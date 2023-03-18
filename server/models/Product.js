const mongoose = require('mongoose');
const { Schema, model } = mongoose

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    catergories: {
        type: Array,
        required: true
    },
    size:{
        type: String,
    },
    color:{
        type: String,
    },
    price:{
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        default: true
    }
}, { timestamps: true} )

module.exports = model('Product', ProductSchema)
