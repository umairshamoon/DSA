class Stack {
  constructor() {
    this.q1 = [];
  }
  //push
  pushValue(value) {
    let q2 = [];
    q2.push(value);
    while (this.isEmpty()) {
      q2.push(this.front());
      this.pop();
    }
    let q = this;
    this.q1 = q2;
    q2 = q;
    this.q1.push(value);
    console.log(this.q1);
  }

  //front
  front() {
    if (this.isEmpty()) return;
    return this.q1[0];
  }

  //pop
  pop() {
    if (this.isEmpty()) return 'Queue us empty';
    this.q1.shift();
  }

  //isEmpty
  isEmpty() {
    return this.length === 0;
  }

  //print Stack
  printStack() {
    for (let i = 0; i < this.length; i++) {
      console.log(this.q1[i]);
    }
  }
}

let S = new Stack();

S.pushValue(10);
S.printStack();
