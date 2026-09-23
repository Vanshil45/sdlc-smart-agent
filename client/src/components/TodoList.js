import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { getTodos, createTodo, deleteTodo } from '../services/api';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      await createTodo({ text: newTodo });
      fetchTodos();
      setNewTodo('');
    }
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo._id} todo={todo} onDelete={handleDeleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
