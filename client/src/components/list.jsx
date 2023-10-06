import React from "react";
import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, getListItemSecondaryActionClassesUtilityClass } from '@mui/material';
  

const ListTodo = () => {
    const [todo, setTodo] = useState([]);

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
                    <TableCell align="right">Edit</TableCell>
                    <TableCell align="right">Delete</TableCell>
                    </TableRow>
                ))}
                </TableBody>

            </Table>
    </TableContainer>
  );
};

export default ListTodo;