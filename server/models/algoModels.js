const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for 'algo'
const algoSchema = new Schema({
    id: Number,
    name: String,
    link: String,
    level: String,
    pattern: String
});

const algoModel = mongoose.model('questions', algoSchema );

module.exports = algoModel;