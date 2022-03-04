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
    axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy" + omdbApi)
    .then(function (response) {

    var moviedata = response.data;
  
    console.log("Title " + moviedata.Title)
    console.log("Year " + moviedata.Year)
    console.log("Rated " + moviedata.Rated)
    console.log("Director " + moviedata.Director)
    console.log("Actors " + moviedata.Actors)
})
}

function findSong(input) {
    console.log("Inside spotify-this-song")
    //Launch spotify
    keys.spotify.search({ type: 'track', query: input }, function (err, data) {
        if (err) {
            return console.log('Error Occurred' + err);
        } else {
        var spotifyArr = data.tracks.items;
        // console.log(data.tracks.item[0])
        for (i = 0; i < 2; i++) {
            console.log("song name: " + spotifyArr[i].name)
            console.log("artist: " + spotifyArr[i].artist[0].name)
            console.log("------------------")
        }
    }
    })
}

function startProg(command, input) {
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
 
 
}
startProg(command, input);






//spotify//
// var Spotify = require("node-spotify-api");
// const { response } = require("express");
// var spotify = new keys.spotify(keys.spotify);