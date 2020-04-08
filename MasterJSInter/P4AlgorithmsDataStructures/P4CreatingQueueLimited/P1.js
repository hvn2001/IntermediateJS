class Queue {
    constructor() {
        this._enqueueStorage = [];
        this._dequeueStorage = [];
    }

    enqueue(item) {
        this._enqueueStorage.push(item);
    }

    dequeue() {
        if (this._dequeueStorage.length) {
            return this._dequeueStorage.pop();
        }

        if (this._enqueueStorage.length) {
            while (this._enqueueStorage.length) {
                this._dequeueStorage.push(this._enqueueStorage.pop());
            }

            return this._dequeueStorage.pop();
        }

        console.warn('Attempting to dequeue from an empty queue');
        return undefined;
    }

    get size() {
        return this._enqueueStorage.length + this._dequeueStorage.length;
    }
}