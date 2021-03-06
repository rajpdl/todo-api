// const { mongo } = require('mongoose');
// const {mongoose} = require('./db/mongoose');
const { Todo } = require('./db/sequelize');
// const {Todo} = require('./models/Todo');

const express = require('express');
const bodyParser = require('body-parser');
// const { ObjectID } = require('mongodb');
const _ = require('lodash');
const { isBoolean } = require('lodash');

var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});
app.use(express.static('public'));


app.get('/', (req, res) =>{
    res.send('index.html')
});

app.post('/todo',(req, res) => {
   var text = req.body.text;
//    Todo.create({
//        text: text
//    }).then( todo => {
//     res.send(todo);
//    }).catch( error => {
//     res.status(404).send('Unable to connect to the server post method');
//    });
    // console.log('Todo post is called...', new Date().getTime());
//    var todo = new Todo({
//        text: text
//    });
//    todo.save().then(todo => {
//     res.send(todo);
//    }).catch(error => {
//     res.status(404).send('Connection is not established');
//    });
    var text = req.body.text;
    if(text === "") {
        res.status(400).send('Please Enter Something');
    }
    Todo.create({
        text: text
    }).then(user => res.send(user))
        .catch(error => res.status(404).send('Error occurred.'));

});

app.get('/todos', (req, res) => {
    // Todo.find().then( todos => 
    //     res.send(todos)
    // ).catch(error => {
    //     res.status(404).send('Unable to connect to the server');
    // })
    Todo.findAll().then(response => res.send(response)).catch(error => res.sendStatus(404));
});

app.get('/todo/:id', (req, res) => {
    var id = req.params.id;

    // if(!ObjectID.isValid(id)) {
    //     return res.status(400).send('Id is invalid');
    // }
    // Todo.findById(id).then(
    //     todo => {
    //         if(!todo) {
    //             return res.status(400).send("Not returning anything");
    //         } 
    //         res.send(todo);
    //     }
    // ).catch(error => {
    //     res.status(404).send('Unable to connect to the server');
    // });
    Todo.findByPk(id).then(user => user? res.send(user): res.sendStatus(404)).catch(err => res.status(404).send(err));
});

app.delete('/todo/:id', (req, res) => {
    var id = req.params.id;

    // if(!ObjectID.isValid(id)) {
    //     return res.status(400).send('Id is invalid');
    // }
    // Todo.findByIdAndDelete(id).then(
    //     todo => {
    //         if(!todo) {
    //             return res.status(400).send("Not returning anything");
    //         } 
    //         res.send(todo);
    //     }
    // ).catch(error => {
    //     res.status(404).send('Unable to connect to the server');
    // });
    Todo.destroy({
        where: {
            id: id
        }
    }).then(response => res.sendStatus(response == 1? 200 : 400)).catch(error => res.send(error));
});

app.post('/todo/:id', (req, res) => {
    var id = req.params.id;
    // if(!ObjectID.isValid(id)) {
    //     return res.status(400).send('Id is invalid');
    // }

    var body = _.pick(req.body, ['text', 'completed', "completedAt"]);

    if( _.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getMilliseconds();
    }else{
        body.completedAt = null;
    }
    // Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then(todo => {
    //     console.log(body);
    //     res.send(todo);
    // }).catch(error => {
    //     res.status(404).send('Unable to connect to the network.');
    // })
    console.log(body);
    (async() => {
        await Todo.update(body,{
            where: {
                id: id
            }
        });
    })();
        res.send("It is finished");
    // res.send(body);

})

app.listen(port, () => {
    console.log(`Starting server on port ${port}`);
});