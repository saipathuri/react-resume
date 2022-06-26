import React, { Component } from "react";
import "./App.css";
import VisibleLogin from "./components/modals/VisibleLogin";
import VisibleAbout from "./components/pages/About/VisibleAbout";
import { Button } from 'react-bootstrap';
import VisibleEducation from "./components/pages/Education/VisibleEducation";
import VisibleExperience from "./components/pages/Experience/VisibleExperience";

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
        {/* <Button variant="primary" data-toggle="modal" data-target="#loginModal" className="float-button">Sign In</Button> */}
        {/* <VisibleLogin /> */}
        <VisibleAbout />
        <VisibleExperience />
        <VisibleEducation />
      </React.Fragment>
    )
  }
}

export default App;
