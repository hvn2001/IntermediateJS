class Queue extends LinkedList {
    constructor() {
        super();
        this.enqueue = this.addToTail;
        this.dequeue = this.removeFromHead;
    }
}