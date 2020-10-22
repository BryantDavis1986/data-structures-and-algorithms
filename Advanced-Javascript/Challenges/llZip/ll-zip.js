'use strict';

const LinkedList = require('../../data-structure/linked-list/linked-list.js');

function zipLists(one, two){
    let newLinkedList = new LinkedList();
    newLinkedList.current = newLinkedList.head;
    one.current = one.head;
    two.current = two.head;
    
    while(one.current !== null || two.current !== null){
        
        if(one.current !== null && two.current !== null){
            newLinkedList.insert(two.current.value);
            console.log(one);
            newLinkedList.insert(one.current.value);
            two.current = two.current.next;
            one.current = one.current.bext;
        }
        else if(one.current !== null && two.current === null){
            newLinkedList.insert(one.current.value);
            one.current = one.current.next;
        }
        else if (one.current == null && two.current != null)
        {
            newLinkedList.insert(two.current.value);
            two.current = two.current.next;
        }
        else
        {
            one.current = one.current.next;
            two.current = two.current.next;
        }

    }
    return newLinkedList.head;
}

module.exports = zipLists;