var Todos = require('../models/todoModels');

module.exports = function(app){
    app.get('/api/setupTodos', function(request, response){
        // seed database
        var starterTodos = [
            {
                username: 'test',
                todo: 'buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username:'test',
                todo:'learn node',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function(err, results){
            response.send(results);
        })
    })
}