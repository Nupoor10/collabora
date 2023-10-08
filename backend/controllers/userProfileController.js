const UserProfileModel = require("../models/userProfile");
const UserProjectModel = require("../models/userProject");
const UserExperienceModel = require("../models/userExperience");
const UserAchievementModel = require("../models/userAchievements");

// Create a new user profile
const createUserProfile = async (req, res) => {
  try {
    const newProfile = new UserProfileModel(req.body);
    await newProfile.save();
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get user profile by user ID
const getUserProfileByUserId = async (req, res) => {
  try {
    const profile = await UserProfileModel.findOne({ user: req.params.userId })
    const project = await UserProjectModel.find({ user: req.params.userId })
    const achievements = await UserAchievementModel.find({ user: req.params.userId })
    const experience = await UserExperienceModel.find({ user: req.params.userId })
    if (!profile) {
      return res.status(404).json({ error: 'User profile not found' });
    }
    res.json({profile, project, achievements, experience});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update user profile by user ID
const updateUserProfile = async (req, res) => {
  try {
    const profile = await UserProfileModel.findOneAndUpdate(
      { user: req.params.userId },
      req.body,
      { new: true }
    );
    if (!profile) {
      return res.status(404).json({ error: 'User profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUserProfile,
  getUserProfileByUserId,
  updateUserProfile,
};
