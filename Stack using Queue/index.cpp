#include<iostream>
#include <queue>
using namespace std;

class Stack{
    queue<int>q1,q2;
    
    int tail;
    public:
    Stack(){
        tail=0;
    }
    void push(int num);
    void pop();
    int sizeOfStack();
    void printStack();
    void top();
};

void Stack::top(){
    cout<<"Top is :"<<q1.front();
}
void Stack::printStack(){
    cout<<"Stack is: ";
    queue<int>tempq=q1;
    while(!q1.empty()){
        cout<<" "<<q1.front();
        q1.pop();
    } 
    q1=tempq;
    cout<<"\n";
}

int Stack::sizeOfStack(){
    return q1.size();
}

void Stack::push(int num){
    q2.push(num);
    while (!q1.empty())
    {
        q2.push(q1.front());
        q1.pop();
    }
    queue<int>q=q1;
    q1=q2;
    q2=q;
}

void Stack::pop(){
    if(q1.empty()){
        return;
    }
    q1.pop();
}

int main(){
    Stack q;
    for (int i=0;i<10;i++){
        q.push(i);
    }
    q.printStack();
    q.top();
    q.pop();
    q.top();
    cout<<"size of stack is: "<<q.sizeOfStack()<<"\n";
    q.printStack();
    cout<<"\n\n\n\n\n\n";
    return 1;
}