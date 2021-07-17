import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SongService from "./Services/SongService";
import Home from "./Views/Home/Home";
import Logo from "./Views/Logo/Logo";
import SongList from "./Views/SongList/SongList";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"><Logo/></Link>
            </li>
            <li className="dashboard-link">
              <Link to="/songs">Dashboard</Link>
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
