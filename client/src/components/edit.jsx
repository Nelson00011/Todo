import React from "react";
import { useState } from 'react';
import { Box, Button, TextField , Modal, Typography, Grid } from '@mui/material';
// import IconButton from '@mui/material';
// import ClearIcon from '@mui/icons-material/Clear';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid 0000ff',
    boxShadow: 24,
    p: 4,
  };

const EditTodo = ({ todo, id }) => {
    const[description, setDescription]=useState(todo.description)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const updateDescription = async (evt) => {
      try{
        const body = { description };
        const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
          method: "PUT", 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        })
        window.location= "/"
      } catch (err){
        console.error(err.message)

      }
    }

    return (
        <div>
        <Button variant="contained" onClick={handleOpen}>Edit</Button>
        <Modal
          open={open}
          onClose={handleClose}
          onClick={()=> setDescription(todo.description)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
       
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Todo Item {id}
            </Typography>
            <hr/>
            
            <Grid container spacing={1} width="100%" margin="10px auto">
            <TextField id="modal-modal-description" 
            fullWidth
            value={description} 
            align="center"
            onChange={evt=> setDescription(evt.target.value)} />
            </Grid>
            
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <Button onClick={updateDescription} 
            fullWidth
            color='success' variant="outlined">Edit</Button>
            
            </Grid>
            <Grid item xs={12} sm={6}>
            <Button onClick={handleClose} 
            fullWidth
            color="error" variant="outlined">Cancel</Button>
            </Grid>
            </Grid>
            </Box>
        </Modal>
        </div>
        )
};

export default EditTodo;