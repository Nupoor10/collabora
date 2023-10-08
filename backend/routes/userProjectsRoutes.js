const express = require('express');
const router = express.Router();
const {
  createUserProject,
  getAllUserProjects,
  getUserProjectById,
  updateUserProject,
  deleteUserProject
} = require('../controllers/userProjectsController');

// Create a new user project
router.post('/', createUserProject);

// Get all user projects
router.get('/user-projects', getAllUserProjects);

// Get a single user project by ID
router.get('/user-projects/:id', getUserProjectById);

// Update a user project by ID
router.put('/user-projects/:id', updateUserProject);

// Delete a user project by ID
router.delete('/user-projects/:id', deleteUserProject);

module.exports = router;
