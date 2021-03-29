import { React, useEffect, useState } from 'react';
import ReactPlayer from "react-player"
import './App.css';

function App() {

  const [artistName, setArtistName] = useState("Alice Cooper");
  const [songAddress, setSongAddress] = useState("");

  // Do this as soon as the app loads
  useEffect(()=>{
    console.log("Bleep bloop say this once");
    
    fetch('data/songs.json')
    .then((response) => response.json())
    .then((json) => {
      console.log(json[0]["artist"]);
      
      setArtistName(json[0]["artist"]);
      setSongAddress(json[0]["url"]);

    });
  });

  return (
    <div className="App">
      <h1>Karoaoke party!</h1>
      <p>Artist name: {artistName}</p>

      <div className="PlayerArea">
        <ReactPlayer width="100vw" url={songAddress} />
      </div>
    </div>
  );
}

export default App;
