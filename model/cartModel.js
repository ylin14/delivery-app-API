const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    shopName: {
        required: true,
        type: String
    },
    goods: Array,
    totalPrice: {
        type: Number
    }

})

module.exports = mongoose.model('Data', cartSchema)

