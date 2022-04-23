class Node {
    constructor(value) {
        this.element = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    addItem(value) {
        let node = new Node(value);
        if (this.head == null) this.head = node;
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    indexOf(value) {
        let current = this.head;
        let index = 0;

        while (current?.element) {
            if (current.element == value) {
                return index;
            } else if (index == this.length - 1) return -1

            index++;
            current = current.next;
        }
    }
    insertAt(value, index) {
        if (index < 0 || index > this.length) return -1;
        let prevNode;
        let current = this.head;
        let localIndex = 0;
        while (current && current.element) {
            if (index == localIndex + 1) {
                let newNode = new Node(value);
                current.next = newNode;
            }

            if (localIndex == index) {
                let newNode = new Node(value);
                if (prevNode)
                    prevNode.next = newNode;
                else
                    this.head = newNode;
                newNode.next = current;
                // console.log(a);
                break
            }

            prevNode = current;
            current = current.next;
            localIndex++;
        }
        console.log("yechla");
        this.length++
    }
}

let a = new LinkedList()
a.addItem(1)
a.addItem(12)
a.addItem(11)
a.addItem(5)
a.addItem(7)
a.insertAt(100, 20)

let indexOf = 100;
console.log(`index of ${indexOf} : `, a.indexOf(indexOf))
a.addItem(90)
console.log(a)