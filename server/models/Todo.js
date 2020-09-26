const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
        minlength: 4
    },
    completedAt : {
        type: Number,
        default: null
    }
});

module.exports = {Todo};

