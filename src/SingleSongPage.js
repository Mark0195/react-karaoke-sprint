import { React, useEffect, useState } from 'react';
import ReactPlayer from "react-player"
import './App.css';

const SingleSongPage = ({match}) => {

    console.log(match.params.id);

      // Set our variables
    const [artistName, setArtistName] = useState("Alice Cooper");
    const [songAddress, setSongAddress] = useState("");
    const [songName, setSongName] = useState("Bloop");
    const [showControls, setShowControls] = useState(true);
    const [songID, setSongID] = useState(match.params.id)

    // Do this as soon as the app loads
    useEffect(()=>{

        fetch('/data/songs.json')
        .then((response) => response.json())
        .then((json) => {

            setArtistName(json[songID]["artist"]);
            setSongAddress(json[songID]["url"]);
            setSongName(json[songID]["song"]);
        });

    },[]);

    return (
        <div className="App">
            <h1>Karaoke party!</h1>
            <p>Artist name: {artistName}</p>
            <p>Song name: {songName}</p>

            <div className="PlayerArea">
                <ReactPlayer width="100vw" url={songAddress} controls={showControls} />
            </div>
        </div>
    );
}

export default SingleSongPage;
