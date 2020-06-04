const organizeInstructors = function(instructors) {
  var final = {};
  for(let i = 0; i < instructors.length; i++) {
    let course = instructors[i].course;
    if (course in final) {
      final[course].push(instructors[i].name);
    } else {
      final[course] = [instructors[i].name]
    }
  }
  return final;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }
// Create a function named organizeInstructors that will receive an array of instructor objects, and will return a new object that has the following format:

// {
//   CourseName: [instructors]
// } 