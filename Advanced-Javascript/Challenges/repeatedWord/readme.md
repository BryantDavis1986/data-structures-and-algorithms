# LL Zip

## Challenge
Write a function that accepts a lengthy string parameter.
Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

## Approach & Efficiency
| Time | Space |
| :----------- | :----------- |
| O(n) | O(n) |

## Solution

## Test

 bryant-repeatedWord[repeated-word ?]$ npm test repeatedWord.test.js
```
> 3-code-challenges@1.0.0 test /home/bryant/codefellows/401/data-structures-and-algorithms/Advanced-Javascript
> jest --coverage --verbose "repeatedWord.test.js"

 PASS  Challenges/repeatedWord/repeatedWord.test.js
  testing repeated word function
    ✓ happy path (7ms)
    ✓ empty string
    ✓ one word (2ms)
    ✓ long string (9ms)

  console.log Challenges/repeatedWord/repeated-word.js:10
    happy

  console.log Challenges/repeatedWord/repeated-word.js:10
    happy

  console.log Challenges/repeatedWord/repeated-word.js:10
    the

  console.log Challenges/repeatedWord/repeated-word.js:10
    javascript

  console.log Challenges/repeatedWord/repeated-word.js:10
    array

  console.log Challenges/repeatedWord/repeated-word.js:10
    contains.

  console.log Challenges/repeatedWord/repeated-word.js:10
    to

  console.log Challenges/repeatedWord/repeated-word.js:10
    check

  console.log Challenges/repeatedWord/repeated-word.js:10
    if

  console.log Challenges/repeatedWord/repeated-word.js:10
    an

  console.log Challenges/repeatedWord/repeated-word.js:10
    array

------------------|----------|----------|----------|----------|-------------------|
File              |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------|----------|----------|----------|----------|-------------------|
All files         |      100 |    83.33 |      100 |      100 |                   |
 repeated-word.js |      100 |    83.33 |      100 |      100 |                14 |
------------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.913s, estimated 1s
Ran all test suites matching /repeatedWord.test.js/i.
```