const OrgProfileModel = require('../models/organizationProfile');

// Create a new organization profile
const createOrgProfile = async (req, res) => {
  try {
    const newOrgProfile = new OrgProfileModel(req.body);
    await newOrgProfile.save();
    res.status(201).json(newOrgProfile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all organization profiles
const getAllOrgProfiles = async (req, res) => {
  try {
    const orgProfiles = await OrgProfileModel.find();
    res.json(orgProfiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single organization profile by ID
const getOrgProfileById = async (req, res) => {
  try {
    const orgProfile = await OrgProfileModel.findById(req.params.id);
    if (!orgProfile) {
      return res.status(404).json({ error: 'Organization profile not found' });
    }
    res.json(orgProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an organization profile by ID
const updateOrgProfile = async (req, res) => {
  try {
    const orgProfile = await OrgProfileModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!orgProfile) {
      return res.status(404).json({ error: 'Organization profile not found' });
    }
    res.json(orgProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an organization profile by ID
const deleteOrgProfile = async (req, res) => {
  try {
    const orgProfile = await OrgProfileModel.findByIdAndDelete(req.params.id);
    if (!orgProfile) {
      return res.status(404).json({ error: 'Organization profile not found' });
    }
    res.json({ message: 'Organization profile deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrgProfile,
  getAllOrgProfiles,
  getOrgProfileById,
  updateOrgProfile,
  deleteOrgProfile
};
