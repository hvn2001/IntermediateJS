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
        if (this.cache[key]) {
            let node = this.cache[key];
            node.data = value;
            this.cacheVals.remove(node);
            this.cacheVals.insertAtTail(node);
        } else {
            this.evictIfNeeded();
            let node = new LinkedListNode(key, value);
            this.cacheVals.insertAtTail(node);
            this.cache[key] = node;
        }
    }

    Get(key) {
        if (this.cache[key]) {
            let node = this.cache[key];
            this.cacheVals.remove(node);
            this.cacheVals.insertAtTail(node);
            return node.data;
        } else {
            return -1;
        }
    }

    evictIfNeeded() {
        if (this.cacheVals.size >= this.capacity) {
            node = this.cacheVals.removeHead();
            delete this.cache[node.key]
        }
    }

    printcache() {
        let node = this.cacheVals.head;
        while (node) {
            process.stdout.write("(" + node.key + "," + node.data + ")");
            node = node.next;
        }
        console.log();
    }
}


let cache1 = new LRUCache(2);
cache1.Set(10, 20);
cache1.printcache();
cache1.Set(15, 25);
cache1.printcache();
cache1.Set(20, 30);
cache1.printcache();
cache1.Set(25, 35);
cache1.printcache();
cache1.Set(5, 25);
cache1.printcache();