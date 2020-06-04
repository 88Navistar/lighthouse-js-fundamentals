// Paired programming collab with Brandon Macleod, LHL May 25 West Cohort
const transpose = function(matrix) {
  let trans = [];
  for (let n = 0; n < matrix[0].length; n++) {
    trans.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      trans[j][i] = matrix[i][j];
    }
  }
  return trans;
};
  // Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};