const arr = [5, 3, 1, 7, 9, 12, 36, 0];
arr.sort((a, b) => a - b); // [0, 1, 3, 5, 7, 9, 12, 36]
const min = arr[0]; // 1
const max = arr[arr.length - 1]; // 9
console.log(min)
console.log(max)