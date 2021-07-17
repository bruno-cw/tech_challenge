import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SongService from "./Services/SongService";
import Home from "./Views/Home/Home";
import SongList from "./Views/SongList/SongList";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/songs">Songs</Link>
            </li>
          </ul>
        </nav>

        <Switch>

          <Route path="/songs">
            <SongList songService={SongService}/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
