/** 
 * Transpose of a matrix
*/

let arr = [
    [1,2,3],
    [1,2,3],
    [1,2,3],
]

let output = arr[0].map((_, colIndex) => arr.map(row => row[colIndex]));

console.table(output);


// Approach 2
function transposeMatrix(matrix){
    return matrix[0].map((col,i)=> matrix.map(row => row[i]));

}

let newarr = [
    [0,4,5],
    [9,7,2],
    [8,6,1]
]

console.table(transposeMatrix(newarr));

// https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript