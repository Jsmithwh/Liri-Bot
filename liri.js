//basic code outline taken from Saturday exercise

require("dotenv").config();
var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var Band = function() {
   
    var divider = "\n------------------------------------------------------------\n\n";
  
    this.findBand = function(band) {
        
        var spotify = new Spotify(keys.spotify)({
            id: "2595885d6dae41afad7e22109e1f85ee",
            secret: "de71b31c16794eaca0300852060dfe02"
          });
  
      axios.get(URL).then(function(response) {
       
        var jsonData = response.data;
  
     
        var showData = [
            "Artist: " + jsonData.artist,
            "Song: " + jsonData.song,
            "Rating: " + jsonData.rating.average,
            "Album: " + jsonData.album,
          ].join("\n\n");
  
       
        fs.appendFile("random.txt", showData + divider, function(err) {
          if (err) throw err;
          console.log(showData);
        });
      });
    }

    this.findInfo = function(show) {
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    
        axios.get(URL).then(function(response) {
        
          var jsonData = response.data;
    
      
          var showData = [
            "Venue Name: " + jsonData.venue.name,
            "Venue Location: " + jsonData.venue.location,
            "Date: " + jsonData.date(MM/DD/YY),
          ].join("\n\n");
    
      
          fs.appendFile("log.txt", showData + divider, function(err) {
            if (err) throw err;
            console.log(showData);
          });
        });
};
}