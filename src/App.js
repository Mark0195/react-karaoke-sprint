import { React } from 'react';
import SongPage from './song_page';
import HomePage from './home_page';
import BrowseMusic from './browse_music';
import SingleSongPage from './SingleSongPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/song" exact component={SongPage} />
          <Route path="/browse" component={BrowseMusic} />
          <Route path="/song/:id" exact component={SingleSongPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
