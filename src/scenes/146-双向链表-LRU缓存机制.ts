/**
 * 146. LRU 缓存
请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
实现 LRUCache 类：
LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

 

示例：

输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4

 */

class LRUNode {
    prev: LRUNode | null;
    next: LRUNode | null;
    val: number;
    key: number;
    constructor(val, key = -1, next = null, prev = null) {
        this.val = val;
        this.key = key;
        this.prev = prev;
        this.next = next;
    }
}

class LRUCache {

    #capacity;
    #map;
    #head;
    #tail;

    #addToTail (node) {
        // 2. 插入到链表尾部
        node.prev = this.#tail.prev;
        node.next = this.#tail;
        this.#tail.prev.next = node;
        this.#tail.prev = node;
    }

    #deleteCurNode (node) {
        // 1. 删除在当前的位置
        node.prev!.next = node.next
        node.next!.prev = node.prev
    }

    #deleteHeadNode() {
        const node = this.#head.next
        this.#deleteCurNode(node)
    }


    constructor(capacity: number) {
        this.#map = new Map();
        this.#capacity = capacity;
        // 初始化双向链表
        this.#head = new LRUNode(-1, -1)
        this.#tail = new LRUNode(-1, -1)
        this.#head.next = this.#tail;
        this.#tail.prev = this.#head;
    }

    get(key: number): number {
        if(this.#map.has(key)) {
            // 调整链接节点
            const node = this.#map.get(key)
            this.#deleteCurNode(node)
            this.#addToTail(node)
            return node.val;
        }
        return -1;
    }

    put(key: number, value: number): void {
        let node;
        // 是否有这个key
        if (this.#map.has(key)) {
            // 有这个key, 1.重新赋值 2.调整key这个节点在链表中的位置
            node = this.#map.get(key);
            node.val = value;
            // 调整链表位置
            this.#deleteCurNode(node);
            this.#addToTail(node);

            // console.log([...this.#map.keys()], this.#map.size, this.#capacity)
            return;
        } 
        // 是新的节点的情况: 判断容量满了没有
        if (this.#map.size === this.#capacity) {
            // 新增的情况，要从链表把长时间没有使用的节点删除掉
            this.#map.delete(this.#head.next.key)
            this.#deleteHeadNode()
        }
        // 生成新的链表节点
        node = new LRUNode(value, key)
        // 插入到链表尾部
        this.#addToTail(node);
        this.#map.set(key, node);
        // console.log([...this.#map.keys()], this.#map.size, this.#capacity)

    }

}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */