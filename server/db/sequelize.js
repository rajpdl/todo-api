const { Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:7252@localhost:5432/Demo');

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
        type: DataTypes.BIGINT,
        defaultValue: null
    }
});

Todo.sync();

module.exports = { Todo };
