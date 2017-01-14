/**
 * Created by danny on 1/14/2017.
 */


const defaultColors = ['red', 'green'];
const userFavoriteColors = ['organge','yellow'];
const fallColors = ['fire red', 'fall orange'];


console.log(['blue',...fallColors,...defaultColors, ...userFavoriteColors]);


function addNumbers(...numbers){
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));