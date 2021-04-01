import { React } from 'react';
import './App.css';
import './ThemeMainStream.css';
import { Link } from 'react-router-dom'

function HomePage() {
  return (
<<<<<<< HEAD
    <div className="Main-container">
=======
    <div className="MainContainer">
>>>>>>> 4fa97664229c758ea7f9f620333eb6d2a8fe19e8

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
