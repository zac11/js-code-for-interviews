/** 
 * Find if a number is even or odd
*/

function isOdd(num) { return num % 2;}
console.log("1 is " + isOdd(1));
console.log("2 is " + isOdd(2));
console.log("3 is " + isOdd(3));
console.log("4 is " + isOdd(4));


/** 
 * Approach 2 - to use boolean output using the bitwise operation
 */
 var isOddNumber = x =>{
     return (x&1) ;
 };

 console.log(`55 is ${isOddNumber(55)}`);
 console.log(`56 is ${isOddNumber(56)}`);


 var isEven = x1 => {
     return !(x1&1);
 }

 console.log(`55 is ${isEven(55)}`);
 console.log(`56 is ${isEven(56)}`);
