function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value; 
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function (value) {
  const newHead = new Node(value, this.head, null);
  if (this.head === null) {
    this.head = newHead;
    this.tail = newHead;
  } else {
    this.head.prev = newHead;
    this.head = newHead;
  }
}