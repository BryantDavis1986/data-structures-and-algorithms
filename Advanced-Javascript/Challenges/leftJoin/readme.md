# LL Zip

## Challenge
Write a function that LEFT JOINs two hashmaps into a single data structure.
The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.
Avoid utilizing any of the library methods available to your language.

## Approach & Efficiency
| Time | Space |
| :----------- | :----------- |
| O(n2) | O(n2) |

## Solution

## Test

```
bryant-Advanced-Javascript[left-join !?+]$ npm test leftJoin.test.js

> 3-code-challenges@1.0.0 test /home/bryant/codefellows/401/data-structures-and-algorithms/Advanced-Javascript
> jest --coverage --verbose "leftJoin.test.js"

 PASS  Challenges/leftJoin/leftJoin.test.js
  left join
    ✓  (3ms)

----------------------------|----------|----------|----------|----------|-------------------|
File                        |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------------------|----------|----------|----------|----------|-------------------|
All files                   |    36.43 |    27.27 |     37.5 |    35.43 |                   |
 Challenges/leftJoin        |      100 |    91.67 |      100 |      100 |                   |
  left-join.js              |      100 |    91.67 |      100 |      100 |                50 |
 data-structure/hashTable   |    54.05 |       10 |    66.67 |    52.78 |                   |
  hashTable.js              |    48.48 |       10 |       60 |    46.88 |... 63,65,66,68,71 |
  node.js                   |      100 |      100 |      100 |      100 |                   |
 data-structure/linked-list |     7.14 |        0 |    11.11 |     7.14 |                   |
  linked-list.js            |     5.97 |        0 |     12.5 |     5.97 |... 26,127,128,130 |
  node.js                   |    33.33 |        0 |        0 |    33.33 |               5,6 |
----------------------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.992s, estimated 1s
Ran all test suites matching /leftJoin.test.js/i.
```