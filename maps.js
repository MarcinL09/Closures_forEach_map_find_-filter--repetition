function maps(arrayOfNumbers){
    const arrayOfDoubledNumbers = arrayOfNumbers.map(function (number){
        return number * 2;
    });
    return arrayOfDoubledNumbers;
}

console.log(maps([1, 2, 3])); // [2, 4, 6]