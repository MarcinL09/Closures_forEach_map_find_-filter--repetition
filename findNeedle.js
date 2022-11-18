function findNeedle(haystack) {
    const find = haystack.findIndex(function(element){
       return element === "needle";
    });
    return `found the needle at position ${find}`;
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));// "found the needle at position 5"