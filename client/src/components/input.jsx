import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";


const InputTodo = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async (evt) =>{
        evt.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location="/"
        } catch (err){
            console.error(err.message)
        }
    }

    return (<div>
        <h1>Todo List Input</h1>
        <form onSubmit={onSubmitForm}>
        <input type="text" className = "form-control" 
        value={description} 
        onChange={evt=> setDescription(evt.target.value)}/>
        <Button type="submit">Add</Button>
        </form>
        </div>)
};

export default InputTodo;