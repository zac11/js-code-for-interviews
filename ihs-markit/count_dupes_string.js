/**
 * Given a string "programming", find the alphabets that are repeating and the count
 * of how many times they are repeated
 */

let counter = str =>{
    return str.split('').reduce((total,letter)=>{
        total[letter]? total[letter]++ : total[letter]=1
        return total;
    },{});
};

console.log(counter("programming"));

// now this can be simplified in another way using ES6 syntax

//const dupes = s => [...s].reduce((a,c)=>(a[c]=a[c]+1||1 && a, {})
const dupes = s => [...s].reduce((a, c) => (a[c] = a[c] + 1 || 1) && a, {})
console.log(dupes("differently")); 
