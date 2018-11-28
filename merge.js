function merge(array1, array2) {
  var newarray = [];
  for (var i = 0; i < array1.length; i++) {
    newarray.push(array1[i]);
  }
  for (var k = 0; k < array2.length; k++) {
    newarray.push(array2[k]);
  }
  newarray.sort(function(a, b) { return a - b });
  return newarray;
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);