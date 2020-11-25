# Tree Intersection

## Challenge
Write a function called tree_intersection that takes two binary tree parameters.
Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.

## Approach & Efficiency
| Time | Space |
| :----------- | :----------- |
| O(n) | O(n) |

## Solution

## Test

```
bryant-treeIntersection[tree-intersection ?]$ npm test treeIntersection.test.js

> 3-code-challenges@1.0.0 test /home/bryant/codefellows/401/data-structures-and-algorithms/Advanced-Javascript
> jest --coverage --verbose "treeIntersection.test.js"

 PASS  Challenges/treeIntersection/treeIntersection.test.js
  nonsense
    ✓ happy path (3ms)
    ✓ not happy path

--------------------------------|----------|----------|----------|----------|-------------------|
File                            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------------------------|----------|----------|----------|----------|-------------------|
All files                       |    27.78 |    18.52 |    23.53 |    27.62 |                   |
 Challenges/treeIntersection    |      100 |      100 |      100 |      100 |                   |
  tree-intersection.js          |      100 |      100 |      100 |      100 |                   |
 data-structure/StacksandQueues |    11.11 |        0 |        0 |    11.11 |                   |
  queue.js                      |    11.11 |        0 |        0 |    11.11 |... 29,30,34,35,37 |
 data-structure/linked-list     |    33.33 |        0 |        0 |    33.33 |                   |
  node.js                       |    33.33 |        0 |        0 |    33.33 |               5,6 |
 data-structure/tress           |    11.76 |        0 |       20 |    12.12 |                   |
  node.js                       |      100 |        0 |      100 |      100 |                 4 |
  trees.js                      |     6.25 |        0 |    11.11 |     6.45 |... 06,108,109,113 |
--------------------------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.122s
Ran all test suites matching /treeIntersection.test.js/i.
```