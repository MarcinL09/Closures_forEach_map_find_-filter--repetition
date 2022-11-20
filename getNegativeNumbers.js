// write the getNegativeNumbers function using the filter function

function getNegativeFunction(arrayOfNumbers) {
    const arrayOfNegativeNumbers = arrayOfNumbers.filter(function(negativeNumber){
       return negativeNumber < 0;
    });
    return arrayOfNegativeNumbers;
}

console.log(getNegativeFunction([1, -5, -3, 12, -152])); // [-5, -3, -152]