import {useState} from 'react';

function AddTodo () {
    const [close,setClose] = useState(true);
    const [message, setMessage] = useState('');
    const [isPending, setIspending] = useState(false);

    

    const handleChange = event => {
      setMessage(event.target.value);
  
      console.log('value is:', event.target.value);
      
    };

     

    // post JSON
    
    const closeWindow = () => {
        setClose(!close);   
    }

    const handleSubmit = (e) => {
        // e.preventDefault()
        const todo = {
           title : message,
           author : 1
        }

    console.log(todo)

    fetch('http://127.0.0.1:8000/api/todo/',{
        method: 'POST',
        headers : {"Content-Type" : "application/json"},
        body: JSON.stringify(todo)
    })

    } 
    return (
        <form onSubmit={handleSubmit} className={close ? 'block h-auto bg-slate-400 shadow p-4 mt-2 ms-2 me-2 text-gray-800 rounded-lg ' : 'hidden'}>
            <div className='flex justify-between '>
                <h1 className='font-bold mb-2'>Add Todo </h1>
                <button className='bg-red-800 rounded-full text-white w-6 h-6' onClick={closeWindow}><i className='bx bx-window-close'></i></button>
            </div>
            <input className='w-8/12 h-10 rounded-sm p-2 outline-none border-none' required type="text" name='title' onChange={handleChange} value={message}/>
            {!isPending && <button className='bg-green-600 w-20 h-10 ms-2 rounded' name="submit" >Add</button>}
            {isPending && <button disabled className='bg-green-600 w-20 h-10 ms-2 rounded' name="submit" >Adding blog </button>}

            <h1>title : {message}</h1>
        </form>
    )

    
}

export default AddTodo;