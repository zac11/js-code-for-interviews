const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);


const arr1 = [23,45,34,56,101];
const sumofelements = arr1.reduce((accumulator, currentValue)=> accumulator+currentValue,0);
console.log(sumofelements);

const arr3 = [1, 2, 3, 4, 5];

const newArray = arr3.filter(element => element % 2 === 0);

console.log(newArray);


