/** 
 * Multiply two matrices
*/

let A = [[8, 3], [2, 4], [3, 6]];
//let B = [[1, 2, 3], [4, 6, 8]];
let B = [[1,4],[3,6],[7,6]]

let MatrixProd = (A, B) =>
  A.map((row, i) =>
    B[0].map((_, j) =>
      row.reduce((acc, _, n) =>
        acc + A[i][n] * B[n][j], 0
      )
    )
  )

  console.table(MatrixProd(A,B));