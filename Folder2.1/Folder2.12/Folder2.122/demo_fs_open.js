//Opens a exisiting file or creates a new one. For old, erases content and makes it writing-compatible.

var fs = require('fs');

fs.open('file1.txt', 'w', function(err, file) {
    if (err) throw err;
    console.log("Saved!");
});