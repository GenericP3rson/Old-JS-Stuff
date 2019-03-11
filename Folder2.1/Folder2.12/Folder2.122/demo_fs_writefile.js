//Creates a new file with the stuff or changes a document to the stuff.

var fs = require('fs');

fs.writeFile('newFile.txt', 'Content.', function(err) {
    if (err) throw err;
    console.log("Saved! or Replaced!");
});