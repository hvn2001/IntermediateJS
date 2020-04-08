class Queue {
    constructor() {
        this._storage = [];
    }

    enqueue(...items) {
        this._storage.push(...items);
    }

    dequeue() {
        if (this._storage.length > 1) {
            const lastItem = this._storage.pop();
            const firstItem = this.dequeue();
            this.enqueue(lastItem);
            return firstItem;
        } else if (this._storage.length === 1) {
            return this._storage.pop();
        } else {
            console.warn('Attempting to dequeue from an empty queue');
        }
    }
}