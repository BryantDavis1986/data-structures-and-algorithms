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

function anagram(s) {
    const len = s.length
        if(len % 2 == 1) return -1;
        let sub1 = s.substring(0,len/2), sub2 = s.substring(len/2,len);
        let count = 0;
        sub2.split('').filter(x=> sub1.includes(x) ? (sub1 = sub1.replace(x,'')) : count++);
        return count;
    }
    

module.exports = makeAnagram;