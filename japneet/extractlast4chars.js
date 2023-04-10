//Extract Last 4 characters of any String

//Approach 1 using Substr

function getLast4CharsApproach1(str) {
  if (str.length < 4) {
    return str;
  }
  return str.substr(-4);
}

function getLast4CharsApproach2(str) {
  if (str.length < 4) {
    return str;
  }
  return str.slice(-4);
}

console.log(getLast4CharsApproach1("Sentence"));
console.log(getLast4CharsApproach2("SentenceAgain"));