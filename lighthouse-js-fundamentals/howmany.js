// let howManyHundreds = function(num){
//   return (num - (num % 100)) / 100;
// }
// console.log(howManyHundreds(850));

let howManyHundreds = function(num){
  
  return Math.floor(num / 100);
}
console.log(howManyHundreds(850));