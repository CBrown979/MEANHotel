var express = require('express'); //
var router = express.Router(); //instantiate the express router

router 
  .route('/json')//chain command route - paramter is the string of the path we want to map
  .get(function(req, res){//inside method is the callback function that runs when the route is called
     console.log("GET the json");
     res
        .status(200)
        .json( {"jsonData" : true} );
 })//define your route, then define your method and the function you want to run
    //and can chain different methods to a single route; can also post 
  
  .post(function(req, res){
      //need to require in these routes in app.js
     console.log("POST the json route");
     res
        .status(200)
        .json( {"jsonData" : "POST received"} );
    });
module.exports = router; //export the instantiated router to access it from the app.js file