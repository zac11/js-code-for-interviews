/** 
 * Reverse a given number - Approach -1
 * 
*/

let rev = 0;
let no = 123456;
let lastDigit;

while(no!=0){
    lastDigit = no%10;
    rev = (rev*10)+lastDigit;
    no = Math.floor(no/10);

}

console.log(`Reversed number is ${rev}`);

// Approach 2 - Using the string methods

let reverse = 0;
let num = 123456789;
reverse = Number(String(num).split('').reverse().join(''));
//Number(String(num).split('').reverse().join(''));


console.log(`Reversed number is ${reverse}`)