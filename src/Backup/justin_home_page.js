import { React } from 'react';
// import './ThemeMainStream.css';
import './ThemeHipsterMustard.css';
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="MainContainer">

      <div className="TopNav">
        <button className="HamburgerBtn"></button>
      </div>

      <div className="LogoContainer">
          <p className="SubLogoName">okie-dokie</p>
          <h1 className="LogoName">Karaoke</h1>
      </div>

      <div className="Image-area"></div>

      <div className="Button-area">
        <Link to="/song">
            <button className="Sing-btn">Start Singing</button>
        </Link>

        <Link to="/browse">
            <button className="Sing-btn">Browse Songs</button>
        </Link>
      </div>

    </div>
  );
}

export default HomePage;
