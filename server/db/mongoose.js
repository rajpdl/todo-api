// const mongoose = require('mongoose');
const { Sequelize, DataTypes} = require('sequelize');

// mongoose.connect(process.env.MONGODB_URL || 'postgres://postgres:7252@localhost:5432/Demo',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

const sequelize = new Sequelize(process.env, 'postgres://postgres:7252@localhost:5432/Demo');


// .then((data) => {
//     console.log("it is workign");
// })
// .catch(err => {
//     console.log('Error occurred during ', err);
// });

module.exports = {sequelize};