
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
var bandsApi = keys.apiKeys.bands;
var omdbApi = keys.apiKeys.omdb;


// ====Bands in Town -- Luz's part=========
   function concertThis(input) {
        console.log("Bands in Town Working")
        var artist = process.argv[3]
        axios.get(" https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + bandsApi)
        .then(function (response) {
            var concert = response.data;
            console.log(response)
            console.log("Name of Venue " + concert[0].venue.name);
            console.log("Venue Location " + concert[0].venue.country);
            console.log("Concert date " + concert[0].datetime);  
    })
    }
// ====Bands in Town -- Ends here=========

//======spotify-this-song starts here-- Devin's part =========
function spotifyThisSong() {
    if (title == null) {
        //send the request to the Spotify API
        spotify.search(
            {
                type: "track",
                query: "The Sign" && "Ace of Base",
                limit: 1
            },
            function (err, data) {
                if (err) {
                    return console.log("Error: " + err)
                }
                console.log("Artist: ", data.tracks.items[0].artists[0].name)
                console.log("Song: ", data.tracks.items[0].name)
                console.log("Preview: ", data.tracks.items[0].preview_url)
                console.log("Album: ", data.tracks.items[0].album.name)
            })
    }
    else {spotify.search(
            {
                type: "track",
                query: title,
                limit: 1
            }, function (err, data) {
                if (err) {
                    return console.log("Error: " + err)
                }
                console.log("Artist: ", data.tracks.items[0].artists[0].name)
                console.log("Song: ", data.tracks.items[0].name)
                console.log("Preview: ", data.tracks.items[0].preview_url)
                console.log("Album: ", data.tracks.items[0].album.name)
            })
    }
}
//======spotify-this-song ends here-- Devin's part =========


//========Movie This starts here Annastasya Part========
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
}}
//========Movie This ends here========


// function startProg(command, input) {

    switch (command) {
        case "concert-this": concertThis();
            break;
        case "spotify-this-song": findSong();
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



 



