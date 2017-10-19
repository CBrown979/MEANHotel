var express = require('express');
var app = express(); //initial express to create the application

app.set('port', 3000);

var server = app.listen(app.get('port'), function(){
 var port = server.address().port;
 console.log('Magic happens on port ' + port);    
});
//console.log('Me first!'); //validates that app.listen is asynchronous

//recap of above - we've learned how to:
// Bring express into our app
// Instantiate an express application
// How to set a port# and read #s using application variables
// How to listen for requests on that particular port

// Also learned that app.listen is asynchronous






//from original app.js file, for everything before vid 7 below
// console.log("It works!");

// require('./instantHello'); //to look for instantHello in same folder, prefix with ./
// var goodbye = require('./talk/goodbye');
// var talk = require('./talk'); // when u have an index.js file in ur folder, u only need to specify folder name to locate the index.js file
// var question = require('./talk/question');

// talk.intro();
// talk.hello("Simon");

// var answer = question.ask("What is the meaning of life?");
// console.log(answer);

// goodbye();