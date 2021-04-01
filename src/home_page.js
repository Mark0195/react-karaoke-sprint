import { React } from 'react';
import './App.css';
import './ThemeMainStream.css';
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="Main-container">

      <div className="Button-area">
        <h1 className="Header">Okie Dokie Karaoke</h1>

        <img className="Music-note" src="./images/music_note.png"></img>

        <Link to="/song">
            <button className="Sing-btn">Start Singing</button>
        </Link>

        <Link to="/browse">
            <button className="Sing-btn">Browse Playlist</button>
        </Link>
      </div>

    </div>
  );
}

export default HomePage;
