// write the getDeltaFunction
// delta = b*b - 4*a*c

function getDeltaFunction(firstObjectOfNumbers) {
    return function(secondObjectOfNumbers = {}) {
        const a = secondObjectOfNumbers.a ?? firstObjectOfNumbers.a;
        const b = secondObjectOfNumbers.b ?? firstObjectOfNumbers.b;
        const c = secondObjectOfNumbers.c ?? firstObjectOfNumbers.c;
        return b * b - 4 * a * c;
    }
}

const getDelta = getDeltaFunction({ a: 1, b: 2, c: 3 });
console.log(getDelta()); // -8

console.log(getDelta({ b: 12 })); // 132
console.log(getDelta({ a: 4, b: 10 })); // 52
console.log(getDelta({ a: 4, b: 0 })); // -48
// The nested function returns NaN if any of the arguments are missing
console.log(getDeltaFunction({ a: 1, c: 3 })()); // NaN
console.log(getDeltaFunction({ a: 1, c: 3 })({ b: 15 })); // 213