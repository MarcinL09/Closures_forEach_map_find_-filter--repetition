// write isStringInArray using the find function

function isStringInArray(array, callback) {
    const check = array.find(function(string){
        return string === callback;
    });
    return check !== undefined;
}

console.log(isStringInArray(['Orange', 'Apple'], 'Apple')); // true
console.log(isStringInArray(['Onion', 'Cabbage'], 'Potato')); // false