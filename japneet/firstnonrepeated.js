function findFirstNonRepeatedChar(str) {
    const charCount = {};
  
    // Populate charCount object with frequency count of each character
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
  
    // Loop through string again and return first character with frequency count of 1
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    // If no non-repeated character found, return null
    return null;
  }

  console.log(findFirstNonRepeatedChar("this is the second push"));
