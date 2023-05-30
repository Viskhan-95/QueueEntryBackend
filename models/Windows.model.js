const { Schema, model }  = require("mongoose");

const WindowSchema = Schema({
    windowNumber: Number,
    isConnect: Boolean,
    isActive: Boolean
});

const Windows = model('Windows', WindowSchema);

module.exports = Windows;