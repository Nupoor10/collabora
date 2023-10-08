const express = require('express');
const router = express.Router();
const {
  createUserExperience,
  getAllUserExperiences,
  getUserExperienceById,
  updateUserExperience,
  deleteUserExperience
} = require('../controllers/userExperienceController');

// Create a new user experience entry
router.post('/', createUserExperience);

// Get all user experience entries
router.get('/user-experiences', getAllUserExperiences);

// Get a single user experience entry by ID
router.get('/user-experiences/:id', getUserExperienceById);

// Update a user experience entry by ID
router.put('/user-experiences/:id', updateUserExperience);

// Delete a user experience entry by ID
router.delete('/user-experiences/:id', deleteUserExperience);

module.exports = router;
