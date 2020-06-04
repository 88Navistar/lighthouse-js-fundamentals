const multiplicationTable = function(maxValue) {
  var xaxis = '';
  for (var x = 1; x <= maxValue; x++)
    for (var y = 1; y <= maxValue; y++) {
      if(y === maxValue) {
        xaxis = (xaxis + (x * y) + ' ' + '\n');
      } else {
        xaxis = (xaxis + (x * y) + ' ');
      }
  }
    return xaxis;
};


console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));