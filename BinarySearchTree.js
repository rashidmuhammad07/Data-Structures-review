let BTree = function () {
  this.root = null;
}
let Node = function (val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

BTree.prototype.addValue = function(value) {
  let newNode = new Node(value);
  if (this.root === null) {
    this.root = newNode;
  } else {
    this.root.addChildren(newNode);
  }
}

Node.prototype.addChildren = function(newNode) {
  if (newNode.value < this.value) {
    if (this.left !== null) {
      this.left.addChildren(newNode);
    } else {
      this.left = newNode;
    }
  } else if (newNode.value > this.value) {
    if (this.right !== null) {
      this.right.addChildren(newNode);
    } else {
      this.right = newNode;
    }
  }
}

BTree.prototype.traverse = function() {
  this.root.visit();
}

BTree.prototype.search = function(value) {
  return this.root.find(value);
} 

Node.prototype.visit = function() {
  if (this.left !== null) {
    this.left.visit();
  }
  console.log(this.value);
  if (this.right !== null) {
     this.right.visit();
  }
}

Node.prototype.find = function (value) {
  if (this.value === value) {
    return this;
  } else if (value > this.value && this.right !== null) {
    return this.right.find(value);
  } else if (value < this.value && this.left !== null) {
    return this.left.find(value);
  } 
  return null;
}