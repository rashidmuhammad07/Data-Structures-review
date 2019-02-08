let Queue = function () {
  this.storage = [];
}

Queue.prototype.enqueue = function (value) {
  this.storage.unshift(value);
}

Queue.prototype.dequeue = function (value) {
  this.storage.pop();
}