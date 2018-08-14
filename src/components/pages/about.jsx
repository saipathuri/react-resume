import React, { Component } from "react";
import { ParallaxLayer } from "react-spring";

class About extends Component {
  state = {};
  render() {
    return (
      <ParallaxLayer
        offset={this.props.offset}
        speed={0.4}
        onClick={this.props.onClick}
      >
        <div class="bg-dark">
          <div className="container">
            <div className="row align-items-center fill bg-dark" id="about">
              <div className="col-lg">
                <h1 className="display-1 text-light">Sai Pathuri</h1>
                <div className="subheading mb-5 text-light">
                  8314 Pommel Dr. · Austin, TX 78759 · (512) 994-6923 ·&nbsp;
                  <a href="mailto:iam@saipathuri.me">iam@saipathuri.me</a>
                </div>
                <blockquote className="blockquote">
                  <p className="mb-0 text-light">
                    Highly motivated student with hands-on experience in several
                    team projects working on Web Development (Frontend and
                    Backend), Android/iOS and API development, capable of
                    rapidly integrating new information into his performance,
                    with strong communication skills.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    );
  }
}

export default About;
