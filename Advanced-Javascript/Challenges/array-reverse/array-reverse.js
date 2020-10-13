'use strict';

function reverseArray(array){
    const array2 = [];
    let count = 0;
    for(let i = array.length-1; i >= 0; i--){
        array2[count] = array[i];
        count++;
    }
    return array2;
}

module.exports = reverseArray;