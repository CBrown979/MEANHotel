//the routes folder will contain everything related to API
//Controllers, Routes, Data & Models

//1) need a route that returns all our hotel data 
//must change route name from /json to /hotels; and remove post method because it is not needed right now

var express = require('express'); //
var router = express.Router(); //instantiate the express router

var ctrlHotels = require('../controllers/hotels.controllers.js');

router 
  //.route('/json')//chain command route - paramter is the string of the path we want to map
  .route('/hotels')
  .get(ctrlHotels.hotelsGetAll);//this is all that is needed to map a controller to a route

//old version below - from vid 11 and prior only - before controller file intro  
//   .get(function(req, res){//inside method is the callback function that runs when the route is called
//      console.log("GET the json");
//      res
//         .status(200)
//         .json( {"jsonData" : true} );
//  })//define your route, then define your method and the function you want to run
    //and can chain different methods to a single route; can also post 
  
//   .post(function(req, res){
//       //need to require in these routes in app.js
//      console.log("POST the json route");
//      res
//         .status(200)
//         .json( {"jsonData" : "POST received"} );
//     });
module.exports = router; //export the instantiated router to access it from the app.js file