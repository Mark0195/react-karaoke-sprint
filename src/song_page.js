import { React, useEffect, useState } from 'react';
import ReactPlayer from "react-player"
import './App.css';

function SongPage() {

  // Set our variables
  const [artistName, setArtistName] = useState("Alice Cooper");
  const [songAddress, setSongAddress] = useState("");
  const [songName, setSongName] = useState("Bloop");

  // Do this as soon as the app loads
  useEffect(()=>{
    console.log("Bleep bloop say this once");
    
    fetch('data/songs.json')
    .then((response) => response.json())
    .then((json) => {

      let randomNum = Math.floor(Math.random() * json.length)

      console.log(json[randomNum]["artist"]);
      
      setArtistName(json[randomNum]["artist"]);
      setSongAddress(json[randomNum]["url"]);
      setSongName(json[randomNum]["song"]);

    });
  },[]);

  return (
    <div className="App">
      <h1>Karaoke party!</h1>
      <p>Artist name: {artistName}</p>
      <p>Song name: {songName}</p>

      <div className="PlayerArea">

        <ReactPlayer width="100vw" url={songAddress} controls="true" />
      </div>
    </div>
  );
}

export default SongPage;
