function findRepeatingElements(arr) {
    const freqCount = {};
    const repeatingElements = [];
  
    // Populate frequency count of each element in array
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      freqCount[element] = freqCount[element] ? freqCount[element] + 1 : 1;
    }
  
    // Loop through frequency count object and add repeating elements to array
    for (const element in freqCount) {
      if (freqCount[element] > 1) {
        repeatingElements.push(parseInt(element));
      }
    }
  
    return repeatingElements;
  }
  
  console.log(findRepeatingElements("TTHiis haas ssome repeating"));