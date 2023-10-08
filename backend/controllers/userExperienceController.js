const UserExpModel = require("../models/userExperience");

// Create a new user experience entry
const createUserExperience = async (req, res) => {
  try {
    const newExperience = new UserExpModel(req.body);
    await newExperience.save();
    res.status(201).json(newExperience);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all user experience entries
const getAllUserExperiences = async (req, res) => {
  try {
    const experiences = await UserExpModel.find();
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single user experience entry by ID
const getUserExperienceById = async (req, res) => {
  try {
    const experience = await UserExpModel.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ error: 'User experience not found' });
    }
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a user experience entry by ID
const updateUserExperience = async (req, res) => {
  try {
    const experience = await UserExpModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!experience) {
      return res.status(404).json({ error: 'User experience not found' });
    }
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a user experience entry by ID
const deleteUserExperience = async (req, res) => {
  try {
    const experience = await UserExpModel.findByIdAndDelete(req.params.id);
    if (!experience) {
      return res.status(404).json({ error: 'User experience not found' });
    }
    res.json({ message: 'User experience deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUserExperience,
  getAllUserExperiences,
  getUserExperienceById,
  updateUserExperience,
  deleteUserExperience,
};
