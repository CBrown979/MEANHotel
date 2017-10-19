var fs = require('fs');

var onFileLoad = function(err, file){
    console.log("Got the file");
}
//For asynchronous callbacks
console.log("Going to get a file");
//var file = fs.readFileSync('readFileSync.js');
fs.readFile('readFileSync.js', onFileLoad);

console.log("App continues...");

