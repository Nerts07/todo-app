import { useState } from "react";
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

    function iter()
    {
        return todos.map((task, index) =>
        task !== '' 
        ? 
        <TodoList 
        key={index}
        text={task} 
        deleteHandle={() => deleteItem(index)}
        />
        : null
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

export default TodoCard;