const checkAir = function (samples, threshold) {
  let counter = '';
  let howDirty = 0
  let final = ''
  for(let i = 0; i < samples.length; i++) {
    if(samples[i] === 'dirty') counter++;
    howDirty =  counter / 10; 
  } 
    if(howDirty > threshold){ 
    final = 'Polluted';
    } else {
      final = 'Clean';
    } return final;
  
}

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
 ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
 0.25
));

console.log(checkAir(
 ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
 0.9
));

// const checkAir = function (samples, threshold) {
//   let counter = 0;
//   for(let i = 0; i < samples.length; i++) {
//     if(samples === 'dirty') {
//     counter += samples[i]
    
//     }
//   } return counter
// }