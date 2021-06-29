import React, { useState,useEffect } from "react";
import './App.css';
// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);  
  const [status,setstatus]=useState("all"); // used to change the state on the basis of task done or not
  const [filteredTodos,setFilteredTodos]=useState([]);

  // run once and get already present items in local storage
  useEffect(() => {
    getLocalTodos();
  },[]);

  // useeffect is used here as every time our todos changes or status changes the function executes again
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos,status]);
  
  // save to local so that it don't vanish after refreshing 
  function saveLocalTodos(){
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  function getLocalTodos(){
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]));
    }
    else{
      let todolocal=JSON.parse(localStorage.getItem("todos"));
      setTodos(todolocal);
    }
  }
  function filterHandler(){
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter( todo => todo.completed===true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter( todo => todo.completed===false));
        break;
      default:
        setFilteredTodos(todos); // nothing
        break;  
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setstatus={setstatus}
      />
      <TodoList 
      setTodos={setTodos} 
      todos={todos} 
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
