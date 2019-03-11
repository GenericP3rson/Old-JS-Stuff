var fs = require('fs');

fs.rename('newFile.txt', 'oldFile.txt', function(err) {
    if (err) throw err;
    console.log("Renamed!");
});