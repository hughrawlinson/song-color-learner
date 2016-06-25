# Song Color Learner

A KNN-powered web api that will estimate the 'color' of a song, based on data acquired from Spotify's playlist extender.

## Usage
1. Put a Spotify Web API Access Token in your environmental variables as `SPOTIFY_TOKEN`
2. Run learner.js
3. Go to `localhost:8000/{Spotify Song ID}` and find out the colour of your song

## How it works
I created blank playlists named each of `Red`, `Orange`, `Yellow`, `Green`, `Blue`, `Indigo`, and `Violet`, and filled it with the first 20 suggestions from Spotify's playlist extender. I then grabbed the audio features of each of the tracks, tagged them with the playlist they came from, and stored the data. I then build a web service that when provided with an unknown Spotify track id, will grab the audio features and guess the most likely color of that track using K-nearest-neighbor against the dataset.

## Learnings
1. There were clear cultural themes among the playlists.
  * `Green` strongly featured songs whose themes related to marijuana in some way. Surprise surprise.
  * `Red` seems to be strongly associated with so-called "Red States", and country music.
2. Regardless of the color, songs in each playlist tended to contain their playlist title in their name.
3. Color seems to correlate to genre
4. In this dataset, acousticness had a medium negative correlation with energy.
