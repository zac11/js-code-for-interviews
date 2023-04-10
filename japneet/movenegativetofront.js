// Move negative to first of the array


function moveNegativeNumbersToFront(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      if (arr[left] < 0) {
        left++;
      } else if (arr[right] >= 0) {
        right--;
      } else {
        // Swap elements
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
  
        left++;
        right--;
      }
    }
  
    return arr;
  }

  let arr = [-1,2,-4,0,3,-4,2,-6];
  console.log(moveNegativeNumbersToFront(arr));