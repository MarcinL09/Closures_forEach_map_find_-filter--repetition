function getAverage(marks){
    let sumOfMarks = 0;
    marks.forEach(function(mark){
        return sumOfMarks = sumOfMarks + mark
    });
    return Math.floor(sumOfMarks / marks.length);
}

console.log(getAverage([2,3,4,6,2,3,4]));