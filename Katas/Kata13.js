const makeCase = function(input, xyz) {
  let final = '';
  switch(xyz) {
    case 'camel':
    input.split(' ').forEach(function (a, b) {
      let add = a.toLowerCase();
      final += (b === 0 ? add : add[0].toUpperCase() + add.slice(1));
      return final;
    }); 
     
    case 'pascal':
      input.split(' ')
      .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
      //.join(' ')
    // input.split(' ').forEach();
    // final += input.toUpperCase().slice()
    return final;
    
 } 
} 

//     switch(xyz){
//       case 'pascal':
//         input.split(' ').forEach(function (a, b) {
//           let add = a.toLowerCase();
//           final += (b === 0 ? add : add[0].toUpperCase() + add.slice(1));
//          break;
//     });
//  } return final
// }
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", ["upper", "snake"]));