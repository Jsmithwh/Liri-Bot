//basic code outline taken from Saturday exercise

require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');

var capture = process.argv[2];
console.log(capture);
var infoCapture = process.argv[3];
console.log(infoCapture);

if(capture==="spotify-this-song"){
  var spotify = new Spotify(keys.spotify);
  spotify.search({ type: 'track', query: infoCapture }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data.tracks.items); 
  });
}

if(capture==="movie-this"){
  axios.get("http://www.omdbapi.com/?apikey=1a2b6fc3&t="+ infoCapture).then(function(data){
    console.log(data);
  })

}

if(capture==="concert-this"){
  axios.get("https://rest.bandsintown.com/artists/" + infoCapture + "/events?app_id=codingbootcamp").then(function(data){
    console.log(data);
  })
}
// var Band = function() {
   
//     var divider = "\n------------------------------------------------------------\n\n";
  
//     this.findBand = function(band) {
        
       
  
//       axios.get(URL).then(function(response) {
       
//         var jsonData = response.data;
  
     
//         var showData = [
//             "spotify-this-song: " + jsonData.artist,
//             jsonData.song,
//             jsonData.rating.average,
//             jsonData.album,
//           ].join("\n\n");
  
       
//         fs.appendFile("random.txt", showData + divider, function(err) {
//           if (err) throw err;
//           console.log(showData);
//         });
//       });
//     }

//     this.findInfo = function(show) {
//         var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    
//         axios.get(URL).then(function(response) {
        
//           var jsonData = response.data;
    
      
//           var showData = [
//             "concert-this: " + jsonData.venue.name,
//             jsonData.venue.location,
//             jsonData.date(MM/DD/YY),
//           ].join("\n\n");
    
      
//           fs.appendFile("log.txt", showData + divider, function(err) {
//             if (err) throw err;
//             console.log(showData);
//           });
//         });
// };
// }