/**
 * Square pattern in JS
 *      ******
 *      ******
 *      ******
 *      ******
 * 
 */

let n = 10;
let str = '';
for(let i =0;i<n;i++){
    for(let j=0;j<n;j++){
        str+= "*";
    }
    str+= '\n'
}

console.log(str)