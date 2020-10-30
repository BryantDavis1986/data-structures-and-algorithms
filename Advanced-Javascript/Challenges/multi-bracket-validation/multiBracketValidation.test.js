'use strict';

const multiBracketValidation = require('./multi-bracket-validation.js');

describe('validating proper bracket syntax', () => {
    it('1st test case', () => {
        expect(multiBracketValidation('{}')).toBeTruthy();
    })
    it('2nd test case', () => {
        expect(multiBracketValidation('{}(){}')).toBeTruthy();
    })
    it('3rd test case', () => {
        expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();
    })
    it('4th test case', () => {
        expect(multiBracketValidation('(){}[[]]')).toBeTruthy();
    })
    it('5th test case', () => {
        expect(multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy();
    })
    it('6th test case', () => {
        expect(multiBracketValidation('[({}]')).toBeFalsy();
    })
    it('7th test case', () => {
        expect(multiBracketValidation('(](')).toBeFalsy();
    })
    it('8th test case', () => {
        expect(multiBracketValidation('{(})')).toBeFalsy();
    })
})