/** 
 * Replace one or all instances of a char/string 
*/

let str = "1 abc bhd abc bed nef abc nef"

// Replace first occurance
let newstr = str.replace('abc','xyz');

// Replace all occurance
let newstr1 = str.replaceAll('abc','123');

console.log(`${newstr}`);
console.log(`${newstr1}`);


// https://stackoverflow.com/questions/1144783/how-do-i-replace-all-occurrences-of-a-string-in-javascript