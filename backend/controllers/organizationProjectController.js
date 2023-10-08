const OrganizationProjectsModel = require('../models/organizationProject');

// Create a new organization project
const createOrganizationProject = async (req, res) => {
  try {
    const newProject = new OrganizationProjectsModel(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all organization projects
const getAllOrganizationProjects = async (req, res) => {
  try {
    const projects = await OrganizationProjectsModel.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single organization project by ID
const getOrganizationProjectById = async (req, res) => {
  try {
    const project = await OrganizationProjectsModel.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Organization project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an organization project by ID
const updateOrganizationProject = async (req, res) => {
  try {
    const project = await OrganizationProjectsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!project) {
      return res.status(404).json({ error: 'Organization project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an organization project by ID
const deleteOrganizationProject = async (req, res) => {
  try {
    const project = await OrganizationProjectsModel.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Organization project not found' });
    }
    res.json({ message: 'Organization project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrganizationProject,
  getAllOrganizationProjects,
  getOrganizationProjectById,
  updateOrganizationProject,
  deleteOrganizationProject,
};
