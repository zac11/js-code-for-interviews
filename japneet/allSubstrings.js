// Print all substrings of a string

function printAllSubstrings(str) {

    // empty array to store the substrings
    const result= [];
    

    // nested for loop to generate combinations of strings

    for(let i = 0; i< str.length;i++){

        for(let j= i+1; j<str.length; j++){

            result.push(str.slice(i,j));

        }
    }

    return result;
    
}


console.log(` All combinations of substring ----> ${printAllSubstrings("Hello World")}`);



/*
*
*All combinations of substring ----> H,He,Hel,Hell,Hello,Hello ,Hello W,Hello Wo,Hello
 Wor,Hello Worl,e,el,ell,ello,ello ,ello W,ello
 Wo,ello Wor,ello Worl,l,ll,llo,llo ,llo W,llo Wo,llo Wor,llo Worl,l,lo,lo ,lo
  W,lo Wo,lo Wor,lo Worl,o,o ,o W,o Wo,o Wor,o Worl, ,
   W, Wo, Wor, Worl,W,Wo,Wor,Worl,o,or,orl,r,rl,l
*
*
*
*/

