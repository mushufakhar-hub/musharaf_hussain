const express = require('express');
const router = express.Router();
const { getProjects, getProject, createProject, updateProject, deleteProject } = require('../controllers/projectController');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// Public routes
router.get('/', getProjects);
router.get('/:id', getProject);

// Admin routes
router.post('/', auth, upload.single('image'), createProject);
router.put('/:id', auth, upload.single('image'), updateProject);
router.delete('/:id', auth, deleteProject);

module.exports = router;
