import React from "react";
//PAGES
import InputTodo from "./components/input";
import EditTodo from "./components/edit";
import ListTodo from "./components/list";


function App() {

  return (
    <div>
    <InputTodo/>
    <EditTodo/>
    <ListTodo/>
    </div>
  );
}

export default App;
