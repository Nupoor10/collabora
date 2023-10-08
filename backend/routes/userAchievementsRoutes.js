const express = require('express');
const router = express.Router();
const {
  createUserAchievement,
  getAllUserAchievements,
  getUserAchievementById,
  updateUserAchievement,
  deleteUserAchievement
} = require('../controllers/userAchievementsController');

// Create a new user achievement
router.post('/', createUserAchievement);

// Get all user achievements
router.get('/user-achievements', getAllUserAchievements);

// Get a single user achievement by ID
router.get('/user-achievements/:id', getUserAchievementById);

// Update a user achievement by ID
router.put('/user-achievements/:id', updateUserAchievement);

// Delete a user achievement by ID
router.delete('/user-achievements/:id', deleteUserAchievement);

module.exports = router;
