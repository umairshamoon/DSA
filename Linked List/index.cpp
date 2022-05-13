#include<iostream>
using namespace std;

class Node{
    private:
    
    public:
    int data;
    Node* next;
    //constructor
    Node(int data){
        this->data=data;
        this->next=NULL;
    };
    void printList(Node* head);
    void insert(Node* head,int num);
    void insertAtStart(Node** head,int num);
};

//Print List 
void Node::printList(Node* head){
while(head!=NULL){
    cout<<head->data<<endl;
    head=head->next;
}
}
//insert at end
void Node::insert(Node* head,int num){
    Node* temp=new Node(num);
    while(head->next!=NULL){
        head=head->next;
    }
    head->next=temp;
}
//insert at Start
void Node::insertAtStart(Node** head,int num){
    Node* temp=new Node(num);
    temp->next=*head;
    *head=temp;
}

int main(){
Node* a=new Node(1);
Node* b=new Node(2);
Node* c=new Node(3);

a->next=b;
b->next=c;
cout<<"Brefore"<<endl;
a->printList(a);
a->insert(a,8);
a->insertAtStart(&a,5);
cout<<"After"<<endl;
a->printList(a);
cout<<endl<<endl<<endl;
return 1;
}