// write findUserWithFullName using the find function

const usersArray = [
    {
        firstName: 'John',
        lastName: 'Smith',
        heightInCm: 184
    },
    {
        firstName: 'Kate',
        lastName: 'Williams',
        heightInCm: 169
    }
]

function findUserWithFullName(users, name) {
    return users.find(function(user){
        return `${user.firstName} ${user.lastName}` === name;
    });
}
const kate = findUserWithFullName(usersArray, 'Kate Williams');
console.log(kate.heightInCm); // 169