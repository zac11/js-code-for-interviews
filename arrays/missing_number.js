let missing_array = [1,2,3,4,6];
let missing_number=[];

for(var i=1;i<missing_array.length;i++){
    if(missing_array[i]-missing_array[i-1]!=1){
        var x = missing_array[i]-missing_array[i-1];
        var j=1;
        while(j<x){
            missing_number.push(missing_array[i-1]+j);
            j++;
        }
    }
}

console.log(missing_number);

