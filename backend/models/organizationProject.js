const mongoose = require('mongoose')
const organization = require("./organization");
const { Schema } = mongoose;

const orgProjectSchema = new Schema({
    name: String,
    description : String,
    website : String,
    repo : String,
    contact : String,
    guidelines : String,
    maintainers : [{
        type : String
    }],
    projectStatus : {
        type : String,
        default : 'active'
    },
    organization : {
        type : Schema.Types.ObjectId,
        ref : 'Organization'
    }
})

const OrganizationProjectsModel = mongoose.model('OrganizationProjects', orgProjectSchema);

module.exports = OrganizationProjectsModel;