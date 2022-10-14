// milk
// water
// vegetable
// fruits
// spoon





class Node {

    constructor(value) {
        this.value = value
        this.next = null
    }
}

class List {

    constructor(node) {
        this.head = node
        // this.tail = node

    }


    //4,5, 6

    add(node) {

        let temp = this.head
        while (temp.next != null) {
            temp = temp.next
        }


        let newNode = new Node(node)
       // this.tail.next = newNode
        temp.next = newNode

    }


    print() {
        let temp = this.head

        while (temp != null) {
            console.log(temp.value)
            temp = temp.next
        }

    }
}


let A = new Node("milk")

let myList = new List(A)

myList.add("water")
myList.add("vegetable")
myList.add("fruits")
myList.add("spoon")
myList.print()
