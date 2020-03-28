// Linked list operations
// insertAtTail(key, value)
// insertAtTail(node)
// remove(node)
// removeHead()
// removeTail()

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = {};
        this.cacheVals = new LinkedList();
    }

    Set(key, value) {
        // TODO: Write - Your - Code
    }

    Get(key) {
        // TODO: Write - Your - Code
        return -1;
    }

    print() {
        let result = "";
        let node = this.cacheVals.head;
        while (node) {
            result += "(" + node.key + "," + node.data + ")";
            node = node.next;
        }
        return result;
    }
}