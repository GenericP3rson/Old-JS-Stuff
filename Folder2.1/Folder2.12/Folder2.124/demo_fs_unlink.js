var fs = require('fs');

fs.unlink('oldFile.txt', function(err) {
    if (err) throw err;
    console.log("Deleted!");
})