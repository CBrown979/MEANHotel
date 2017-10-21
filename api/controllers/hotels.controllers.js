//to tell controller file about the data so it knows where to find it; with node, if a json file, we only have to require it and it will bring the data in
//for text files, we'd have to use the file system module to read the file & load it in
//we do this at the top of the file before our first module export
//all the json data is loaded into the hotelData variable
//to return it in the root, instead of hardcoded jsonData, we'll use hotelData variable

var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res){
    //console.log("GET the json");
    console.log("GET the hotels");
    res
    .status(200)
    //.json( {"jsonData" : true} );
    .json( hotelData );
};//need to add to routes folder - require this controller function into the routes file

//now, when we run app.js - in the browser:
//instead of little confirmation of jsonData: true, we now get all the data being read in form the file system by node
//and being returned out to the browser from the controller via the route
