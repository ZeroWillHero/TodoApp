import './App.css';
import AddTodo from './components/AddTodo';
import TodoCard from './components/TodoCard';
import { useState } from 'react';


function App() {
  const [ShowWindow,setShowWindow] = useState(false);

  const ShowHideWindow = () => {
    setShowWindow (!ShowWindow)
  }

  return (
    <div className="App">

      {/* navigation bar */}
      <nav className='h-auto bg-slate-800 text-white flex justify-between items-center'>
        <div className='flex items-center'>
      
          <h1 className='text-center p-5 text-2xl font-bold'>React To do App</h1>
          <button className='bg-green-700 rounded-lg w-32 h-10' onClick={ShowHideWindow}>Add todo</button>

        </div>
 
        <img className='profile-pic m-4' src={require ('./assets/profile-pic (1).png')} alt="" />
      </nav>

      {/* body  */}

      <div className='bg-slate-950 text-white min-h-dvh'>
        <div className='bg-slate-400 shadow ms-2 me-2'>
          <h1 className='text-2xl font-thin p-4'>To do List</h1>
        </div>

        <div>
          <div className={ShowWindow ? 'block' : 'hidden'}>
            <AddTodo/>
          </div>
          <TodoCard/>
        </div>
      </div>


    </div>
  );
}

export default App;
