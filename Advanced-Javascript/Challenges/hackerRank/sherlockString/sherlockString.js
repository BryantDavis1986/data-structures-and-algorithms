'use strict';

function isValid(s){
    if(s.length === 0){
        return 'NO';
    }
    if(s.length === 1){
        console.log('YES')
        return 'YES';
    }
    let newString = s.split('').sort();
    let currentChar = newString[0];
    let charCount = 0;
    let countArray = [];
    for(let char of newString){
        console.log(char);
        if(currentChar === char){
            charCount++;
        }
        if(currentChar !== char){
            countArray.push(charCount);
            charCount = 1;
        }
        currentChar = char;

    }
    if(currentChar === newString[newString.length-2]){
        // charCount++;
        countArray.push(charCount);
    }
    if(currentChar !== newString[newString.length-2]){
        countArray.push(charCount);
        charCount = 1;
    }
    
    charCount = 0;
    let newCountArray = countArray.sort();
    console.log(newCountArray);
    if(newCountArray.length === 1 || newCountArray[charCount] === newCountArray[newCountArray.length-1]){
        return 'YES';
    }
    if(newCountArray[charCount] < newCountArray[newCountArray.length -1] && newCountArray[newCountArray.length -1] === newCountArray[newCountArray.length -2] && newCountArray[charCount] !== newCountArray[charCount+1]){
        return 'YES'
    }
    if((newCountArray[newCountArray.length -1] - newCountArray[charCount])  >= 2 || newCountArray[charCount] !== newCountArray[newCountArray.length-2]){
        return 'NO';
    }
    return 'YES';
}
'aabbcdffz'
'a2b2cdf2z'

module.exports = isValid;