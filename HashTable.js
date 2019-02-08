let hash = function(string, max) {
  var sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i)
  }
  return sum % max;
}