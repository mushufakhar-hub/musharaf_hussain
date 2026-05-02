const express = require('express');
const router = express.Router();
const { getMessages, sendMessage, deleteMessage, markAsRead } = require('../controllers/messageController');
const auth = require('../middleware/auth');

// Public route
router.post('/', sendMessage);

// Admin routes
router.get('/', auth, getMessages);
router.delete('/:id', auth, deleteMessage);
router.patch('/:id/read', auth, markAsRead);

module.exports = router;
