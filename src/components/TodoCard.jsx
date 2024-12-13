import { useEffect, useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import './styles.css';

function TodoCard()
{
    const [todos, setNewTodos] = useState([]);

    function deleteItem(index)
    {

        
        const updateTodo = todos.filter(function(_, i)
        {
            return i !== index;
        })
        setNewTodos(updateTodo);
    }
    function handleComplete(index) {
        const updatedTodo = todos.map((todo, i) => 
            i === index ? { ...todo, complete: !todo.complete } : todo
        );
        setNewTodos(updatedTodo);
    }


    function iter()
    {
        return todos.map((todo, index) =>
        <TodoList 
        key={index}
        text={todo.text} 
        deleteHandle={() => deleteItem(index)}
        completeHandle={() => handleComplete(index)}
        complete={todo.complete}
        />
        )
    }

    return(
        <>
        <div className="todo-div">
            <div className="input-section-parent">
                <TodoInput todos={todos} setNewTodos={setNewTodos}/>
            </div>
            <div className="sub-line"></div>
            <div className="todo-list-section-parent">
                {iter()}
            </div>
        </div>
        </>
    );
}

const styles = {

}

export default TodoCard;