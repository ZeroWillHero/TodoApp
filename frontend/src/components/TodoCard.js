import { useState, useEffect } from "react";

function TodoCard() {
  const [isChecked, setIsChecked] = useState(false);
  const [todos, setTodos] = useState([]);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/todo/');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const todosData = await response.json();  // Convert the response to JSON
      setTodos(todosData);
      console.log(todosData);  // Log the actual data
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="flex bg-white w-auto text-slate-800 justify-between items-center m-2 p-2">
          <input className='w-10' type="checkbox" name="done" id={todo.id} checked={isChecked} onChange={handleCheckBox} />
          <p className={isChecked ? 'line-through italic' : ''}>{todo.title}</p>
          <button className='bg-red-800 rounded-full w-10 h-10'><i className='bx bxs-minus-circle'></i></button>
        </div>
      ))}
    </div>
  );
}

export default TodoCard;
