/*
* Count the occurence of each element in an array
*/

let initialArray = [1, 2, 3, 4, 5, 1, 2, 3, 1];
let countofOccurence = initialArray.reduce((map, element)=>{
    map[element] = (map[element]|| 0)+1;
    return map;
}, {});

for( let key in countofOccurence){
    console.log(`Number ${key} occurs ${countofOccurence[key]} times in this array` )
}
