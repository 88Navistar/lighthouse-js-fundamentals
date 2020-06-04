const judgeVegetable = function (vegetables, metric) {
  let high = 0;
  let pos = 0;
  if (metric === 'redness'){
    for (let i = 0; i < vegetables.length; i++){
      if (vegetables[i].redness > high){
        high = vegetables[i].redness;
        pos = i;
      }
    }
    return vegetables[pos].submitter;
  }else if(metric === 'plumpness'){
    for (let i = 0; i < vegetables.length; i++){
      if (vegetables[i].plumpness > high){
        high = vegetables[i].plumpness;
        pos = i;
      }
    }
    return vegetables[pos].submitter;
  }
}
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));