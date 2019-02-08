let Stack  = function() {
  this.count = 0; 
  this.storage = {};
}

Stack.prototype.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
}

