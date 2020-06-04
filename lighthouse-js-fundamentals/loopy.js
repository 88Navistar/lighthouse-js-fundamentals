for(let x = 100; x <= 200; x++){
  if (x % 3 === 0 && x % 4 === 0){
    console.log('LoopyLighthouse');
  }
  else if (x % 4 === 0) {
    console.log('Lighthouse'); 
  }
  else if (x % 3 === 0) {
    console.log('Loopy');
  }
  else{
    console.log(x)
  }
}

// var sound = ''; 
// function laugh (num) {
//     for(var x = 0; x < num; x++) {
//       sound = sound + 'ha';   
//     }
//     sound = sound +'!';
//     return sound;
// }

// console.log(laugh(4))