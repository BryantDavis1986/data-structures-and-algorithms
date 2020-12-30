'use strict';

function makeAnagram(a, b) {
let firstCopy = a;
console.log(firstCopy);
let first = a.split('');

for(let char of first){
    if(b.indexOf(char) !== -1){
        firstCopy = firstCopy.replace(char, '');
        b = b.replace(char, '');
    }
}

return firstCopy.length + b.length

}

module.exports = makeAnagram;