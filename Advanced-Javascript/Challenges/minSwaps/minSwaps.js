'use strict';

function minimumSwaps(array){
    let swaps = 0;
for(let i = 0; i < array.length; i++){
    while(array[i] !== i+1){
        console.log('scruv');
        let temp = array[array[i]-1];
        array[array[i]-1] = array[i];
        array[i] = temp; 
        // if(array[i] === i+1){
            swaps++;
        // }
    }
}
// console.log(swaps)
return swaps;
  }

module.exports = minimumSwaps;
  