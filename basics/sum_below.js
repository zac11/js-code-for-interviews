/**
 * JavaScript program to find the sum of all even numbers below a given number
 * 
 */

function isEven(n){
    return (n%2)==0
}
function findSum(no){
    let sum = 0;
    for(var i = 0;i<=no;i++){
        if(isEven(i)){
            sum+=i;
        }
    }
    return sum;
}

console.log(`Sum up to 100 is ${findSum(100)}`);