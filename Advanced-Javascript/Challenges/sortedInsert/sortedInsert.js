'use strict';

function sortedInsert(head, data) {
if(!data){
    return head;
}
if(!head){
    head = {data: data, next: null, prev: null};
    return head;
}
console.log(head);
console.log(data);
let current = head;
while(current){
    if(data >= current.data){
        let temp = current;
        let newNode = {data: data, next: temp, prev: temp.prev};
        temp.prev = newNode;
        current = newNode.next;
    }
    current = current.next;
}

current = head;

return current;

}