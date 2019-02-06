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

LinkedList.prototype.addToTail = function (value) {
  const newTail = new Node(value, null, this.tail);
  if(this.tail === null) {
    this.tail = newTail;
    this.head = newTail;
  } else {
    this.tail.next = newTail;
    this.tail = newTail; 
  }
}

LinkedList.prototype.removeHead = function() {
  if (this.head === null) {
    return null;
  } else {
    let value = this.head.value;
    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null; 
    } else {
      this.tail = null;
    }
   return value;
  }
}