var filename = "index.js";

var hello = function(name){
    console.log("Hello " + name);
};

var intro = function() {
    console.log("I'm a node file called " + filename);
};

module.exports = { //exporting functions for use in app.js
    hello : hello,
    intro : intro
};