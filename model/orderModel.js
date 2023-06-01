const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    goods: Array,
    customer: {
        name: {
            required: true,
            type: String
        },
        email: {
            required: true,
            type: String
        },
        phone: {
            required: true,
            type: String
        },
        address: {
            required: true,
            type: String
        },
    },
    totalPrice: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('orderData', orderSchema)

