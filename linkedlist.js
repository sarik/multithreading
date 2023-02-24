class Node {
    constructor(value) {
        this.value = value;
        this.next = null;

    }
}
class LinkedList {

    constructor() {
        this.head = null
    }

    insert(value) {
        let newNode = new Node(value);

        if (this.head == null) {
            this.head = newNode
            return
        }

        let curr = this.head
        while (curr.next != null) {
            curr = curr.next
        }

        curr.next = newNode;

    }

    print() {
        let curr = this.head
        while (curr != null) {
            console.log("linked list",curr.value)
            curr = curr.next
        }
    }
}

let inputs = [1, 2, 3, 4]

let ll = new LinkedList()

inputs.forEach(val => ll.insert(val))

ll.print();