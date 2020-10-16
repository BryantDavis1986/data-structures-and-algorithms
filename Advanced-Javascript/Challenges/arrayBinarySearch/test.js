'use strict';

const BinarySearch = require('./array-binary-search.js');

describe('Test to make sure code challenge 04 passes', () => {
    it('ensure 1st test case the lab provides passes', () => {
        const res = BinarySearch([4,8,15,16,23,42], 15);
        expect(res).toEqual(2);
    })
    it('ensure 2nd test case the lab provides passes', () => {
        const res = BinarySearch([11,22,33,44,55,66,77], 90);
        expect(res).toEqual(-1);
    })
})