const camelCase = function(input) {
  let final = ''
  input.split(' ').forEach(function (a, b) {
    let add = a.toLowerCase();
    final += (b === 0 ? add : add[0].toUpperCase() + add.slice(1));
  });
    return final
  }

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

// function toCamelCase(sentenceCase) {
//   var out = "";
//   sentenceCase.split(" ").forEach(function (el, idx) {
//       var add = el.toLowerCase();
//       out += (idx === 0 ? add : add[0].toUpperCase() + add.slice(1));
//   });
//   return out;
// }