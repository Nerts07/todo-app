import { useState, useEffect } from "react";

import './styles.css';

function TodoInput(props)
{
    const {todos, setNewTodos} = props;

    const [newTodo, setNewTodo] = useState("");

    function handleNewTodo(e)
    {
        setNewTodo((stringValue)=>
        {
            stringValue = e.target.value;
            return stringValue;
        })
    }
    function handleClick(e)
    {
        e.preventDefault();
        console.log(newTodo);
        
        if (newTodo.trim !== '') {
            setNewTodos((task)=> [...task, newTodo]);
            setNewTodo('');
        }
    }

    useEffect(() =>
    {
        if(todos?.length){
            localStorage.setItem('todo-item', JSON.stringify(todos));
        }
    }, [todos])

    useEffect(()=>
    {
        const loadData = localStorage.getItem('todo-item') 
        ?
        JSON.parse(localStorage.getItem('todo-item'))
        :
        [''];

        if (loadData) {
            setNewTodos(loadData);   
        }
    }, [])
    return(
        <>
        <form className="input-section-child">

            <input type="text" 
            value={newTodo} 
            onChange={handleNewTodo} 
            className="just-input" 
            name="" 
            id="" 
            placeholder="todo" />

            <button 
            className="form-submit" 
            // onClick={clickButton} 
            onClick={handleClick}
            type="submit">
            add</button>
            
        </form>
        </>
    );
}

export default TodoInput;