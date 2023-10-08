const mongoose = require('mongoose');
const User = require("./user");
const UserExperience = require("./userExperience");
const UserProject = require("./userProject");
const UserAchievements = require("./userAchievements");
const { Schema } = mongoose;

const userProfileSchema = new Schema({
    bio: String,
    skills: [{
        type: String
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const UserProfileModel = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfileModel;