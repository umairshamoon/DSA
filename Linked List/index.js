class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
a.next = b;
b.next = c;
c.next = d;

function printList(head) {
  while (head) {
    console.log(head.data);
    head = head.next;
  }
}
//printList(a);
function toArray(head) {
  let array = [];
  while (head) {
    array.push(head.data);
    head = head.next;
  }
  console.log(array);
}
//toArray(a);

function addList(head) {
  let sum = 0;
  while (head) {
    sum += head.data;
    head = head.next;
  }
  return sum;
}
//console.log(addList(a));

function findInList(head, target) {
  while (head) {
    if (head.data === target) return true;
    head = head.next;
  }
  return false;
}

//console.log(findInList(a, 3));
function findByIndex(head, target) {
  let count = 0;
  while (head) {
    if (head.data === target) return count;
    head = head.next;
    count++;
  }
  return false;
}
//console.log('index is ', findByIndex(a, 0));

function findAtIndex(head, index) {
  let count = 0;
  while (head) {
    if (count === index) return head.data;
    head = head.next;
    count++;
  }
  return false;
}
//console.log('value at given index is ', findAtIndex(a, 2));
function reverseList(head) {
  let previous = null;
  while (head) {
    let temp = head.next;
    head.next = previous;
    previous = head;
    head = temp;
  }
}

// console.log('list before reverse is ');
// printList(a);
// reverseList(a);
// console.log('list after reverse is ');
// printList(d);
