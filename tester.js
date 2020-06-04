const stdev = function(arr) {
  let sampSize = arr.length;
  let theSum = 0;
  let mean = 0;
  for (let i = 0; i < arr.length; i++) {
    theSum += arr[i];
    mean = theSum / sampSize;
  } //return mean;
  // Variance is the deviations(i-mean)squared => summed and then divided by arr.length
  let newSum = 0; //push the new values after (i-mean)squared here
  let variance = 0;
  for (let j = 0; j < arr.length; j++) {
    newSum += Math.pow((arr[j] - mean), 2);
    variance = newSum / sampSize;
  }
  let squareRoot = 0;
  squareRoot = Math.sqrt(variance);
  return squareRoot;
};

//console.log(stdev([2,4,4,4,5,5,7,9]));
console.log(stdev([5,5,0,0,0]));