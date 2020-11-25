'use strict';

const treeIntersection = require('./tree-intersection.js');
const Tree = require('../../data-structure/tress/trees.js');
const Node = require('../../data-structure/tress/node.js');

describe("nonsense", () => {
    it('happy path', () => {
        let tree = new Tree();
        tree.root = new Node(150);
        tree.root.leftChild = new Node(100);
        tree.root.leftChild.leftChild = new Node(75);
        tree.root.leftChild.rightChild = new Node(160);
        tree.root.leftChild.rightChild.leftChild = new Node(125);
        tree.root.leftChild.rightChild.rightChild = new Node(175);
        tree.root.rightChild = new Node(250);
        tree.root.rightChild.leftChild = new Node(200);
        tree.root.rightChild.rightChild = new Node(350);
        tree.root.rightChild.rightChild.leftChild = new Node(300);
        tree.root.rightChild.rightChild.rightChild = new Node(500);

        let tree2 = new Tree();
        tree2.root = new Node(42);
        tree2.root.leftChild = new Node(100);
        tree2.root.leftChild.leftChild = new Node(15);
        tree2.root.leftChild.rightChild = new Node(160);
        tree2.root.leftChild.rightChild.leftChild = new Node(125);
        tree2.root.leftChild.rightChild.rightChild = new Node(175);
        tree2.root.rightChild = new Node(600);
        tree2.root.rightChild.leftChild = new Node(200);
        tree2.root.rightChild.rightChild = new Node(350);
        tree2.root.rightChild.rightChild.leftChild = new Node(4);
        tree2.root.rightChild.rightChild.rightChild = new Node(500);
        expect(treeIntersection(tree.root, tree2.root)).toEqual([100,160,125,175,200,350,500])
    })
    it('not happy path', () => {
        let tree = new Tree();
        let tree2 = new Tree();
        expect(treeIntersection(tree.root, tree2.root)).toEqual([])
    })
})