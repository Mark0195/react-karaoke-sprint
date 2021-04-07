import { React, useEffect, useState } from 'react';
import ReactPlayer from "react-player"
import { Link } from 'react-router-dom';
import './ThemeHipsterMustard.css';


function SongPage() {

  // Set our variables
  const [artistName, setArtistName] = useState("Alice Cooper");
  const [songAddress, setSongAddress] = useState("");
  const [songName, setSongName] = useState("Bloop");
  const [showControls, setShowControls] = useState(true);
  const [fetchSong, setFetchSong] = useState(false);

  function randomizeSong() {
    console.log("Rando!");
    setFetchSong(true);
  }

  // Do this as soon as the app loads
  useEffect(()=>{
    
    fetch('/data/songs.json')
    .then((response) => response.json())
    .then((json) => {

      let randomNum = Math.floor(Math.random() * json.length)

      console.log(json[randomNum]["artist"]);
      
      setArtistName(json[randomNum]["artist"]);
      setSongAddress(json[randomNum]["url"]);
      setSongName(json[randomNum]["song"]);
      setFetchSong(false);

    });
  },[fetchSong]);

  return (
    <div className="MainContainer">
      
        <div className="TopNav">
            <Link to="/">
              <div className="HamburgerBtn"></div>
            </Link>
        </div>

        <div className="LogoContainer"></div>
        <div className="Songinfo">
            <p>Artist: {artistName}</p>
            <p>Song: {songName}</p>
        </div>

      <div className="PlayerArea">
        <ReactPlayer width="100vw" url={songAddress} controls={showControls} />
      </div>

      <button className="Sing-btn" onClick={randomizeSong}>Random Song</button>

      <Link to="/browse">
            <button className="Sing-btn">Browse Songs</button>
      </Link>
    </div>
  );
}

export default SongPage;
