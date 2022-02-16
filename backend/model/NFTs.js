const mongoose = require('mongoose');

// db mmodel
const NftSchema = new mongoose.Schema({
    tokeID: {
        type: Number,
        required: true,
        unique: true
    },
    createdBy:{
        type: String,
        required: true
    },
    description: {
        type: Array
    },
    image: {
        type: String
    },
    name: {
        type: String
    },
    ownerAddress: {
        type: Array
    }
});

module.exports = mongoose.model('NFT', NftSchema);

