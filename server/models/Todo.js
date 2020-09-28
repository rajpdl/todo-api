const { sequelize, DataTypes } = require('sequelize');

// const mongoose = require('mongoose');

// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//     },
//     completed: {
//         type: Boolean,
//         default: false,
//         minlength: 4
//     },
//     completedAt : {
//         type: Number,
//         default: null
//     }
// });

var Todo = sequelize.define('Todo', {
    text: {
        type: DataTypes.STRING,
        required: true
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    completedAt: {
        type: DataTypes.NUMBER,
        defaultValue: null
    }
});

module.exports = {Todo};

