const express = require('express');
const authRoutes = require('./auth');
const todoRoutes = require('./todos');

const router = express.Router();

// Use the authentication routes
router.use('/auth', authRoutes);

// Use the todo routes
router.use('/todos', todoRoutes);

module.exports = router;
