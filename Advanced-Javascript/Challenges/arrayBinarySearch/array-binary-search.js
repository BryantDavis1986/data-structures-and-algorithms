'use strict'

function binarySearch(array, key){

let low = 0;
let high = array.length - 1;

while(low <= high){

    let mid = Math.round((low + high) / 2);

    if(key === array[mid]){
        return mid;
    }
    else if(key < array[mid]){
        high = mid - 1;
    }
    else{
        low = mid + 1;
    }
}
return -1;
}

module.exports = binarySearch;