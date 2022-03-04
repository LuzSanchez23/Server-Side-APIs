//Ana's part
require("dotenv").config();
var keys = require("./keys.js");



// Info for Moment -- Date Formatting
var moment = require("moment");

// Info for fs
var fs = require("fs");

//Info for axios
var axios = require("axios");

// Takes command

var command = process.argv[2]
// var input = process.argv[2]
// var bandApi = keys.apiKeys.bands;
var omdbApi = keys.apiKeys.omdb;
// var movie = response.data;
var movie = process.argv[3];

function movieThis(){
if (movie == null) {
    axios.get("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy")
   
    
    .then(function (response) {
        console.log(response)   
        // var movie = response.data;
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
else {
    const movieName = process.argv[3]
    const queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"
    axios.get(queryUrl)
        .then(function (response) {
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
}



// function startProg(command, input) {
    switch (command) {
        case "concert-this": showConcert(input);
            break;
        case "spotify-this-song": findSong(input);
            break;
        case "movie-this": movieThis();
            break;
        case "do-what-it-says":
            console.log("do what it says");
            doThis();
            break;
        default:
            console.log("LIRI doesn't know what you are talking about");
    }


// }
// startProg(command, input);





