import React, { Component } from "react";
import EducationItem from "../educationItem";

class Education extends Component {
  state = {
    items: [
      {
        schoolName: "University of Texas at Dallas",
        degree: "Bachelor of Science",
        descriptions: [
          {
            topic: "GPA",
            description: 3.94
          },
          {
            topic: "Major",
            description: "Computer Engineering"
          }
        ],
        date: "Aug. 2015 - May 2019 (Expected)"
      },
      {
        schoolName: "Westwood High School",
        degree: "Diploma (Professional Studies Program)",
        descriptions: [
          {
            topic: "GPA",
            description: 4.95
          }
        ],
        date: "Oct. 2017 - Dec. 2017"
      }
    ]
  };
  render() {
    return (
      <div className="row align-items-start fill my-3">
        <div className="col-lg">
          <h1 className="display-4">Education</h1>
          {this.state.items.map(item => {
            return (
              <EducationItem
                schoolName={item.schoolName}
                degree={item.degree}
                descriptions={item.descriptions}
                date={item.date}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Education;
