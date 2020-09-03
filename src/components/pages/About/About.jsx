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
                401 E. 34th St., Apt N18F · New York, New York · (512) 994-6923
                ·&nbsp;
                <a href="mailto:sai@pathuri.net">sai@pathuri.net</a>
              </div>
              <blockquote className="blockquote">
                <p className="mb-0 text-light">
                  Highly motivated student with hands-on experience in several
                  team projects working on Web Development (Frontend and
                  Backend), Android/iOS and API development, capable of rapidly
                  integrating new information into his performance, with strong
                  communication skills.
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
