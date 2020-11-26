'use strict';

function cycleDetection(head){
    if(!head){
        return 0;
    }

    let current = head;
    let duplicateArray = [];
    while(current){
        if(duplicateArray.includes(current.value)){
            return 1;
        }
        else if(!duplicateArray.includes(current.value)){
            duplicateArray.push(current.value);
        }
        current = current.next;
    }

    return 0;
}

module.exports = cycleDetection;