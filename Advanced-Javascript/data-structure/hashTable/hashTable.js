'use strict';

import LinkedList from '../linked-list/linked-list.js';
import Node from './node.js';

class HashTable {
    constructor(map = []){
        this.map = map;
    }

    getHash(key){

        let total = 0;
        for(let i = 0; i < key.length; i++){
            total += key[i];
        }

        let primeValue = total * 599;
        let index = primeValue % this.map.length;

        return index;
    }

    add(key, value){
        let index = this.getHash(key);
        let htNode = new Node(value, key);
        let node = new LinkedList(htNode);
        
        if(!this.map[index]){
            this.map[index] = node;
        }
        else{
            this.map[index].append(node);
        }

    }

    get(key){
        let index = this.getHash(key);

        if(this.map[index]){

            if(this.map[index].count === 1){
                let first = this.map[index].first;

                return first.value.value;
            }

            else{
                let current = this.map[index].head;

                while(current){
                    if(current.value.key === key){
                        return current.value.value;
                    }
                    current = current.next;
                }
            }
        }
    }

    contains(key){
        let index = this.getHash(key);
        let location = this.map[index];

        if(!location){
            let current = this.map[index].first;

            while(current){

                if(current.value.key === key){
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }
}