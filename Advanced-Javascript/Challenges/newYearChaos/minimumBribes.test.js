const minimumBribes = require('./newYearChaos.js');

describe('happy path', () => {
    it('happy path', () => {
        expect(minimumBribes([1,2,5,3,7,8,6,4])).toEqual(7);
    })
})