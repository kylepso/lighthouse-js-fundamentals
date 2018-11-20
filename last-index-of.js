function lastIndexOf(array, value) {
  var index = [-1];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      index.push(i);
    }
    else {
      index.push(-1)
    }
  }
  return Math.max(...index);
}
