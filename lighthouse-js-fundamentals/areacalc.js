let calculateRectangleArea = function(length, width){
  if(length * width >= 0)
    return length * width;
}
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

let calculateTriangleArea = function(base, height){
  if((base * height) / 2 >= 0)
    return base * height / 2;
}
console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

let calculateCircleArea = function(radius) {
  if(radius >= 0)
    return Math.PI * Math.pow(radius, 2);
}
console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined