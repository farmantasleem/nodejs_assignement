const express = require("express");  // common js syntax
const  validateTodo  = require("./middlewares/validateTodo");


const app=express();
app.use(express.json())
let todo=[]

// get todo 
app.get("/",(req,res)=>{
    res.send(JSON.stringify(todo))
})

// add todo 

app.post("/add",validateTodo,(req,res)=>{
    todo.push(req.body)
    res.status(200).send({msg:"Todo Added Successfully",todo})
})

//update todo

app.patch("/update/:id",(req,res)=>{
    const todoId=req.params.id;
    const newArray=todo.map((e,i)=>{
        if(i==todoId){
            return {...e,...req.body}
        }
        return e
    })
    todo=newArray;
    res.status(200).send({msg:"Todo Update Successfully",todo})
})


//delete

app.delete("/delete/:id",(req,res)=>{
    const todoId=req.params.id;
    const newArray=todo.filter((e,i)=>{
        if(i!=todoId){
            return e
        }
    })
    todo=newArray;
    res.status(200).send({msg:"Todo Deleted Successfully",todo})
})


app.listen(8081,()=>{
    console.log("Server Started on Port NO: 8081")
})