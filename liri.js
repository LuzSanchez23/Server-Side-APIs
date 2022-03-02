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
