import React, { useState } from 'react';
import styles from "./App.module.css";
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import { Spotify } from "../../util/Spotify";

function App() {

  const [searchResults, setSearchResults] = useState([
    // {
    //   name: "Example Track Name 1",
    //   artist: "Example Track Artist 1",
    //   album: "Example Track Album 1",
    //   id: 1,
    // },
    // {
    //   name: "Example Track Name 2",
    //   artist: "Example Track Artist 2",
    //   album: "Example Track Album 2",
    //   id: 2,
    // },
  ]);

  const [playlistName, setPlaylistName] = useState("Example Playlist Name");
  const [playlistTracks, setPlaylistTracks] = useState([
    // {
    //   name: "Example Playlist Track Name 1",
    //   artist: "Example Playlist Track Artist 1", 
    //   album: "Example Playlist Track Album 1",
    //   id: 1,
    // },
    // {
    //   name: "Example Playlist Track Name 2",
    //   artist: "Example Playlist Track Artist 2", 
    //   album: "Example Playlist Track Album 2",
    //   id: 2,
    // },
    // {
    //   name: "Example Playlist Track Name 3",
    //   artist: "Example Playlist Track Artist 3", 
    //   album: "Example Playlist Track Album 3",
    //   id: 3,
    // }
  ]);

  function addTrack(track) {
    const existingTrack = playlistTracks.find(t => t.id === track.id)
    const newTrack = playlistTracks.concat(track);
    if (existingTrack) {
      console.log("Track already exists");
    } else {
      setPlaylistTracks(newTrack);
    }
  };

  function removeTrack(track) {
      const newTrack = playlistTracks.filter((item) => item.id !== track.id)
      setPlaylistTracks(newTrack);
  };

  function updatePlaylistName(name) {
    setPlaylistName(name);
  };

  function savePlaylist() {
    const trackURIs = playlistTracks.map((t) => t.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    })
  };

  function search(searchTerm) {
    Spotify.search(searchTerm).then(result => setSearchResults(result))
  };

  return (
   <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        <SearchBar onSearch={search}/>
        <div className={styles['App-playlist']}>
          {!searchResults && 
            <div>
              <h2>Search results will populate here.</h2>
              <p>Once the search is displayed you will be able to add any of the songs
                to your personal Spotify account as a playlist.
              </p>
            </div>
            }
          {searchResults && <SearchResults userSearchResults={searchResults} onAdd={addTrack}/>}
          {!playlistTracks && 
            <div>
              <h2>Playlist compliation will populate here.</h2>
              <p>Once you are finished adding songs to your playlist, click on the 
                Save To Spotify button below.
              </p>
            </div>

          }
          {playlistTracks && <Playlist 
            playlistName={playlistName} 
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />}
        </div>
      </div>
   </div>
  );
}

export default App;
