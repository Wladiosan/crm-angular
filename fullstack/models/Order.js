const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    date: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('orders', orderSchema)