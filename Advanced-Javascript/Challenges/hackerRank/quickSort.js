'use strict';

function quickSort(array){
    if(array.length <= 1){
      return array
    }
    let pivot = array[array.length -1];
    let left = [];
    let right = [];
  
    for(let ele of array.slice(0, array.length-1)){
      ele < pivot ? left.push(ele) : right.push(ele)
    }
    console.log(left);
    console.log(right);
    return [...quickSort(left), pivot, ...quickSort(right)]
  }

module.exports = quickSort;