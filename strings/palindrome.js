/** 
 * Check if a string is palindrome
*/


 let isPalin = word =>{
    var i,wlength = word.length-1,comparelength = wlength/2;
 
    for (i = 0; i <= comparelength ; i++) {
      if (word.charAt(i) != word.charAt(wlength-i)) {
         return false;
      }
    }
    return true;
 }

 console.log(isPalin('malayalam'));
 console.log(isPalin('ammama'));

