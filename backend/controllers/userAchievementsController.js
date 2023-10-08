const UserAchievementsModel = require("../models/userAchievements");

// Create a new user achievement
const createUserAchievement = async (req, res) => {
  try {
    const newAchievement = new UserAchievementsModel(req.body);
    await newAchievement.save();
    res.status(201).json(newAchievement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all user achievements
const getAllUserAchievements = async (req, res) => {
  try {
    const achievements = await UserAchievementsModel.find();
    res.json(achievements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single user achievement by ID
const getUserAchievementById = async (req, res) => {
  try {
    const achievement = await UserAchievementsModel.findById(req.params.id);
    if (!achievement) {
      return res.status(404).json({ error: 'User achievement not found' });
    }
    res.json(achievement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a user achievement by ID
const updateUserAchievement = async (req, res) => {
  try {
    const achievement = await UserAchievementsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!achievement) {
      return res.status(404).json({ error: 'User achievement not found' });
    }
    res.json(achievement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a user achievement by ID
const deleteUserAchievement = async (req, res) => {
  try {
    const achievement = await UserAchievementsModel.findByIdAndDelete(req.params.id);
    if (!achievement) {
      return res.status(404).json({ error: 'User achievement not found' });
    }
    res.json({ message: 'User achievement deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUserAchievement,
  getAllUserAchievements,
  getUserAchievementById,
  updateUserAchievement,
  deleteUserAchievement,
};
