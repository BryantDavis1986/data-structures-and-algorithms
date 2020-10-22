'use strict';

const Zip = require('./ll-zip.js');
const LinkedList = require('../../data-structure/linked-list/linked-list.js');

describe('Test Zip to ensure proper outcome', () => {
    it('Happy Path', () => {
        let one = new LinkedList();
        
        one.insert(5);
        one.insert(15);
        one.insert(50);
        let two = new LinkedList();

        two.insert(1);
        two.insert(10);
        two.insert(100);

        let answer = Zip(one, two);

        let result = new LinkedList();
        result.head = answer;

        expect(result.toString()).toEqual(' 5 => 1 => 15 => 10 => 50 => 100 => NULL')

    })
    it('First LL shorter than Second LL', () => {
        let one = new LinkedList();
        
        one.insert(5);
        one.insert(15);
        console.log(one);
        let two = new LinkedList();

        two.insert(1);
        two.insert(10);
        two.insert(100);

        let answer = Zip(one, two);

        let result = new LinkedList();
        result.head = answer;

        expect(result.toString()).toEqual(' 1 => 5 => 10 => 15 => 100 => NULL')

    })
    it('Second LL shorter than First LL', () => {
        let one = new LinkedList();
        
        one.insert(5);
        one.insert(15);
        one.insert(50);
        let two = new LinkedList();

        two.insert(1);
        two.insert(10);

        let answer = Zip(one, two);

        let result = new LinkedList();
        result.head = answer;

        expect(result.toString()).toEqual(' 5 => 15 => 1 => 50 => 10 => NULL')

    })
    it('first LL empty', () => {
        let one = new LinkedList();
        let two = new LinkedList();

        two.insert(1);
        two.insert(10);
        two.insert(100);

        let answer = Zip(one, two);

        let result = new LinkedList();
        result.head = answer;

        expect(result.toString()).toEqual(' 1 => 10 => 100 => NULL')

    })
    it('both LL empty', () => {
        let one = new LinkedList();
        let two = new LinkedList();

        let answer = Zip(one, two);

        let result = new LinkedList();
        result.head = answer;

        expect(result.toString()).toEqual('NULL')

    })
})