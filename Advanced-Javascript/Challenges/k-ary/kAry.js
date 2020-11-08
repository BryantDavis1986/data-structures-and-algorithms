'use strict';


  function fizzBuzz(tree){
    let result = [];
    fizzBuzzHelper(newTree,tree.root, result);
    return tree;
  }


  function fizzBuzzHelper(tree, node, result){
    let string = "";

    if (node.value % 3 === 0){
      node.value += "Fizz";
    }

    else if (node.value % 5 === 0){
      node.value += 'Buzz';
    }

    else{
      string = node.value
    };


    node.children.forEach(child => {
      if(child){
        fizzBuzzHelper(child, result);
      }
    });
  }

module.exports = fizzBuzz;