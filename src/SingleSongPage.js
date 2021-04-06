import { React, useEffect, useState } from 'react';
import ReactPlayer from "react-player"
import { Link } from 'react-router-dom';
import './ThemeHipsterMustard.css';

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
        <div className="MainContainer">
        <div className="TopNav">
            <Link to="/">   
                <div className="HamburgerBtn"></div>
            </Link>
        </div>

        <div className="LogoContainer"></div>            
        
        <p>Artist: {artistName}</p>
        <p>Song: {songName}</p>

            <div className="PlayerArea">
                <ReactPlayer width="100vw" url={songAddress} controls={showControls} />
            </div>

            <Link to="/song">
                <button className="Sing-btn">Random Song</button>
            </Link>

            <Link to="/browse">
                <button className="Sing-btn">Browse Songs</button>
            </Link>
        </div>

        
    );
}

export default SingleSongPage;
