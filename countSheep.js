function countSheep(arrayOfSheep) {
    const sheepCounter = arrayOfSheep.filter(function (sheep){
       return sheep === true;
    });
    return sheepCounter.length;
}


console.log(countSheep(
    [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));