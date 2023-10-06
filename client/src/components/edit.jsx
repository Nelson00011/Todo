import React from "react";
import { useState } from 'react';
import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
// import IconButton from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const EditTodo = ({id, description}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
        <Button onClick={handleOpen}>Edit</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/* <IconButton onClick={handleClose} display="inline" align="right">
            <ClearIcon />
            </IconButton> */}
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Todo Item {id}
            </Typography>
            <hr/>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              { description }
            </Typography>
            <Button onClick={handleClose} color='warning'>Cancel</Button>
            </Box>
        </Modal>
        </div>
        )
};

export default EditTodo;