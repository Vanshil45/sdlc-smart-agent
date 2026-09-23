const Todo = require('../models/Todo');

// Get all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user._id });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new todo
exports.createTodo = async (req, res) => {
  const { title } = req.body;
  try {
    const newTodo = new Todo({
      title,
      userId: req.user._id,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a todo
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const todo = await Todo.findByIdAndUpdate(id, { title, completed }, { new: true });
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
