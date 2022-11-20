// write the getSquaredNumbers function using map

function getSquaredNumbers(arrayOfNumbers) {
    const arrayOfSquaredNumbers = arrayOfNumbers.map(function (number){
        return number * number;
    });
    return arrayOfSquaredNumbers;
}

console.log(getSquaredNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]
console.log(getSquaredNumbers([6, 7, 8, 9, 10])); // [36, 49, 64, 81, 100]