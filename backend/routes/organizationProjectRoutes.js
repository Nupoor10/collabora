const express = require('express');
const router = express.Router();
const {
  createOrganizationProject,
  getAllOrganizationProjects,
  getOrganizationProjectById,
  updateOrganizationProject,
  deleteOrganizationProject
} = require('../controllers/organizationProjectController');

// Create a new organization project
router.post('/organization-projects', createOrganizationProject);

// Get all organization projects
router.get('/organization-projects', getAllOrganizationProjects);

// Get a single organization project by ID
router.get('/organization-projects/:id', getOrganizationProjectById);

// Update an organization project by ID
router.put('/organization-projects/:id', updateOrganizationProject);

// Delete an organization project by ID
router.delete('/organization-projects/:id', deleteOrganizationProject);

module.exports = router;
