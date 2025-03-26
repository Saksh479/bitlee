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
    visitHistory : [ {timestamps : {type: Number}} ],
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
})

const URL = mongoose.model("urls",urlSchema);

module.exports = URL;
