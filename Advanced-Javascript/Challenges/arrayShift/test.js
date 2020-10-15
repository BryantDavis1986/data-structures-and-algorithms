'use strict';

const insertShiftArray = require('./arrayShift.js');

test('Insert new value into middle of array', () => {
    expect(insertShiftArray([4,8,15,23,42], 16)).toEqual([4,8,15,16,23,42]);
    expect(insertShiftArray([4,8,15,23,42], 16)).toEqual([4,8,15,16,23,42]);

})