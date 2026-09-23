import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo._id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
