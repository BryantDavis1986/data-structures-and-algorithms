'use strict';

const Hash = require('../../data-structure/hashTable/hashTable.js');
const leftJoin = require('./left-join.js');


describe('left join', () => {
    it('', () => {
        let hash1 = new Hash(20);
        let hash2 = new Hash(20);

        hash1.add('fond', 'enamored');
        hash1.add('wrath', 'anger');
        hash1.add('diligent', 'employed');
        hash1.add('outfit', 'garb');
        hash1.add('guide', 'usher');

        hash2.add('fond', 'averse');
        hash2.add('wrath', 'delight');
        hash2.add('diligent', 'idle');
        hash2.add('guide', 'follow');
        hash2.add('flow', 'jam');

        let array = [
            ['wrath', 'anger', 'delight'],
            ['diligent', 'employed', 'idle'],
            ['outfit', 'garb', 'NULL'],
            ['guide', 'usher', 'follow'],
            ['fond', 'enamored', 'averse']
        ]
        expect(leftJoin(hash1, hash2)).toEqual(array)
    })
})