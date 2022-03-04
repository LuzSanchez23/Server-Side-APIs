<<<<<<< HEAD
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

=======

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


require(".env").config();
const axios= require("axios");
var keys = require("./keys.js");
var moment = require("moment");
//movie this 
function getMovie(input) {
    console.log("inside movie-this")
    axios.get("http://www.omdbapi.com/?t="+input+"&y=&plot=short&apikey="+ omdbApi)

    .then(function(response){
        var moviedata = response.data;
        console.log("title: " + moviedata.Title)
        console.log("year: "+ moviedata.Year)
        console.log("rated: "+moviedata.Rated)
        console.log("released: "+moviedata.Released)
        console.log("director: "+ moviedata.Director)
        console.log("writer: "+ moviedata.Writer)
        console.log("actor: "+ moviedata.Actor)
        console.log("plot: " + moviedata.Plot)
    })
}

//spotify this song
function findsong(input) {
    console.log("inside find-song")
    spotify.search({type: 'track', query: input }, function (err, data) {
        if (err) {
            return console.log('Error Occurred'+ err);
        }
        var spotifyArr = data.tracks.items;
        //console.log(data.tracks.items[0])
        for (i =0; i < 2; i++) {
            console.log("song name: " + spotifyArr[i].artists[0].name)
            console.log("-------")
        }

    })
}
>>>>>>> 44c062402b83d9df353eda2948b892850465d1e6
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


<<<<<<< HEAD




//spotify//
// var Spotify = require("node-spotify-api");
// const { response } = require("express");
// var spotify = new keys.spotify(keys.spotify);
=======
>>>>>>> 44c062402b83d9df353eda2948b892850465d1e6
