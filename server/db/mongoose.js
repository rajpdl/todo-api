const mongoose = require('mongoose');

var mongodb_url = process.env.MONGODB_URL || 'mongodb://localhost:27017/TodoApp';

mongoose.connect(mongodb_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

console.log(mongodb_url);

module.exports = {mongoose};