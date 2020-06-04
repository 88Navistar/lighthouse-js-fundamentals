const request = require('request');
request('http://rawimpressions.ca', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

const fs = require('fs');


// Problem: Read the data files ** in order **, creating one final string as a result
// The data files are in the ./data directory

// fs.readdir(path[, options], callback)

fs.readdir('./data', (err, files) => {
  if (err) {
    console.log(err);
  }

  let str = "";

  files.forEach(file => {
    // console.log(file);
    fs.readFile(`./data/${file}`, 'utf-8', (err, data) => {
      if (err) throw err;
      console.log(data);
      console.log(typeof(data));
      str += data;
    });
  });

  console.log(str);
});