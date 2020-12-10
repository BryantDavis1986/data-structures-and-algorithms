'use strict';

function insertNodeAtPosition(head, data, position) {
    if(!head){
        return null;
    }
    console.log(head);
    console.log(data);
    console.log(position);
    let count = 0;
    let current = head;
    const array = [];
    while(current){
        count++;
        if(count === position){
            let newNode = {data: data, next: current.next};
            current.next = newNode;
        }
        array.push(current.data);
        current = current.next;
    }
    console.log(array);
}
