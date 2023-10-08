const express = require('express');
const router = express.Router();
const { createOrgProfile, getAllOrgProfiles, getOrgProfileById, updateOrgProfile, deleteOrgProfile} = require('../controllers/organizationProfileController');

// Create a new organization profile
router.post('/create/:id', createOrgProfile);

// Get all organization profiles
router.get('/org-profiles', getAllOrgProfiles);

// Get a single organization profile by ID
router.get('/fetchOne/:id', getOrgProfileById);

// Update an organization profile by ID
router.put('/update/:id', updateOrgProfile);

// Delete an organization profile by ID
router.delete('/org-profiles/:id', deleteOrgProfile);

module.exports = router;
