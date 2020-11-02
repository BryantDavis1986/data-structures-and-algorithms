'use strict';

const Node = require('./node.js');

class Tree{
    constructor(){
        this.root = null;
    }

    preOrder(root){
        if(root.leftChild === null && root.rightChild === null){
            return new Error('Your tree is empty')
        }
        let array = [];
        let current = root;
        this.preOrder2(current, array);
        return array;

    }
    preOrder2(root, array){

        array.push(root.value);
        if(root.leftChild !== null){
            this.preOrder2(root.leftChild, array);
        }

        if(root.rightChild !== null){
            this.preOrder2(root.rightChild, array);
        }
    }
   postOrder(root){
        if(root.leftChild === null && root.rightChild === null){
            return new Error('Your tree is empty')
        }
        let array = [];
        let current = root;
        this.postOrder2(current, array);
        return array;

    }
    postOrder2(root, array){

        if(root.leftChild !== null){
            this.postOrder2(root.leftChild, array);
        }
        
        if(root.rightChild !== null){
            this.postOrder2(root.rightChild, array);
        }
        array.push(root.value);
    }
    inOrder(root){
        if(root.leftChild === null && root.rightChild === null){
            return new Error('Your tree is empty')
        }
        let array = [];
        let current = root;
        this.inOrder2(current, array);
        return array;

    }
    inOrder2(root, array){

        if(root.leftChild !== null){
            this.inOrder2(root.leftChild, array);
        }

        array.push(root.value);

        if(root.rightChild !== null){
            this.inOrder2(root.rightChild, array);
        }
    }
}

module.exports = Tree;