const express = require('express');
const router = express.Router();
const {
  createUserProfile,
  getUserProfileByUserId,
  updateUserProfile
} = require('../controllers/userProfileController');

// Create a new user profile
router.post('/', createUserProfile);

// Get user profile by user ID
router.get('/fetch/:userId', getUserProfileByUserId);

// Update user profile by user ID
router.put('/update/:userId', updateUserProfile);

module.exports = router;
