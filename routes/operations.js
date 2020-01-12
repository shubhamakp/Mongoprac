const express = require('express')

const app =express.Router()
const todos = require('../models/todo')

app.post('/todo',(req,res) =>{
    const todo = req.body.todo
    // const Todos = {
    //     desc : todo,
    //     time : new Date()
    // }
    todos.create({
        description : todo,
        time : new Date()
    }).then(() =>{
        console.log("inserted")
    })
    .catch((err) =>{
        console.log(err)
    })

    todos.findAll()
    .then((Todos) =>{
       // console.log(Todos)
        res.render('todos',{Todos})
    }).catch((err) =>{
        console.log(err)
    })
   
})

module.exports = app;
