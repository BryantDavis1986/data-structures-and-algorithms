'use strict';

const Zip = require('./ll-zip.js');
const LinkedList = require('../../data-structure/linked-list/linked-list.js');

describe('Test Zip to ensure proper outcome', () => {
    it('Happy Path', () => {
        let one = new LinkedList();
        
        one.insert(5);
        one.insert(15);
        one.insert(50);
        console.log(one);
        let two = new LinkedList();

        two.insert(1);
        two.insert(10);
        two.insert(100);

        let answer = Zip(one, two);

        let result = new LinkedList();
        result.head = answer;

        expected(result.toString()).toEqual(' 5 => 1 => 15 => 10 => 50 => 100 => NULL')

    })
})