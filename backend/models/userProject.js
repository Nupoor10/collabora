const mongoose = require('mongoose');
const User = require("./user");
const { Schema } = mongoose;

const userProjectSchema = new Schema({
    start : Date,
    end : Date,
    name : {
        type : String,
        required : true,
    },
    description : String,
    url : String,
    user : {
        ref : 'User',
        type: Schema.Types.ObjectId,
    }
})

const UserProjectsModel = mongoose.model('UserProjects', userProjectSchema);

module.exports =  UserProjectsModel;