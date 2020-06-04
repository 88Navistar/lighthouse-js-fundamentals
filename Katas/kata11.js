
const calculateChange = function(total, cash) {
  let change = 0
  const money = {
    twentyDollars:  2000,
    tenDollars: 1000,
    fiveDollars: 500,
    twoDollars: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1,
    };
    
    change = (cash - total); // 
    //create a change plus remainer pool
    // write a function to loop through it or if/switch through it.
    if(change - money.twentyDollars >= 0){
      let A = math.Floor(change / money.twoDollars) // # of twentys to log.  How do I log this?
      let B = change % money.twoDollars // remainder to carry forward. Can I push this forward to a remainder pool?
    } else{
      false
    }

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

