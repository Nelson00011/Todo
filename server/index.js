const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
const pool = require("./db");

//Mid-ware
app.use(cors());
app.use(express.json());

//ROUTES
//CRUD
app.post("/todos", async (req,res)=> {
    try{
    const { description } = req.body;
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)", [description])
    console.log(description)
    } catch(err){
        console.error(err.message);
    }
})

app.get("/todos", async(req, res)=>{
    try{
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err){
        console.error(err.message)
    }
})




app.listen(PORT, () => {
console.log(`server has started on port ${PORT}`)
})