const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    userType: {
        type: String,
        default: 'Contributor'
    },
    password: String,
})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;