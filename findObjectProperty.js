/*
create the findObjectProperty that returns the name of a property from an object•
it works similarly to the find built into JavaScript, but works with an object instead of an
array •if there is no matching property name, return undefined
*/

function findObjectProperty(object, callback) {
    const properties = Object.keys(object);
    for (let i = 0; i < properties.length; ++i) {
        const property = properties[i];
        const propertyValue = object[property];
        if (callback(propertyValue)) {
            return property;
        }
    }
}

const redApple = {
    color: 'red',
    weightInGrams: 150
}
const propertyName = findObjectProperty(redApple, function(propertyValue) {
    return propertyValue === 'red';
})
console.log(propertyName); // color
const john = {
    name: 'John',
    bestFriend: {
        name: 'Adam'
    }
}
const adamPropertyName = findObjectProperty(john, function(propertyValue) {
    return propertyValue && propertyValue.name === 'Adam';
})
console.log(adamPropertyName); // bestFriend