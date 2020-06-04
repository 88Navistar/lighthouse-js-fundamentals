const repeatNumbers = function(data) {
  let final = '';
for (let x = 0; x < data.length; x++){
  for (let y = 1; y <= data[x][1]; y++) {
  final += data[x][0];
  }
    if(x < data.length - 1) {
    final +=', ';
    }
  } return final;

};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
