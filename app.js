require('./instantHello'); //to look for instantHello in same folder, prefix with ./
var goodbye = require('./talk/goodbye');
var talk = require('./talk'); // when u have an index.js file in ur folder, u only need to specify folder name to locate the index.js file
var question = require('./talk/question');

talk.intro();
talk.hello("Simon");

var answer = question.ask("What is the meaning of life?");
console.log(answer);

goodbye();