'use strict';

const array = require('./array-reverse.js');

test('reverse an array', () => {
    const potato = [1,2,3,4,5];
    expect(array(potato)).toEqual([5,4,3,2,1]);
});