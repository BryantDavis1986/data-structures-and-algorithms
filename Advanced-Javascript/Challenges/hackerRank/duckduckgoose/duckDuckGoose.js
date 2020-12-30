'use strict';

const Queue = require('../../../../data-structure/StacksandQueues/queue.js');

function duckDuckGoose(array, k){
    if(array.length <= 0){
        return null;
    }
    let count = 0;
    let string = '';
    let queue = new Queue();
    for(let i =0; i < array.length; i++){
        queue.enqueue(array[i]);
    }

    while(queue.front){
        console.log(`i am the string ${string}`)
        if(count === k){
            string = queue.front.value;
            queue.dequeue();
            count = 0;
        }
        else{
            queue.enqueue(queue.front.value);
            console.log()
            queue.dequeue();
            count++;
            console.log(`count ${count}`);
        }

    }

    return string;
}

module.exports = duckDuckGoose;