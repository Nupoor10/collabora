const mongoose = require("mongoose");
const organization = require("./organization");
const { Schema } = mongoose;

const orgProfileSchema = new Schema({
    about : String,
    location : String,
    github : String,
    linkedIn : String,
    organization : {
        type : Schema.Types.ObjectId,
        ref : 'Organization',
        required : true
    }
})

const orgProfileModel = mongoose.model("OrgProfile", orgProfileSchema);

module.exports = orgProfileModel;