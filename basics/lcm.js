/** 
 * Find the LCM of two numbers
*/

let find_lcm = (first,second)=>{
    let larger_value = first > second ? first : second;
    let smaller_value = first < second ? first : second;

    let lcm = larger_value;
    while(lcm % smaller_value !== 0){
        lcm +=  larger_value;
    }
    return lcm;

}

console.log(`LCM of 5 and 8 is ${find_lcm(5,8)}`);