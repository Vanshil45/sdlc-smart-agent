const express = require('express');
const todoController = require('../controllers/todoController');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all todos
router.get('/', auth, todoController.getTodos);

// Create a new todo
router.post('/', auth, todoController.createTodo);

// Update a todo
router.put('/:id', auth, todoController.updateTodo);

// Delete a todo
router.delete('/:id', auth, todoController.deleteTodo);

module.exports = router;
