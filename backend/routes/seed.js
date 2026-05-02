const express = require('express');
const router = express.Router();
const { seedAdmin } = require('../controllers/authController');

// One-time admin user seeding
router.post('/seed', async (req, res) => {
  try {
    await seedAdmin();
    res.json({ success: true, message: 'Admin user seeded (or already exists)' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
