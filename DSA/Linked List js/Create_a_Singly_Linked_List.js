class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedLIst{
    constructor(){
        this.head=null
    }

    insert(data){
        const newNode=new Node(data)


        if(this.head===null){
            this.head=newNode
            return;
        }


        let current=this.head;



        while (current.next!==null){
            current=current.next;
        }


        current.next=newNode
    }


    print(){
        let current=this.head;


        while(current !== null){
            console.log(current.data)
            current=current.next
        }
    }
}


const list =new LinkedLIst()


list.insert(10)
list.insert(20)
list.insert(30)


list.print()