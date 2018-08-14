import React, { Component } from "react";
import "./App.css";
import { Route, HashRouter } from "react-router-dom";
import About from "./components/pages/about";
import Experience from "./components/pages/experience";
import Education from "./components/pages/education";
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="fill">
          <Navbar />
          <div className="container fill">
            <Route exact path="/" component={About} />
            <Route path="/experience" component={Experience} />
            <Route path="/education" component={Education} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
