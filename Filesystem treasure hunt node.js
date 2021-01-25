//app.js

const fs = require('fs');

// let secretWord = "cheeseburgerpizzabagels"

let secretWord = null;

let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else { 
console.log(`Provided file contained: ${data}`);
  }
};

fs.readFile('./fileOne.txt', 'utf-8', readDataCallback);
fs.readFile('./anotherFile.txt', 'utf-8', readDataCallback);
fs.readFile('./finalFile.txt', 'utf-8', readDataCallback);



//bash

$ node app.js
Provided file contained: Not there yet! You must look in the file anotherFile.txt
$ node app.js
Provided file contained: Not there yet! You must look in the file anotherFile.txt
Provided file contained: So close, and yet so far. Perhaps if you look in finalFile.txt
$ node app.js
Provided file contained: Not there yet! You must look in the file anotherFile.txt
Provided file contained: So close, and yet so far. Perhaps if you look in finalFile.txt
Provided file contained: The ancient scroll! It's beautiful! It says the secret word is ... "cheeseburgerpizzabagels".
$ 