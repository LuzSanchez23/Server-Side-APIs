//read and set enviroment variable
require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");

//user input
var command = process.argv[2]
var input = process.argv[3]
var bandsApi = keys.apiKeys.bands;
var omdbApi = keys.apiKeys.omdb;

//movie this//
function getMovie(input) {
    console.log("inside movie-this")
    axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=" + omdbApi)
    .then(function (response) {
    var moviedata = response.data;
  
    console.log("Title " + moviedata.Title)
    console.log("Year " + moviedata.Year)
    console.log("Rated " + moviedata.Rated)
    console.log("Director " + moviedata.Director)
    console.log("Actors " + moviedata.Actors)
})
}

// ====Bands in Town -- Luz's part=========
function showConcert(input) {
    console.log("Bands in Town Working")
    axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp" + bandsApi)
    .then(function (response) {

        var concert = response.data;
        console.log(response)
        console.log("Name of Venue " + concert[0].venue.name)
        console.log("Venue Location " + concert[0].venue.country)
        console.log("Concert date " + concert[0].festival_start_date)
        
})
}
// ====Bands in Town -- Ends here=========

function findSong(input) {
    console.log("Inside spotify-this-song")
    //Launch spotify
    keys.spotify.search({ type: 'track', query: input }, function (err, data) {
        if (err) {
            return console.log('Error Occurred' + err);
        } else {
        var spotifyArr = data.tracks.items;
        for (i = 0; i < 2; i++) {
            console.log("song name: " + spotifyArr[i].name)
            console.log("artist: " + spotifyArr[i].artist[0].name)
            console.log("------------------")
        }
    }
    })
};

//====Ana's Part - Movie This========
// function getMovie(input) {
//     console.log("inside movie this");

//  axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=full&tomatoes=true&apikey=6c3f9ab7&i=tt0118971" + omdbApi)
//  .then (function(response) {
// var moviedata = response.data;

// //      function(response) {
//          console.log("Title of the movie: " + response.data.Title);
//          console.log("Year the movie came out: " + response.data.Year);
//          console.log("IMDB Rating of the movie: " + response.data.Rated);
//          console.log("Rotten Tomatoes Rating of the movie: " + response.data.RottenTomatoes);
//          console.log("Country where the movie was produced: " + response.data.Country);
//          console.log("Language of the movie: " + response.data.Language);
//          console.log("Plot of the movie: " + response.data.Plot);
//          console.log("Actors in the movie: " + response.data.Actors);
//      })
//     }


// require(".env").config();
// const axios= require("axios");
// var keys = require("./keys.js");
// var moment = require("moment");
 //====Ana's Part - Movie This ends here========


// //=====Spotify This Song starts here=========
// function findsong(input) {
//     console.log("inside find-song")
//     spotify.search({type: 'track', query: input }, function (err, data) {
//         if (err) {
//             return console.log('Error Occurred'+ err);
//         }
//         var spotifyArr = data.tracks.items;
//         for (i =0; i < 2; i++) {
//             console.log("song name: " + spotifyArr[i].artists[0].name)
//             console.log("-------")
//         }

//     })
// }
//=====Spotify ends here=========

//======Switch Function========

    switch (command) {
        case "concert-this": showConcert(input);
            break;
        case "spotify-this-song": findSong(input);
            break;
        case "movie-this": getMovie(input);
            break;
        case "do-what-it-says":
            console.log("do what it says");
            doThis();
            break;
        default:
            console.log("LIRI doesn't know what you are talking about");
    }
 
 

