import React, { Component } from "react";
import "./App.css";
import About from "./components/pages/about";
import Experience from "./components/pages/experience";
import Education from "./components/pages/education";
import Waypoint from "react-waypoint/";
import Pagination from "./components/pagination";
import { Parallax } from "react-spring";

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
      <Parallax
        className="fill bg-dark"
        ref="parallax"
        pages={3}
        horizontal={false}
        scrolling={true}
      >
        {/* <Pagination items={this.state.items} /> */}
        <Waypoint
          onEnter={() => {
            this.handleEnter("about");
          }}
        />
        <About offset={0} onClick={() => this.scroll(1)} />
        <Waypoint
          onEnter={() => {
            this.handleEnter("experience");
          }}
        />
        <Experience offset={1} onClick={() => this.scroll(2)} />
        <Waypoint
          onEnter={() => {
            this.handleEnter("education");
          }}
        />
        <Education offset={2} onClick={() => this.scroll(0)} />
      </Parallax>
    );
  }
}

export default App;
