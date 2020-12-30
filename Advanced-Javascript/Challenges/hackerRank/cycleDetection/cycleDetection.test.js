'use strict';

const LinkedList = require('../../data-structure/linked-list/linked-list.js');
const Node = require('../../data-structure/linked-list/node.js');
const cycleDetection = require('./cycleDetection.js');

describe('testing cycle detection', () => {
    it('happy path', () => {
        let ll = new LinkedList();
        ll.insert(200);
        ll.insert(2);
        ll.insert(50);
        expect(cycleDetection(ll.head)).toEqual(0);
    })
    it('empty LL', () => {
        let ll = new LinkedList();
        expect(cycleDetection(ll.head)).toEqual(0);
    })
    it('should be cycle', () => {
        let ll = new LinkedList();
        ll.insert(200);
        ll.insert(2);
        ll.insert(50);
        ll.insert(200);

        expect(cycleDetection(ll.head)).toEqual(1);
    })
})