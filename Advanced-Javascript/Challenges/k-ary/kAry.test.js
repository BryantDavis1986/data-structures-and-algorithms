'use strict';

const Tree = require('../../data-structure/tress/trees.js');
const Node = require('./node.js');
const FizzBuzz = require('./kAry.js');

describe('', () => {
    it('', ()=> {
        let tree = new Tree();
        tree.root = new Node(8);
        tree.root.children.push(new Node(5), new Node(6), new Node(7), new Node(25));
        expect(FizzBuzz(tree)).toEqual([8, 'Buzz', 'Fizz', 7, 'Buzz']);
    })
})
