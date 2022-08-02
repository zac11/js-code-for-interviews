/**
 * Approach 1 - Using the forEach method
 */
let arr = [5,0,9,10,22,6,98,109];
temp = 0;
arr.forEach((element)=>{
    if(temp<element){
        temp = element;
    }
});
console.log(`The largest number in arr is ${temp}`);


// testing this with another array

let arr2 = [5, 2, 67, 37, 85, 19, 10];
temp = 0;
arr2.forEach((arrelement)=>{
    if(temp < arrelement){
        temp = arrelement;
    }
});
console.log(`The largest number is : ${temp}`);


/** 
 * Approach 2 - using reduce method
*/

let newarr = [5, 2, 67, 317, 815, 19, 10,105,213,567];
let largestnum = newarr.reduce((a,c)=>{
    return Math.max(a,c);
});

console.log(`The largest number is : ${largestnum}`);