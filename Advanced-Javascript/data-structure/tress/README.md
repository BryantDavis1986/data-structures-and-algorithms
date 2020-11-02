# Daily Code Challenge Stacks and Ques Library

## Perfect Sequence
*Author: Bryant Davis*


---

### Problem Domain

Create a Stack and a Queue DLL.
Create the ability to insert a new node, remove a node and peek the first node.
---

### Inputs and Expected Outputs

| Input | Expected Output |
| :----------- | :----------- |

---

---
### Setup
- `npm init`  
- `npm i -y`  
- `npm test tree.test.js`  


---

### Tests

## Tree
```
> 3-code-challenges@1.0.0 test /home/bryant/codefellows/401/data-structures-and-algorithms/Advanced-Javascript
> jest --coverage --verbose "tree.test.js"

 PASS  data-structure/tress/tree.test.js
  testing trees
    ✓ PreOrder (2ms)
    ✓ PostOrder (1ms)
    ✓ PostOrder

----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |     92.5 |       72 |      100 |     92.5 |                   |
 node.js  |      100 |        0 |      100 |      100 |                 4 |
 trees.js |    91.67 |       75 |      100 |    91.67 |          12,33,54 |
----------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.015s
Ran all test suites matching /tree.test.js/i.
```

---

---
### Big O


| Time | Space |
| :----------- | :----------- |
| O(n) | O(n) |

---

### Change Log
1.1: *Node, Tree classes created. Each method created and tests passing - 2 Nov 2020    

---