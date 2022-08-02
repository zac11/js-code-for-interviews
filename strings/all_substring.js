/** 
 * Get all substrings of a string
 * 
 * 
*/

function getAllSubstring(str){
    let i, j , result = [];
    for(i=0;i<str.length;i++){
        for(j=i+1;j<str.length+1;j++){
            result.push(str.slice(i,j));
        }
    }
    return result;
}

let theString = 'kalaakharbhainsbarabar';
console.log(getAllSubstring(theString));

/*
let allSubstr = str => {

}
*/