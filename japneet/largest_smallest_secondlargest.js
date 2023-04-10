const arr = [5, 3, 1, 7, 9, 12, 36, 0];
arr.sort((a, b) => a - b); // [0, 1, 3, 5, 7, 9, 12, 36]
const min = arr[0]; // 0
const max = arr[arr.length - 1]; // 36
const secondmax = arr[arr.length-2]
console.log(min)
console.log(max)
console.log(secondmax);