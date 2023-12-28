import { useState, useEffect } from "react";

function TodoCard() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/todo/');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const todosData = await response.json();
      // Add a "checked" property to each todo
      const todosWithChecked = todosData.map(todo => ({ ...todo, checked: false }));
      setTodos(todosWithChecked);
      console.log(todosWithChecked);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleCheckBox = (todoId) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === todoId ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="flex bg-white w-auto text-slate-800 justify-between items-center m-2 p-2">
          <input
            className='w-10'
            type="checkbox"
            name="done"
            id={todo.id}
            checked={todo.checked}
            onChange={() => handleCheckBox(todo.id)}
          />
          <p className={todo.checked ? 'line-through italic' : ''}>{todo.title}</p>
          <button className='bg-red-800 rounded-full w-10 h-10'><i className='bx bxs-minus-circle'></i></button>
        </div>
      ))}
    </div>
  );
}

export default TodoCard;
