export default class LinkedListNode {

    //https://github.com/trekhleb/javascript-algorithms/blob/477f30b0bdac6024874d2976de1eca7afe0176dd/src/data-structures/linked-list/LinkedListNode.js#L1

    Constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}