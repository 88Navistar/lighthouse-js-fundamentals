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

// creates a line of * for a given length
// const makeLine = function(length) {
//   var line = "";
//   for (var j = 1; j <= length; j++) {
//       line += "* ";
//   }
//   return line + "\n";
// }
//  console.log(makeLine(11))
// // your code goes here.  Make sure you call makeLine() in your own code.
// function buildTriangle(length) {
//   var triangle = '';
//   var lineNumber = 1;
//   for(lineNumber = 1; lineNumber <= length ; lineNumber++) {
//    triangle = triangle + makeLine(lineNumber);
   
//   }
//   return triangle;
// }

// console.log(buildTriangle(10));