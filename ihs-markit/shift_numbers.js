/**
 * Given the array [1,0,1,0,0,1,1], move all zeroes to right and 1 to left
 */


let arr = [1,0,1,0,0,1,1];
let newarr = arr.sort((a,b)=>b-a).reverse();

console.log(newarr);
