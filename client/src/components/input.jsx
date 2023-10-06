import React from "react";
import { useState } from "react";
import { Button, Box, TextField, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const InputTodo = () => {
    const [description, setDescription] = useState("");
    const defaultTheme = createTheme();

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

    return (
        <ThemeProvider theme={defaultTheme}>
        <Box width="80%" margin="30px auto">
        <h1 align="center">Todo List Items</h1>
        <form onSubmit={onSubmitForm}>
        <Grid container spacing={2}>
        <Grid item xs={18} sm={9}>
        <TextField type="text" 
        id="outlined-basic" label="Todo Item" variant="outlined"
        align="center"
        size="small"
        fullWidth
        value={description} 
        onChange={evt=> setDescription(evt.target.value)}/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Button type="submit" variant="contained" color="success" 
            fullWidth
          >Add</Button>
          </Grid>
          </Grid>
        </form>
        </Box>
        </ThemeProvider>)
};

export default InputTodo;