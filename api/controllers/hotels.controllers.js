//to tell controller file about the data so it knows where to find it; with node, if a json file, we only have to require it and it will bring the data in
//for text files, we'd have to use the file system module to read the file & load it in
//we do this at the top of the file before our first module export
//all the json data is loaded into the hotelData variable
//to return it in the root, instead of hardcoded jsonData, we'll use hotelData variable

//from vid14 -- common ways of passing data from website to server: querystrings for GET requests; and FormBodies for POST requests
//we'll be adding a level of Pagination by 1)setting up a count (the # of hotels we want to return at once); 2)an offset, (the starting position) - we'll make it so that each of these things can be set through a querystring
//Express automatically slices & dices all queryString parameters, add them to the request object, in a particular query
//QueryStrings are often used when forms have a GET method; that's how they send their data to the server. They get all the form information & send it as QuerySrings on the UrL
//But when the form is posted, the fields are added to the body of the request
//Unlike with queryStrings, Express can't natively deal with a posted form - so we need to install middleware called BodyParser
//

var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res){
    //console.log("GET the json");
    console.log("GET the hotels");
    console.log("req.query");

    var offset = 0;
    var count = 5;

    if (req.query && req.query.offset){ //if query property exists on the request object AND the query property has it's own property of offset; and if both exist it means we have an offset parameter from the queryString and we want to take that & set it as being the offset value in our controller. Since querystring values are strings; we run it thru parseInt to make it a number, and assign that to the offset variable 
        offset = parseInt(req.query.offset, 10);
    }

    if (req.query && req.query.count){ 
        count = parseInt(req.query.count, 10);
    }

    var returnData = hotelData.slice(offset, offset+count);

    //this line is taking the hotelData array that we're getting from the json file 7 slicing it; using the offset value, set to 0, as the starting point; and adding the count value to the offset to get the end point of the slice -- then we're returning the result into a new variable called returnData
    //next step is to extract the values from the req.query object; and check that those properties actually exist in the query object
    res
    .status(200)
    //.json( {"jsonData" : true} );
    //.json( hotelData );
      .json( returnData );
};//need to add to routes folder - require this controller function into the routes file

module.exports.hotelsGetOne = function(req, res){
    var hotelId = req.params.hotelId; //we will find the URL parameter when that route is called & save it to our local variable inside this function. We can use variable inside the console.log & to get a specific piece of data
    var thisHotel = hotelData[hotelId]; //variable created to hold the info about an indiv hotel, using the URL parameter as the location index on the hotel data array - which is basically the json object, which is an array itself --> now must replace the output in the res.json & change that from the hotelData variable to a new thisHotel variable
    console.log("GET the hotelId", hotelId);
    res
    .status(200)
    .json( thisHotel ); //because our data is just a json array, we cannot search thru Ids on it; for now, we'll use the URL parameter as a location id on the actual array itself; and we'll extract that into a variable and then we can return that in the res.json
};

module.exports.hotelsAddOne = function(req, res){
    console.log("POST new hotel");
    console.log(req.body);//this is where the body-parser middleware that we applied, will parse all the data that it parses out of the posted form
    res
      .status(200)  
      .json(req.body); //need to test in Postman, because we need a form
}


//now, when we run app.js - in the browser:
//instead of little confirmation of jsonData: true, we now get all the data being read in form the file system by node
//and being returned out to the browser from the controller via the route
