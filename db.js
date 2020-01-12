const Sequelize = require('sequelize')

const sequelize = new Sequelize('todos' , 'root','mypass',{

    host : 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;