angular.module('TestApp', []);

angular.module('TestApp')
    .controller('MainController', ctrlFunc);

function ctrlFunc(){
    this.message = 'Hellow';

    this.people = [
        {
            name: 'Jose Doez'
        },
        {
            name: 'Julia Does'
        },
        {
            name: 'Jimmy Doeche'
        }
    ]
}