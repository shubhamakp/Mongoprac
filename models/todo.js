const Sequelize = require('sequelize')

const sequelize = require('../db')

const todos = sequelize.define('todos',{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    description : {
        type : Sequelize.STRING,
        allowNull : false
    },
    time : {
        type: Sequelize.DATE,
        allowNull : false
    }
})

module.exports = todos