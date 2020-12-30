'use strict';

function reverse(head) {
    let newLL = new DoublyLinkedList();
    if(!head.next && head){
        newLL.head = head;
        return newLL.head;
    }
    let current = head;
    newLL.head = new DoublyLinkedListNode(current.data);
    let newCurrent = newLL.head;
    current = current.next;
    
    while(current){
        let node = new DoublyLinkedListNode(current.data);
        node.next = newCurrent;
        newCurrent.prev = node;
        newLL.head = node;
        newCurrent = newLL.head;
        current = current.next;
    }
    
    return newLL.head;
    }

module.exports = reverse;