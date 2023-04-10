function reverseWordsInSentence(sentence) {

    // Split sentence into an array of words
    const words = sentence.split(' ');
  
    // Reverse each word in the array
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
  
    // Join the reversed words into a sentence
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  

  console.log(`Reversed word is--->  ${reverseWordsInSentence('This is a simple sentence')}`);

  /* 
  * Reversed word is--->  sihT si a elpmis ecnetnes
  */