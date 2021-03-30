import { React } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="App">
        <h1 className="Header">Okie Dokie Karaoke</h1>
        <Link to="/song">
            <button className="Sing-btn">Click</button>
        </Link>
    </div>
  );
}

export default HomePage;
