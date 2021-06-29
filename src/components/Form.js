import React from "react";

function Form({setInputText,todos,setTodos,inputText,setstatus}){
  function inputTextHandler(event) {
    setInputText(event.target.value);
  };
  function submitTodoHandler(event) {
    event.preventDefault(); // prevents form refreshing the page every time we press button
    setTodos([...todos,
      {text: inputText,completed: false,id: Math.random()*1000}  ], // spreading already present tasks
       // inserting a new task {math.random just gives a random id to the new task}
      );
      setInputText(""); // set the input text back to empty after clicking the add button
  }

  function statusHandler(event){ // every time the drop button value changes its activated
    setstatus(event.target.value);
  }


    return(
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form> 
    );
}

export default Form;