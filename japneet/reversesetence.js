// Reverse a sentence


function reverseSentence(sentence) {
    // Split sentence into an array of words
    const words = sentence.split(' ');
  
    // Reverse the order of the words in the array
    const reversedWords = words.reverse();
  
    // Join the reversed words into a sentence
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }

  console.log(`Reversed sentence is ---> ${reverseSentence("How I met your mother")}`);


  /*
  * Reversed sentence is ---> mother your met I How
  */