/**
 * Add two , two-dimensional matrix 
 */

 let a = [[1, 2], [3, 4]];
 let b = [[2, 3], [4, 5]];
 let c = [[], []];
 for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
        c[i][j] = a[i][j] + b[i][j];
    }
 }
 console.log(c);
 

 // Very nice explanation given here https://medium.com/swlh/learning-multidimensional-array-addition-in-javascript-890a75bc2c29