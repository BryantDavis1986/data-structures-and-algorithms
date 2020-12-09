'use strict';

function fib(nth){
    let count1 = 0,
        count2 = 1,
        temp = 0;
    nth--;
    for(let i = 0; i < nth; i++){
        temp = count2;
        count2 = count1 + count2;
        count1 = temp;
    }
    return count1;
}