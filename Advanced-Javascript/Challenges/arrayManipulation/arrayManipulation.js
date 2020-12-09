'use strict';

function arrayManipulation(n, queries) {
    console.log(n);
    console.log(queries);
let newArray = new Array(n).fill(0);
let count = 0;
for(let i = 0; i < queries.length; i++){
    for(let j = queries[i][0]-1; j <= queries[i][1]-1; j++){
        if(newArray[j] !== null){
            newArray[j] += queries[i][2];
            if(newArray[j] > count){
                count = newArray[j];
            }
        }
        console.log(count);
    }
}
console.log(newArray);
return count;     
}