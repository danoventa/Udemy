// ES 6 style classes
class Card {
    constructor({title}){
        this.title = title;
    }

    charge(){
        return 'swipe';
    }
}

class RewardsCard extends Card{
    constructor(options){
        super(options);
        this.color = options.color;
    }
    rewards(){
        return "points";
    }
}

const card = new Card( {title:'Viso'});
console.log(card);
console.log(card.charge());

const reCard = new RewardsCard({color:'blu',title:'Viso'});
console.log(reCard);
console.log(reCard.rewards());


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