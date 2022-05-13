const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function linearSearch(list, targetValue) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === targetValue)
      return console.log(targetValue, ' is at ', i, ' index');
  }
  return console.log(targetValue, ' does not exist in list');
}
//linearSearch(arr, 100);

function binarySearch(list, targetValue) {
  let first = 0;
  let last = list.length - 1;
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (targetValue === list[mid]) {
      return console.log(targetValue, ' is at ', mid, ' index');
    }
    if (targetValue < list[mid]) {
      last = mid - 1;
    }
    if (targetValue > list[mid]) {
      first = mid + 1;
    }
  }
  return console.log(targetValue, ' does not exist in list');
}
//binarySearch(arr, 2);

function recurssiveBinarySearch(list, targetValue) {
  if (list.length === 0) return console.error('list is empty');
  let mid = Math.floor(list.length / 2);
  console.log(' mid is ', mid);
  if (list[mid] === targetValue)
    return console.log('Value exists');
  if (targetValue < list[mid]) {
    console.log('Entered less');
    return recurssiveBinarySearch(
      list.splice(mid, mid),
      targetValue
    );
  }
  if (targetValue > list[mid]) {
    console.log('Entered Max');
    return recurssiveBinarySearch(list.splice(0, mid));
  }
}
//recurssiveBinarySearch(arr, 5);

//Stack using Queue
class stackUsingQueue {
  constructor() {
    (this.elements = []), (this.head = 0);
    this.tail = 0;
  }
  equeue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    delete this.elements[this.head];
    this.elements = this.elements.filter(Number);
  }
}
const q = new stackUsingQueue();
for (let i = 1; i < 10; i++) q.equeue(i);
console.log(q.elements);
//console.log('element that is deleted is ', q.dequeue());
q.dequeue();
q.dequeue();

console.log(q.elements);
