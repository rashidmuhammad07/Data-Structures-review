let Queue = function () {
  this.storage = [];
}

Queue.prototype.enqueue = function (value) {
  this.storage.unshift(value);
}

Queue.prototype.dequeue = function (value) {
  let result = this.storage.pop();
  return result;
}

Queue.prototype.first = function (value) {
  if (this.storage.length < 1) {
    return undefined;
  }
  return this.storage[0];
}

Queue.prototype.last = function (value) {
  if (this.storage.length < 1) {
    return undefined;
  }
  return this.storage[this.storage.length - 1];
}

Queue.prototype.size = function (value) {
  return this.storage.length;
}