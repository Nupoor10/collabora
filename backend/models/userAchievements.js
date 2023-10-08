const mongoose = require('mongoose');
const User = require("./user");
const { Schema } = mongoose;

const achievementsSchema = new Schema({
    date : Date,
    title : {
        type : String,
        required : true,
    },
    issuer : {
        type : String,
        required : true,
    },
    description : String,
    user : {
        ref : 'User',
        type: Schema.Types.ObjectId,
    }
})

const UserAchievementsModel = mongoose.model('UserAchievements', achievementsSchema);

module.exports =  UserAchievementsModel;