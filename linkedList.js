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
 let value = this.head.value;

 if (this.head) {
   this.head = this.head.next;

   if (this.head) {
     this.head.prev = null;
   } else {
     this.tail = null;
   }
 }
 return value;
}

LinkedList.prototype.removeTail = function() {
 let value = this.tail.value;
 
 if (this.tail) {
   this.tail = this.tail.prev;

   if (this.tail) {
     this.tail.next = null;
   } else {
     this.head = null;
   }
 }
 return value;
}

LinkedList.prototype.search = function(searchValue) {
  let currentNode = this.head;

  while(currentNode.value !== null) {
    if (currentNode.value === searchValue) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }
  return null;
}