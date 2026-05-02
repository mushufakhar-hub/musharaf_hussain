const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../controllers/profileController');
const auth = require('../middleware/auth');

// Public route
router.get('/', getProfile);

// Admin route
router.put('/', auth, updateProfile);

module.exports = router;
