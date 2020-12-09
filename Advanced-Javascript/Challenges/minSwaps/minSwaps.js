'use strict';

function minimumSwaps(array) {
    let swaps = 0;
    for (let i = 0; i < array.length; i++) {
        console.log(i);
        while (array[i] !== i + 1) {
            let temp = array[array[i] - 1];
            array[array[i] - 1] = array[i];
            array[i] = temp;
            swaps++;
        }

    }
    return swaps;
}

module.exports = minimumSwaps;
