const UserProjectsModel = require("../models/userProject");

// Create a new user project
const createUserProject = async (req, res) => {
  try {
    const newProject = new UserProjectsModel(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all user projects
const getAllUserProjects = async (req, res) => {
  try {
    const projects = await UserProjectsModel.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single user project by ID
const getUserProjectById = async (req, res) => {
  try {
    const project = await UserProjectsModel.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'User project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a user project by ID
const updateUserProject = async (req, res) => {
  try {
    const project = await UserProjectsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!project) {
      return res.status(404).json({ error: 'User project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a user project by ID
const deleteUserProject = async (req, res) => {
  try {
    const project = await UserProjectsModel.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'User project not found' });
    }
    res.json({ message: 'User project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUserProject,
  getAllUserProjects,
  getUserProjectById,
  updateUserProject,
  deleteUserProject,
};
