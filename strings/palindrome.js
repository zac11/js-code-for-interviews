/** 
 * Check if a string is palindrome
*/


 let isPalin = word =>{
    var i,wlength = word.length-1,comparelength = wlength/2;
    console.log(`${wlength} and ${comparelength}`)
 
    for (i = 0; i <= comparelength ; i++) {
      if (word.charAt(i) != word.charAt(wlength-i)) {
         return false;
      }
    }
    return true;
 }

 console.log(isPalin('rotator'));
 console.log(isPalin('ammama'));

// https://stackoverflow.com/questions/22111507/how-to-write-palindrome-in-javascript