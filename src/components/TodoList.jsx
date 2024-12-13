function TodoList(props)
{
    const {text, deleteHandle, completeHandle, complete} = props
    return (
        <>
        <div style={{backgroundColor: complete===false ? '#6528F7' : '#D7BBF5'}} className="todo-list-section-child">
            <div className="todo-list-card-text-section">
                <p>{text}</p>    
            </div>
            <div className="option-div">
                <button onClick={completeHandle} className={complete===false ? "option-div-child" : "option-div-child-true"}>Completed</button>
                <button onClick={deleteHandle} className={complete===false ? "option-div-child" : "option-div-child-true"}>Delete</button>
            </div>       
        </div>
        </>
    );
}

export default TodoList;