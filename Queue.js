let Queue = function () {
  this.storage = [];
}

Queue.prototype.enqueue = function (value) {
  this.storage.unshift(value);
}

Queue.prototype.dequeue = function () {
  this.storage.pop();
}

Queue.prototype.first = function () {
  if (this.storage.length < 1) {
    return undefined;
  }
  return this.storage[0];
}

Queue.prototype.last = function () {
  if (this.storage.length < 1) {
    return undefined;
  }
  return this.storage[this.storage.length - 1];
}

Queue.prototype.size = function () {
  return this.storage.length;
}
