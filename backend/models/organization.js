const mongoose = require('mongoose')
const { Schema } = mongoose

const orgSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    userType: {
        type: String,
        default: 'Organization'
    },
    password: String,
})

const OrgModel = mongoose.model('Organization', orgSchema);

module.exports = OrgModel;
