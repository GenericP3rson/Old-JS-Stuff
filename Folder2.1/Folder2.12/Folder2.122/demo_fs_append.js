//Creates a new file or adds on to an existing file.

var fs = require('fs');

fs.appendFile('newFile.txt', 'Hello!', function(err) {
    if(err) throw err;
    console.log("Saved! or Updated!");
});