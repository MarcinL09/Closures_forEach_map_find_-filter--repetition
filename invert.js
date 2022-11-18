function invert(array) {
    return array.map(function(number){
        return -number;
    });
}

console.log(invert([1,2,3,4,5])); // [-1,-2,-3,-4,-5]
console.log(invert([1,-2,3,-4,5])); // [-1,2,-3,4,-5]
console.log(invert([])); // []