let loopyLighthouse = function (range, multiples, words){
  var newRange = '';
  for (var i = range[0]; i <= range[1]; i++ ){
    
    if(i % multiples[0] === 0 && i % multiples[1] === 0) {
      newRange += (words[0] + words[1])
      console.log(words[0] + words[1]);
    } else if (i % multiples[0] === 0) {
      newRange += words[0];
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      newRange += words[1];
      console.log(words[1]);
    } else {
      newRange += i
      console.log(i) 
    }
  } return newRange
};
//console.log(loopyLighthouse([15, 90]))

/* range should be an array of 2 numbers representing the start and end values for the loop.
multiples should be an array of 2 numbers representing the multiples you want to replace with words.
words should be an array of 2 strings representing the words that will replace the multiples.
For example, say we called the function with the following arguments.*/

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
// The loopyLighthouse function should log to the console all the numbers from 15 to 90, 
//except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon".

// for(let x = 100; x <= 200; x++){
//   if (x % 3 === 0 && x % 4 === 0){
//     console.log('LoopyLighthouse');
//   }
//   else if (x % 4 === 0) {
//     console.log('Lighthouse'); 
//   }
//   else if (x % 3 === 0) {
//     console.log('Loopy');
//   }
//   else{
//     console.log(x)
//   }
// }