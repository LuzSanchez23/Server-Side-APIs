require("dotenv").config();
var keys =require("./keys.js");
var fs =require("fs");
var axios=require("axios");
var moment =require("moment");

var command =process.argv[2, 3, 4]
var input =process.argv[2, 3, 4]
var bandApi = keys.apiKeys.bands;
var omdbApi =keys.apiKeys.omdb;

//Ana's part

function getMovie(input) {
    console.log("inside movie this");

 axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=full&tomatoes=true&apikey=6c3f9ab7&i=tt0118971" + omdbApi)
 .then (function(response) {
var moviedata = response.data;

//      function(response) {
         console.log("Title of the movie: " + response.data.Title);
         console.log("Year the movie came out: " + response.data.Year);
         console.log("IMDB Rating of the movie: " + response.data.Rated);
         console.log("Rotten Tomatoes Rating of the movie: " + response.data.RottenTomatoes);
         console.log("Country where the movie was produced: " + response.data.Country);
         console.log("Language of the movie: " + response.data.Language);
         console.log("Plot of the movie: " + response.data.Plot);
         console.log("Actors in the movie: " + response.data.Actors);
     })
    }
    
