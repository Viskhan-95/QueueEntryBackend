const mongoose = require("mongoose");

const WindowSchema = mongoose.Schema({
    windowNumber: Number,
    isConnect: Boolean,
    isActive: Boolean
});

const Windows = mongoose.model('Windows', WindowSchema);

module.exports = Windows;