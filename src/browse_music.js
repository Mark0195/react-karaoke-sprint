import { React } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function BrowseMusic() {
    return (
        <div className="App">
            <h1 className="Header">Okie Dokie Karaoke</h1>
            <Link to="/browse">
                <button className="browse-btn">Browse</button>
            </Link>
        </div>
    );
}

export default BrowseMusic;