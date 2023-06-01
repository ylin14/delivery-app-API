const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    shopName: {
        required: true,
        type: String
    },
    goods: Array,

})

module.exports = mongoose.model('Data', dataSchema)

