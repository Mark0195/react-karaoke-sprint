import { React, useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom'


function BrowseMusic() {

    const [browseHtml, setBrowseHtml] = useState("Hello?");

    // Do this as soon as the app loads
    useEffect(()=>{
        console.log("Bleep bloop say this once");
        
        fetch('data/songs.json')
        .then((response) => response.json())
        .then((json) => {

            let html_item = "";

            for (let i=0; i < json.length; i++){
                // console.log(json[i]["artist"]);
                // console.log(json[i]["song"]);

                html_item += `<h2>${json[i]["artist"]}</h2>`;
                html_item += `<p>${json[i]["song"]}</p>`;
                html_item += `<img src='./images/${json[i]["image"]}' width='120px' style='cursor:pointer'>`;
                html_item += `<hr>`;
            }

            console.log(html_item);
            setBrowseHtml(html_item)

        });
    },[]);

    return (
        <div className="App">
            <h1 className="Header">Okie Dokie Karaoke</h1>

            <div dangerouslySetInnerHTML={{__html: browseHtml}} />      


        </div>
    );
}

export default BrowseMusic;