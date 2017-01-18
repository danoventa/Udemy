// ES 6 style classes
class Card {
    constructor({title}){
        this.title = title;
    }

    charge(){
        return 'swipe';
    }
}

const card = new Card( {title:'Visa'});
console.log(card);
console.log(card.charge());

// Pre ES6
function Car(options){
    this.title = options.title;
}

Car.prototype.drive = function(){
    return 'vroom';
}

const car = new Car({title: 'Foccus'});
console.log(car.drive());
console.log(car);