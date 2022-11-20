// create the getRandomCharacterGenerator function. It should return a function that returns a
// random character from the provided string.

function getRandomCharacterGenerator(string) {
    return function() {
        const arrayOfString = string.split("");
        const random = arrayOfString.length;
        return arrayOfString[Math.floor(Math.random() * random)];
    }
}

const RandomDigit = getRandomCharacterGenerator('0123456789');
console.log(RandomDigit()); // returns a random string that contains a single digit
const RandomABC = getRandomCharacterGenerator('abcABC');
console.log(RandomABC()); // returns a random string that is a, A, b, B, c, or C