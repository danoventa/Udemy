/**
 * Created by danny on 1/14/2017.
 */

function addNumbers(numbers){
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

console.log(addNumbers([1, 2, 3, 4, 5]));