const fs = require('fs');
const NN = require('nearest-neighbors');
const dataset = require('./dataset.json');
const machine = new NN(dataset);
const Hapi = require('hapi');
var SpotifyWebApi = require('spotify-web-api-node');
 
const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(process.env.SPOTIFY_TOKEN);

const server = new Hapi.Server();
server.connection({ 
  host: 'localhost', 
  port: 8000 
});
server.route({
  method: 'GET',
  path:'/{id}', 
  handler: function (request, reply) {
    spotifyApi.getAudioFeaturesForTrack(request.params.id,(err, res)=>{
      return reply(machine.classify(res.body,3,'class') || err);
    });
  }
});
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
