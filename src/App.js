import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Home /> */}
            {/* </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
