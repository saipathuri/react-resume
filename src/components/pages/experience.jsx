import React, { Component } from "react";
import ExperienceItem from "../experienceItem";
import { ParallaxLayer } from "react-spring";

class Experience extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "Technology Analyst Program Intern",
        company: "JPMorgan Chase & Co.",
        descriptions: [
          {
            id: 1,
            topic: "Operations Reporting Dashboard",
            description:
              "Created a web dashboard and data pipeline that automated data transfer from multiple sources while maintaining PCI compliance, standardized and manipulated the data, and displayed permissioned and role-based reports for managers and employees, saving managers about 10% of their working time. Built with Spring-Boot, Thymeleaf, Hibernate and Bootstrap on an Agile team of 5."
          }
        ],
        date: "Summer 2018",
        location: "Plano, TX",
        active: true
      },
      {
        id: 2,
        title: "Part-Time IT Intern",
        company: "Verizon",
        descriptions: [
          {
            id: 1,
            topic: "Android",
            description:
              "Integrated multiple third-party services into the MyVerizon app by collaborating with server teams in Verizon and other companies such as IBM to determine the best service to use. Converted a module of the application into Kotlin to steer future development."
          }
        ],
        date: "Oct. 2017 - Dec. 2017",
        location: "Irving, TX",
        active: false
      },
      {
        id: 3,
        title: "Information Technology Intern",
        company: "Verizon",
        descriptions: [
          {
            id: 1,
            topic: "Android",
            description:
              "Worked on the Android Development team to add new features and create proof-of-concepts to demo possible additions to the MyVerizon App."
          },
          {
            id: 2,
            topic: "CICD",
            description:
              "Worked with Jenkins, Docker, and AWS (CloudFormation, EC2) to automate build and deployment of microservices, including static code analysis."
          },
          {
            id: 3,
            topic: "Hackathon",
            description:
              "Placed in the Top 8 teams nationally in the intern hackathon by developing and presenting an algorithm that intelligently placed antennas in a neighborhood cost-effectively using clustering algorithms such as k-means and DBScan in Python to C-Suite."
          }
        ],
        date: "Summer 2017",
        location: "Basking Ridge, NJ",
        active: false
      },
      {
        id: 4,
        title: "Technology Intern",
        company: "Speetra",
        descriptions: [
          {
            id: 1,
            topic: "Reports",
            description:
              "Developed an application in Python using libraries such as Pandas and xlsxwriter to generate a report for clients detailing employee information and feedback."
          },
          {
            id: 2,
            topic: "Spam Detection",
            description:
              "Worked on a classifier to automatically detect spam text messages using NLTK and Python. I wrote scripts for sanitizing the input in such a way that they could be pipelined and run in any order."
          }
        ],
        date: "Aug. 2016 - Dec. 2016",
        location: "Richardson, TX",
        active: false
      }
    ]
  };
  render() {
    return (
      <ParallaxLayer
        offset={this.props.offset}
        speed={0.4}
        onClick={this.props.onClick}
      >
        <div className="bg-light py-3">
          <div className="container">
            <div className="row align-items-start fill my-3" id="experience">
              <div className="col-lg">
                <h1 className="display-4">Experience</h1>
                <div className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      className="active"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    />
                  </ol>
                  <div className="carousel-inner">
                    {this.state.items.map(item => {
                      return (
                        <ExperienceItem
                          key={item.id}
                          title={item.title}
                          company={item.company}
                          descriptions={item.descriptions}
                          date={item.date}
                          location={item.location}
                          active={item.active}
                        />
                      );
                    })}
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                {/* {this.state.items.map(item => {
                  return (
                    <ExperienceItem
                      key={item.id}
                      title={item.title}
                      company={item.company}
                      descriptions={item.descriptions}
                      date={item.date}
                      location={item.location}
                    />
                  );
                })} */}
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    );
  }
}

export default Experience;
