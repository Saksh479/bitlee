const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shortId: {
        type : String,
        required: true,
        unique: true
    },
    redirectId: {
        type : String,
        required: true,
    },
    visitHistory : [ {timestamps : {type: Number}} ]
})

const URL = mongoose.model("url",urlSchema);

module.exports = URL;
