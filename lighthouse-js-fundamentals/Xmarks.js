const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

const finalPosition = function (moves) {
  let axis = [0,0];
  for(let dir = moves);{
    switch(dir) {
      case 'north':
        axis[1] += 1;
        break;
      case 'south':
        axis[1] -= 1;
        break;
      case 'west':
        axis[0] -= 1;
        break;
      case 'east':
        axis[0] += 1;
        break;
      
    }
  } return axis
}

console.log(axis(moves));