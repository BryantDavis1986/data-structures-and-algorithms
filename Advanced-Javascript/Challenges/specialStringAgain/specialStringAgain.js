'use strict';

function substrCount(n, s) {

let retVal = s.length;
for(let i = 0; i < s.length; i++){
    let repeat = 0;
    while(i+1 < s.length && s[i] === s[i+1]){
        repeat++;
        i++;
    }
    retVal += (repeat*(repeat+1))/2;

    let pointer = 1;
    while(i-pointer >= 0 && i+pointer < s.length && s[i+pointer] === s[i-1] && s[i-pointer] === s[i-1]){
        retVal++;
        pointer++;
    }
}

return retVal;

}