const repeatedWord = require('./repeated-word.js');


describe('testing repeated word function', () => {
    it('happy path', () => {
        expect(repeatedWord("happy happy happy")).toEqual('happy')
    })
    it('empty string', () => {
        expect(repeatedWord('')).toEqual('')
    })
    it('one word', () => {
        expect(repeatedWord('the')).toEqual('no duplicates')
    })
    it('long string', () => {
        let string = 'Javascript array contains. To check if an array contains the value or not, the most concise and efficient way to find out is using the Javascript array'
        expect(repeatedWord(string)).toEqual('array')
    })
})