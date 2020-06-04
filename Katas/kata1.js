const sumLargestNumbers = function(data) {
  data.sort((a, b) => a - b);
let lgInt = [];
for (var i = data.length-2; i <= ((data.length)-1); i++){
lgInt.push(data[i]);
}
return lgInt[0]+lgInt[1];
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]))
