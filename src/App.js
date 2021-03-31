import { React } from 'react';
import './App.css';
import SongPage from './song_page'
import HomePage from './home_page'
import BrowseMusic from './browse_music'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/song" component={SongPage} />
          <Route path="/browse" component={BrowseMusic} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
