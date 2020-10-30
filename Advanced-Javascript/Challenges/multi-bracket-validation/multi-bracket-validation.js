'use strict';

const Stack = require('../../data-structure/StacksandQueues/stack.js');

function multiBracketValidation(input){
    let stack = new Stack();

    for (const char of input) {
        if(char === '{' || char === '[' || char === '('){
            stack.push(char)
        }
        else if(char === '}' || char === ']' || char === ')'){
            if(char === '}' && stack.top.value === '{' || char === ')' && stack.top.value === '(' || char === ']' && stack.top.value === '['){
                stack.pop();
            }
            else{
                return false;
            }
        }
    }
    return true;
}

module.exports = multiBracketValidation;