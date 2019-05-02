require("dotenv").config();
var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var Band = function() {
    // divider will be used as a spacer between the tv data we print in log.txt
    var divider = "\n------------------------------------------------------------\n\n";
  
    // findShow takes in the name of a tv show and searches the tvmaze API
    this.findBand = function(band) {
        
        var spotify = new Spotify(keys.spotify)({
            id: "2595885d6dae41afad7e22109e1f85ee",
            secret: "de71b31c16794eaca0300852060dfe02"
          });
  
      axios.get(URL).then(function(response) {
        // Place the response.data into a variable, jsonData.
        var jsonData = response.data;
  
        // showData ends up being the string containing the show data we will print to the console
        var showData = [
            "Artist: " + jsonData.artist,
            "Song: " + jsonData.song,
            "Rating: " + jsonData.rating.average,
            "Album: " + jsonData.album,
          ].join("\n\n");
  
        // Append showData and the divider to log.txt, print showData to the console
        fs.appendFile("log.txt", showData + divider, function(err) {
          if (err) throw err;
          console.log(showData);
        });
      });
    }

    this.findInfo = function(show) {
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    
        axios.get(URL).then(function(response) {
          // Place the response.data into a variable, jsonData.
          var jsonData = response.data;
    
          // showData ends up being the string containing the show data we will print to the console
          var showData = [
            "Venue Name: " + jsonData.venue.name,
            "Venue Location: " + jsonData.venue.location,
            "Date: " + jsonData.date(MM/DD/YY),
          ].join("\n\n");
    
          // Append showData and the divider to log.txt, print showData to the console
          fs.appendFile("log.txt", showData + divider, function(err) {
            if (err) throw err;
            console.log(showData);
          });
        });
};
}