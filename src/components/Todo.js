import React from "react"

function Todo({text,todo,todos,setTodos}){

    // event handlers
    function deleteHandler(){
        // we search which ele we clicked on and will remove it
        setTodos(todos.filter((ele) => ele.id !==todo.id));
        console.log(todo);
    }
    function completeHandler(){
        // traversing over each item and checking if we clicked on the tick then set that items state to completed
        setTodos(todos.map((ele) => {
            if(ele.id===todo.id){
                return {
                    ...ele,completed: !ele.completed, // keep all prop of curr item as it is and change the completed status 
                }
            }
            return ele;
        }))
    }
    // in the first item we are checking if the curr item is completed we add dynamically completed class in it
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li> 
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;