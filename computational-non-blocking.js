var child_process = require('child_process');

console.log(1);

var newProcess = child_process.spawn('node', ['_fibonacci.js'], {
    stdio : 'inherit' //to show that console.log of child process shows in the command line of the main process
});

console.log(2);