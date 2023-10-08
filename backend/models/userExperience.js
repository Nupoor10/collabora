const mongoose = require('mongoose');
const User = require("./user");
const { Schema } = mongoose;

const expSchema = new Schema({
    start : Date,
    end : Date,
    position : {
        type : String,
        required : true,
    },
    company : {
        type : String,
        required : true,
    },
    description : String,
    user : {
        ref : 'User',
        type: Schema.Types.ObjectId,
    }
})

const UserExpModel = mongoose.model('UserExp', expSchema);

module.exports = UserExpModel;