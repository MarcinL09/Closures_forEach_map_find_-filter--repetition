// write the forEach function from scratch using a for loop

function forEach(array, callback) {
    for (let i = 0; i < array.length; ++i) {
        callback(array[i], i);
    }
}

const vegetables = ['Carrot', 'Cabbage', 'Onion'];
function printVegetable(vegetable, index) {
    console.log(vegetable, index);
}
forEach(vegetables, printVegetable);
// Carrot 0
// Cabbage 1
// Onion 2
const fruits = ['Apple', 'Orange', 'Watermelon'];
forEach(fruits, function(fruit, index) {
        console.log(fruit, index);
    }
)
// Apple 0
// Orange 1
// Watermelon 2