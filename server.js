const express = require('express')
const server = express()
const path = require('path')
const sequelize = require('./db')

server.use(express.json())
server.use(express.urlencoded({extended : true}))

server.set('view engine', 'ejs')
server.set('views','views')

server.use(express.static(__dirname + 'public'))
const route = require('./routes/operations')

server.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname , 'views', 'index.html'))
})

server.use('/routes',route)

sequelize.sync()
.then((result) =>{
    //console.log(result)
    server.listen(3000)
})
.catch((err) =>{
    console.log(err)
})
