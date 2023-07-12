const regex = /(:|;)(?:-?[\)|D])?/
const sentence = "Hello! How are you :) I am great :D";
const emojis = sentence.match(regex);
const numberOfEmojis = emojis ? emojis.length : 0;
console.log(numberOfEmojis); // 2
