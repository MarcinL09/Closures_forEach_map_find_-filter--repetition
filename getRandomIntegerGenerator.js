// create the getRandomIntegerGenerator function. It should return a function that returns a
// random integer between two provided numbers.

function getRandomIntegerGenerator(minimumNumber, maximumNumber) {
    return function() {
        return Math.random() * (maximumNumber - minimumNumber) + minimumNumber;
    }
}

const getRandomDigit = getRandomIntegerGenerator(0, 9);
console.log(getRandomDigit()); // random number between 0 and 9
console.log(getRandomIntegerGenerator(-10, 10)()); // random number between -10 and 10