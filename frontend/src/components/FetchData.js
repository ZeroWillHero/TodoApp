import { useState,useEffect } from 'react';
function FetchData () {
    const [todo,setTodo] = useState([]);

    useEffect(() => {
        FetchData();
    },[]);

    const FetchData = async () => {
        const todo = await fetch ('http://127.0.0.1:8000/api/todo/');
        setTodo(data);

    }

}