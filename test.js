import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`your-api-endpoint/${todo.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // You may need to include authentication headers or other headers here
        },
      });

      if (response.ok) {
        // If the deletion was successful, call the onDelete callback to update the UI
        onDelete(todo.id);
      } else {
        // Handle errors or show a message to the user
        console.error('Failed to delete item');
      }
    } catch (error) {
      console.error('Error occurred during delete:', error);
    }
  };

  return (
    <div>
      <span>{todo.title}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;