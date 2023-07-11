/**
 * Given a string, return the string with the first letter of 
 * each word capitalised
 */

function capitaliseWords(str) {
    const words = str.split(' ');
    const capitaliseWords = [];

    for(let word of words){
        const firstLetter = word.charAt(0).toUpperCase();
        const rest = word.slice(1);
        capitaliseWords.push(firstLetter+rest);
    }
    return capitaliseWords.join(' ');
    
}


function capitaliseWords2(str) {
    const new_words = str.split(' ');
    const capitalWords = new_words.map((word)=>{
        const firstLetter = word[0].toUpperCase();
        const restLetter = word.slice(1);

        return firstLetter+ restLetter;
    });

    return capitalWords.join(' ');

}

const str = `this is epam interview`;
    const capitalised_words = capitaliseWords(str);
    const capitalised_words2 = capitaliseWords2(str);
    console.log(capitalised_words)
    console.log(capitalised_words2)