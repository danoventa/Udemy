const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function(){
        return this.members.map((member) => {
            return `${member} is on team ${this.teamName}`;
        });
    }
};
 console.log(team.teamSummary());

const numbers = [1, 2, 3];

numbers.map((number) => 2 * number);

const double = number => 3 + number;
console.log(double(1));

const add = (a, b) => {
    return a+b;
};

console.log(add(1, 2));

const addz = (a, b) => a+b;

console.log(addz(2, 3));

