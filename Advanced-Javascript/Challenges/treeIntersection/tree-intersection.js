'use strict';

function treeIntersection(root1, root2){
    let array = [];
    if(!root1 || !root2){
        return array;
    }
    let array1 = [];
    let array2 = [];

    array1 = treeHelper(root1, array1);
    array2 = treeHelper(root2, array2);
    
    for(let i = 0; i < array2.length; i++){
        if(array1.includes(array2[i])){
            array.push(array2[i]);
        }
    }

    return array;
}

function treeHelper(root1, array){

    array.push(root1.value);

    if(root1.leftChild){
        treeHelper(root1.leftChild, array);
    }

    if(root1.rightChild){
        treeHelper(root1.rightChild, array)
    }

    return array;
}

module.exports = treeIntersection;