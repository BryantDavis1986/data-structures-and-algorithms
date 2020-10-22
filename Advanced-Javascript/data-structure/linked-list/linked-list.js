'use strict'

const Node = require('./node.js');

class LinkedList {

  constructor() {
    this.head = null;
    this.current = this.head;
  }

  insert(value) {
    this.current = this.head;
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  includes(value) {
    this.current = this.head;

    while (this.current !== null) {
      if (this.current.value === value) {
        return true;
      }
      this.current = this.current.next;
    }
    return false;
  }

  toString() {
    this.current = this.head;

    if (this.head == null) {
      return '';
    }
    let objString = '';

    while (this.current !== null) {
      objString = `${objString} ${this.current.value} =>`;
      this.current = this.current.next;
    }
    objString = `${objString} NULL`;
    return objString;
  }

  append(value) {
    this.current = this.head;
    if (this.head === null) {
      this.head = new Node(value);
    }

    while (this.current !== null) {
      if (this.current.next === null) {

        let node = new Node(value);

        this.current.next = node;

        this.current = this.current.next;

      }
      this.current = this.current.next;
    }
  }

  insertBefore(value, newValue) {
    this.current = this.head;

    if (this.current.value === value) {
      this.insert(newValue)
    }
    else {

      let last = this.current;

      while (this.current !== null) {
        if (this.current.value === value) {
          let node = new Node(newValue);
          node.next = this.current;
          last.next = node;
          break;
        }
        last = this.current;
        this.current = this.current.next;
      }
    }
  }

  insertAfter(value, newValue) {
    this.current = this.head;

    while (this.current !== null) {
      if (this.current.value === value) {
        let node = new Node(newValue);
        node.next = this.current.next;
        this.current.next = node;
      }
      this.current = this.current.next;
    }

  }

  kthFromEnd(key) {
    this.current = this.head;

    let walking = this.current;
    let running = this.current;

    let k = key;
    if (k < 0) {
      throw new console.error('Key cannot be a negative number');
    }

    while (k > 0) {
      if (running.next !== null) {
        k--;
        running = running.next;
      }
      else {
        throw new console.error('K cannot be same length as Linked List');
      }
    }

    while (running.next !== null) {
      walking = walking.next;
      running = running.next;
    }
    return walking.value;
  }

}

module.exports = LinkedList;