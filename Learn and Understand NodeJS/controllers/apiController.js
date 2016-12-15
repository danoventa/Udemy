var Todos = require('../models/todoModels');
var bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.get('/api/todos/:uname', function(request, response){
        Todos.find({username: request.params.uname}, function(err, todos){
            if(err) throw err;

            response.send(todos);
        })
    })

    app.get('/api/todos/:id', function(request, response) {
        Todos.findById({_id: request.params.id}, function (err, todo) {
            if (err) throw err;

            response.send(todo);
        });
    });

    app.post('/api/todos', function(request, response){

        if(request.body.id) {

            Todos.findByIdAndUpdate(request.body.id, {
                    todo: request.body.todo, isDone: request.body.isDone, hasAttachment: request.body.hasAttachment
                }
                , function (err, todo) {
                    if (err) throw err;

                    response.send('Success');
                });
        }else{
            var newTodo = Todos({
                username: 'test',
                todo:request.body.todo,
                isDone: request.body.isDone,
                hasAttachment: request.body.hasAttachment
            });
            newTodo.save(function(err){
                if (err) throw err;
                response.send('Success');
            })
        }
    });
    app.delete('/api/todos', function(request, response){
        Todos.findByIdAndRemove(request.body.id, function(err){
            if(err) throw err;
            response.send('Success');
        })
    });
}