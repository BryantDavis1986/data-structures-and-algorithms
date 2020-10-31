'use strict';

const goose = require('./duckDuckGoose.js');

describe('duck stuff', () => {
    it('1st test case', () => {
        expect(goose(['a', 'b', 'c', 'd', 'e', 'f'], 6)).toEqual('e');
    })
})