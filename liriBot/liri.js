var keys = require('./keys.js');
var request = require('request');
var twitter = require('twitter');
var spotify = require('spotify');
var client = new twitter(keys.twitterKeys);
var fs = require('fs');

var noddeArgv = process.argv;
var command = process.argv[2];

var x = "";
for (var i=3; i<nodeArgv.length; i++) {
	if(i>3 && i<nodeArgv.length) {
		x = x + "+" + nodeArgv[i];
	} else{
		x = x + nodeArgv {i};
	}

}

switch(command){
	case "my-tweets";
	showTweets();
	break;

	case "spotify-this-song":
	if(x){
		spotifySong(x);
	} else{
		spotifySong(" ")
	}

	break;

	case "movie-this":
	if(x) {
		omdbData(" ")
	}
	break;
	case "do-what-it-says":
	doThing();
	break;

	default:
	console.log("{Enter: my-teets, spotify-this-song, movie-this, do-what-it-says")
	break;


}


function showTweets(){
var screenName = {screen_name: ' '};
client.get('statuses/user_timeline', screenName, function(error, tweets, response){
if(!error) {
	for(var i = 0; i<tweets.length; i++) {
		var date = tweets[i].created_at;
		console.log(" :" + tweets[i].text + "Created At: " + date.substring(0, 19));
		console.log("-----");

		fs.appendFile('log.txt,' "screenName: " + tweets[i].text + "Created At: " + date.substring(0, 19));
		fs.appendFile('log.txt', "-----" );
	}
}else{
	console.log('Error occurred');
}

});
}
 function spotifySong(song){
 	spotify.search({type: 'track', query: song}, function(error, data){
 		if(!error) {
 			for(var i = 0; i <data.tracks.items.length; i++) {
 				var songData = data.ttracks.items[i];

 				console.log("Artist: " + songData.name);
 				console.log("Song: " + songData.name);
 				console.log("Preview URL: " + songData.preview_url);
 				console.log("Album: " + songData.album.name);
 				console.log("-----");

 				fs.appendFile('log.txt', songData.artists[0].name);
 				fs.appendFile('log.txt', songData.name);
 				fs.appendFile('log.txt', songData.preview_url);
 				fs.appendFile('log.txt', songData.album.name);
 				fs.appendFile('log.txt', "-----");
 			}
 		} else {
 			console.log('Error occurred.');
 		}
 	});
 }
 	function omdbData(movie){
 		var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&plot=short&tomatoes=true';


 		request(omdbURL, function (error, response, body) {
 			if(!error && response.statusCode == 200) {

 				var body = JSON.parse(body);

 				console.log("Title: " + body.Title);
 				console.log("Realese Year: " + body.Year);
 				console.log("IMdb Rating: " + body.imdbRating);
 				console.log("Country: " + body.Country);
 				console.log("Language: " + body.Language);
 				console.log("Plot: " + body.Plot);
 				console.log("Actors: " + body.Actors);
 				console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
 				console.log("Rotten Tomatoes URL: " + body.tomatoURL);

 				fs.appendFile('long.txt', "Title: " + body.Title);
 				fs.appendFile('long.txt', "Realese Year: " + body.Year);
 				fs.appendFile('long.txt', "IMdb Rating: " + body.imdbRating);
 				fs.appendFile('long.txt', "Country: " + body.Country);
 				fs.appendFile('long.txt', "Language: " + body.Language);
 				fs.appendFile('long.txt', "Plot: " + body.Plot);
 				fs.appendFile('long.txt', "Actors: " + body.Actors);
 				fs.appendFile('long.txt', "Rotten Tomatoes Rating: " + body.tomatoRating);
 				fs.appendFile('long.txt', "Rotten Tomatoes URL: " + body.tomatoURL);


 			} else{
 				console.log('Error occurred.')
 			}	
 			if(movie === "Movie Title") {
 				console.log("-----");
 				console.log(" ");
 				console.log(" ");

 				fs.appendFile('log. txt', "------");
 				fs.appendFile('log. txt', " ");
 				fs.appendFile('log. txt', " ");
 			}


 		});
 	}
function doThing (){
	fs.readFile('random.txt', "ut8, function(error, data"){
		var txt = data.split(',');
		spotifySong(txt[1]);
	
});








}