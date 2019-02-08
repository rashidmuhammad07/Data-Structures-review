let Stack  = function() {
  this.count = 0; 
  this.storage = {};
}

Stack.prototype.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
}

Stack.prototype.pop = function() {
  if (this.count === 0) {
    return undefined;
  }
  let value = this.storage[this.count];
  delete this.storage[this.count];
  this.count--;

  return value;
}

