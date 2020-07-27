import React, { Component } from "react";
import "./App.css";
import About from "./components/pages/About/About";
import Experience from "./components/pages/Experience/Experience";
import Education from "./components/pages/Education/Education";
import Waypoint from "react-waypoint/";
import VisibleLogin from "./components/modals/VisibleLogin";

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
        <button type="button" className="btn btn-primary float-button" data-toggle="modal" data-target="#loginModal">Sign In</button>
        <VisibleLogin></VisibleLogin>
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
