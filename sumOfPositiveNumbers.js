function positiveSum(arrayOfNumbers) {
    let sum = 0;
    arrayOfNumbers.forEach(function(positiveNumber){
        if (positiveNumber > 0) {
            return sum = sum + positiveNumber;
        }
    });
    return sum;
}

console.log(positiveSum([1,2,3,4,5,8]));