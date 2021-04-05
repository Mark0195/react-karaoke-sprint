import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


function BrowseMusic() {

    const [songList, setSongList] = useState(null)

    // Do this as soon as the app loads
    useEffect(()=>{     

       async function fetchData() {
           // Fetch the JSON file
           let response = await fetch('data/songs.json')
           response = await response.json()

            // Loop through each song and add the html into an array
           let songHtml = []
           for (let i = 0; i < response.length; i++) {
               let html = <Link to={"/single/"+i}><div className="BrowseItem" key={i}><h2>{response[i]["artist"]}</h2><p>{response[i]["song"]}</p> <img className="SongImage" src={"images/"+response[i]["image"]}></img></div></Link>
               songHtml.push(html)
           }
           setSongList(songHtml)
       }

       fetchData()
    },[]);

    return (
        <div className="App">
            <h1 className="Header">Okie Dokie Karaoke</h1>
            <div className="BrowseContainer">{songList}</div>
        </div>
    );
}

export default BrowseMusic;