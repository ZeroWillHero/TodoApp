import {useState} from 'react';

function AddTodo () {
    const [close,setClose] = useState(true);

    const closeWindow = () => {
        setClose(false)
        
        
    }
    


    return (
        <div className={close ? 'block h-auto bg-slate-400 shadow p-4 mt-2 ms-2 me-2 text-gray-800 rounded-lg ' : 'hidden'}>
            <div className='flex justify-between '>
                <h1 className='font-bold mb-2'>Add Todo </h1>
                <button className='bg-red-800 rounded-full text-white w-6 h-6'><i className='bx bx-window-close'></i></button>
            </div>
            <input className='w-8/12 h-10 rounded-sm p-2 outline-none border-none' type="text"/>
            <button className='bg-green-600 w-20 h-10 ms-2 rounded' onClick={closeWindow}>Add</button>
        </div>
    )
}

export default AddTodo;