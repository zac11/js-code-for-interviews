// Print first letter of each word present in string


function printFirstLetterofString(str){

    // First of all split the string into array of words

    const words = str.split(' ');

    // Get the first letter of each of the words using charAt() method
    const firstLetters = words.map(word => word.charAt(0));

    // Join the letters into string

    const result = firstLetters.join(' ');

    return result;

}


console.log(` The first letters are---> ${printFirstLetterofString(' Mary had a little lamb')}`);


/*
* The first letters are--->  M h a l l
*/