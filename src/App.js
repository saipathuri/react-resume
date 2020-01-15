import React, { Component } from "react";
import "./App.css";
import About from "./components/pages/about";
import Experience from "./components/pages/experience";
import Education from "./components/pages/education";
import Waypoint from "react-waypoint/";
import Pagination from "./components/pagination";

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
  scroll = to => this.refs.parallax.scrollTo(to);
  render() {
    return (
      <React.Fragment>
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
        <Education  />
      </React.Fragment>
    )
  }
}

export default App;
