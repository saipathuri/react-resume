import React, { Component } from "react";
import EducationItem from "../educationItem";

class Education extends Component {
  state = {
    items: [
      {
        id: 1,
        schoolName: "University of Texas at Dallas",
        degree: "Bachelor of Science",
        descriptions: [
          {
            topic: "GPA",
            description: 3.86
          },
          {
            topic: "Major",
            description: "Computer Engineering"
          }
        ],
        date: "Aug. 2015 - May 2019"
      },
      {
        id: 2,
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
        <div className="bg-dark py-5">
          <div className="container">
            <div className="row align-items-start fill" id="education">
              <div className="col-lg">
                <h1 className="display-4 text-light">Education</h1>
                {this.state.items.map(item => {
                  return (
                    <EducationItem
                      key={item.id}
                      schoolName={item.schoolName}
                      degree={item.degree}
                      descriptions={item.descriptions}
                      date={item.date}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Education;
