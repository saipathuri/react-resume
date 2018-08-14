import React, { Component } from "react";
import "./App.css";
import About from "./components/pages/about";
import Experience from "./components/pages/experience";
import Education from "./components/pages/education";
import Navbar from "./components/navbar";
import Waypoint from "react-waypoint/";

class App extends Component {
  state = {
    items: [
      { name: "about", active: false },
      { name: "experience", active: false },
      { name: "education", active: false }
    ]
  };

  handleEnter = name => {
    const items = this.state.items;
    items.map(item => {
      item.active = item.name === name ? true : false;
      return item;
    });
    this.setState({ items });
  };

  render() {
    return (
      <div className="fill">
        <Navbar items={this.state.items} />
        <div className="container fill">
          <Waypoint
            onEnter={() => {
              this.handleEnter("about");
            }}
          />
          <About />
          <Waypoint
            onEnter={() => {
              this.handleEnter("experience");
            }}
          />
          <Experience />
          <Waypoint
            onEnter={() => {
              this.handleEnter("education");
            }}
          />
          <Education />
        </div>
      </div>
    );
  }
}

export default App;
