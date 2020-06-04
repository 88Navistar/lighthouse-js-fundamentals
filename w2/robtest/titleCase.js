const titleCase  = function(text) {
  text = text.toLowerCase().split(' ');

  for (let i = 0; i < text.length; i++) {
    text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
  }
  return text.join(' ');

};
titleCase('');
console.log(titleCase("WHAT HAPPENS HERE"));

// titleCase("this is an example") //should return "This Is An Example"
// titleCase("test") //should return "Test"
// titleCase("i r cool") //should return "I R Cool"
// titleCase("WHAT HAPPENS HERE") //should return "What Happens Here"
// titleCase("") //should return ""
// titleCase("A") //hould return "A"