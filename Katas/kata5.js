const urlEncode = function(text) {
  let nono = text.trim();
  let newText = '';
  
  for(i = 0; i < text.length; text++){
    newText = nono.split(' ').join('%20'); 
    } return newText
} 


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
