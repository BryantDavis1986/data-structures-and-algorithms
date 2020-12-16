'use strict';

function alternatingCharacters(s) {
    if (s.length < 1) {
        return 0;
    }
    if (s.length === 1) {
        return 0;
    }

    let count = 0;
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            count++;
        }
    }
    return count;
}

module.exports = alternatingCharacters;