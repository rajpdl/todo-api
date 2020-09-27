const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/TodoApp',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((data) => {
    console.log("it is workign");
})
.catch(err => {
    console.log('Error occurred during ', err);
});

module.exports = {mongoose};