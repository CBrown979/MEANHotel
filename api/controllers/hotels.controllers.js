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

module.exports.hotelsGetOne = function(req, res){
    var hotelId = req.params.hotelId; //we will find the URL parameter when that route is called & save it to our local variable inside this function. We can use variable inside the console.log & to get a specific piece of data
    var thisHotel = hotelData[hotelId]; //variable created to hold the info about an indiv hotel, using the URL parameter as the location index on the hotel data array - which is basically the json object, which is an array itself --> now must replace the output in the res.json & change that from the hotelData variable to a new thisHotel variable
    console.log("GET the hotelId", hotelId);
    res
    .status(200)
    .json( thisHotel ); //because our data is just a json array, we cannot search thru Ids on it; for now, we'll use the URL parameter as a location id on the actual array itself; and we'll extract that into a variable and then we can return that in the res.json
};


//now, when we run app.js - in the browser:
//instead of little confirmation of jsonData: true, we now get all the data being read in form the file system by node
//and being returned out to the browser from the controller via the route
