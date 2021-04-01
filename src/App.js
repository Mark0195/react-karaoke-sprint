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
          <Route path="/song" exact component={SongPage} />
          {/* Using ':id' in the next route should let us select a specific song but it's late and i need sleep */ }
          { /* <Route path="/song/:id" component={} /> */ }
          <Route path="/browse" component={BrowseMusic} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
