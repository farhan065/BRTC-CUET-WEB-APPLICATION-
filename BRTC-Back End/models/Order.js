const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true, // Ensure that userId is always provided
    },
    amount: {
        type: Number,
        required: true, // Ensure that amount is always provided
    },
    trxID: {
        type: String,
        required: true, // Ensure that trxID is always provided
        unique: true, // trxID should be unique for each transaction
    },
    paymentID: {
        type: String,
        required: true, // Ensure that paymentID is always provided
        unique: true, // paymentID should be unique for each transaction
    },
    date: {
        type: String,
        required: true, // Ensure that date is always provided
    }
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

module.exports = mongoose.model('Payment', paymentSchema);
