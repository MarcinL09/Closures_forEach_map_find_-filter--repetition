// create the getPrefixedStringGenerator function. It should return a function that returns a string
// with the added prefix.

function getPrefixedStringGenerator(prefix) {
    return function(string) {
        return `${prefix}${string}`;
    }
}

const prefixStringWithMister = getPrefixedStringGenerator('Mr.');
console.log(prefixStringWithMister(' John')); // Mr. John
console.log(prefixStringWithMister(' Adam')); // Mr. Adam
const prefixStringWithMiss = getPrefixedStringGenerator('Ms.');
console.log(prefixStringWithMiss(' Kate')); // Ms. Kate
console.log(prefixStringWithMiss(' Julie')); // Ms. Julie
const prefixStringWithNegative = getPrefixedStringGenerator('un');
console.log(prefixStringWithNegative('happy')); // unhappy
console.log(prefixStringWithNegative('productive')); // unproductive
console.log(prefixStringWithNegative('fair')); // unfair