const talkingCalendar = function(date) {
  
  let human = date.split('/')
  let year = human[0];
  let month = human[1];
  let day = human [2];
  let output = month
  switch (month) {
    case '01':
      output = 'January';
    case '02':
      output = 'February';
    case '03':
      output = 'March';
    case '04':
      output = 'April';
      break;
    case '05':
      output = 'May';
      break;
    case '06':
      output = 'Jume';
    case '07':
      output = 'July';
    case '08':
      output = 'August';
    case '09':
      output = 'September';
      break;
    case '10':
      output = 'October';
      break;
    case '11':
      output = 'November';
      break;
    case '12':
      output = 'December';
      break;
  }
  let daySuff = day;
    switch(day){
      case '02': case '22':
        daySuff = day.concat('nd');
        break;
      case '01': case '21': case '31':
        daySuff = day.concat('st');
        break;
      case '03': case '23':
        daySuff = day.concat('st');
        break;
      case '04': case '05': case '06': case '07': case '08': case '09': case '10': case '11': case '12': case '13': case '14': case '15': case '16': case '17': case '18': case '19': 
      case '20': case '24': case '25': case '26': case '27': case '28': case '29': case '30': 
        daySuff = day.concat('th');
        break;

    }
 
  
  return output + ' ' + daySuff + ', ' + year
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));