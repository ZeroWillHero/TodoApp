import { useState } from "react";
function TodoCard () {
    const [isChecked,setIsChecked] = useState(false);

    const handeleCheckBox  = () => {
        setIsChecked(!isChecked);
    }
    return (
        <div className="flex bg-white w-auto text-slate-800 justify-between items-center m-2 p-2">
            <input className='w-10' type="checkbox" name="done" id="done" checked={isChecked} onChange={handeleCheckBox} />
            <p className={isChecked ? 'line-through italic' : ''}>do something</p>
            <button className='bg-red-800 rounded-full w-10 h-10'><i className='bx bxs-minus-circle'></i></button>
        </div>
    )
}

export default TodoCard;