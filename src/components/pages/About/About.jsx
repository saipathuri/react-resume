import React, { Component } from "react";
import EditButton from "../../shared/EditButton";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="bg-dark">
        <div className="container">
          <div className="row align-items-center fill bg-dark" id="about">
            <div className="col-lg">
              <div className="row">
                <div className="col-lg">
                  <h1 className="display-1 text-light">Sai Pathuri</h1>
                </div>
                {this.props.signedIn && <EditButton />}
              </div>
              <div className="subheading mb-5 text-light">
                1221 S. Congress Ave., Apt 1225 · Austin, Texas · (512) 994-6923
                ·&nbsp;
                <a href="mailto:sai@pathuri.net">sai@pathuri.net</a>
              </div>
              <blockquote className="blockquote">
                <p className="mb-0 text-light">
                Self-Starter Engineer with Strong Teamwork + Communication Skills | Experienced in Frontend, Backend and Mobile Development | JS/Python/Java
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
