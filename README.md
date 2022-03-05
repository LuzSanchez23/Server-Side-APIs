# Server-Side-APIs

### Overview



This app can take in one of the following commands:

 * `concert-this`
 * `spotify-this-song`
 * `movie-this`
 * `do-what-it-says`

### What Each Command Should Do

1. `node liri.js concert-this <artist/band name here>`

     * Name of the venue
     * Venue location
     * Date of the Event (use moment to format this as "MM/DD/YYYY")

EXAMPLE: 
![Concert Example]


2. `node liri.js spotify-this-song '<song name here>'`
   * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

    
    *If no song is provided then your program will default to "The Sign" by Ace of Base.*

EXAMPLE: 
![Song Example]


3. `node liri.js movie-this '<movie name here>'`

     * Title of the movie.
     * Year the movie came out.
     * IMDB Rating of the movie.
     * Rotten Tomatoes Rating of the movie.
     * Country where the movie was produced.
     * Language of the movie.
     * Plot of the movie.
     * Actors in the movie.
   EXAMPLE: 
![Movie Example](https://github.com/LuzSanchez23/Server-Side-APIs/blob/main/movies%20for%20readme.png?raw=true)

   *If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'*

EXAMPLE: 
![Movie Example](https://github.com/LuzSanchez23/Server-Side-APIs/blob/main/mr%20nobody%201.png?raw=true)
![Movie Example](https://github.com/LuzSanchez23/Server-Side-APIs/blob/main/mr%20nobody%202.png?raw=true)

