import React from "react";
import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import EditTodo from "./edit";


const ListTodo = () => {
    //COMMENT set initial list
    const [todo, setTodo] = useState([]);
   

    //COMMENT delete fx
    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            })
            setTodo(todo.filter(todos => todos.todo_id !== id))
        } catch (err){
            console.error(err.message)
        }
    }
   

    //COMMENT all Todoos for list
    const getTodos = async () => {
        try {
        const response = await fetch("http://localhost:5000/todos")
        const jsonData = await response.json()
        setTodo(jsonData)
    } catch (err){
            console.log(err.message)
        }
    }

    useEffect(()=> {
        getTodos();
    }, [])

    //COMMENT
    console.log(todo);

    return (
        <TableContainer>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>Number</TableCell>
                    <TableCell align="justify">Description</TableCell>
                    <TableCell align="right">Edit</TableCell>
                    <TableCell align="right">Delete</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {todo.map((row, index) => (
                    <TableRow
                    key={row.todo_id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                     {index + 1}
                    </TableCell>
                    <TableCell align="justify">{row.description}</TableCell>
                    <TableCell align="right"><EditTodo id={row.todo_id} description={row.description}/></TableCell>
                    <TableCell align="right"><Button color='warning' onClick={() => deleteTodo(row.todo_id)}>Delete</Button></TableCell>
                    </TableRow>
                ))}
                </TableBody>

            </Table>
    </TableContainer>
  );
};

export default ListTodo;