function TodoList(props)
{
    const {text, deleteHandle} = props
    return (
        <>
        <div className="todo-list-section-child">
            <div className="todo-list-card-text-section">
                <p>{text}</p>    
            </div>
            <div className="option-div">
                <button onClick={deleteHandle} className="delete-button">Delete</button>
            </div>       
        </div>
        </>
    );
}

export default TodoList;