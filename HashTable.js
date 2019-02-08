let hash = function(string, max) {
  var sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i)
  }
  return sum % max;
}

let HashTable = function () {
  this.storage = [];
  this.storageLimit = 15;

}

HashTable.prototype.print = function() {
  console.log(this.storage);
}

HashTable.prototype.set = function(key, value) {
  let index = hash(key, this.storageLimit);
  if (this.storage[index] === undefined) {
    this.storage[index] = [ [key, value] ];
  } else {
    let inserted = false;
    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        this.storage[index][i][1] = value;
        inserted = true;
      }
    }

    if (inserted = false) {
      this.strorage[index].push([key, value]);
    }
  }
}