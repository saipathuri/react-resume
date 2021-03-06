import React, { Component } from "react";
import ExperienceItem from "./ExperienceItem";
import EditButton from "../../shared/EditButton";

class Experience extends Component {
  state = {
    items: [
      {
        id: 6,
        title: "Associate Software Engineer",
        company: "Capital One",
        descriptions: [
          {
            id: 1,
            topic: "Android - BYOD",
            description:
              "Worked on several features in the flagship Capital One Android application including: feature lead on the Bring Your Own Device (BYOD) feature by coordinating between various teams (backend, product, BA) and implementing the feature to enable users to use their own devices to open accounts in physical bank locations. Enabled customers to open bank accounts with minimal physical contact with associates.",
          },
        ],
        date: "Aug. 2019 - Current",
        location: "New York, New York",
      },
      {
        id: 5,
        title: "Technology Intern",
        company: "ParkHub",
        descriptions: [
          {
            id: 1,
            topic: "Reporting Database",
            description:
              "Redesigned a reporting database from scratch to improve query speed by 300% using PostgresQL. Implemented several functions in Node.js on AWS Lambda using the Serverless framework to automatically update data. Deployed a new data access mechanism using GraphQL, decreasing query time by 40%.",
          },
        ],
        date: "Aug. 2018 - June 2019",
        location: "Dallas, TX",
      },
      {
        id: 4,
        title: "Technology Analyst Program Intern",
        company: "JPMorgan Chase & Co.",
        descriptions: [
          {
            id: 1,
            topic: "Operations Reporting Dashboard",
            description:
              "Created a web dashboard and data pipeline that automated data transfer from multiple sources while maintaining PCI compliance, standardized and manipulated the data, and displayed permissioned and role-based reports for managers and employees, saving managers about 10% of their working time. Built with Spring-Boot, Thymeleaf, Hibernate and Bootstrap on an Agile team of 5.",
          },
        ],
        date: "Summer 2018",
        location: "Plano, TX",
      },
      {
        id: 3,
        title: "Part-Time IT Intern",
        company: "Verizon",
        descriptions: [
          {
            id: 1,
            topic: "Android",
            description:
              "Integrated multiple third-party services into the MyVerizon app by collaborating with server teams in Verizon and other companies such as IBM to determine the best service to use. Converted a module of the application into Kotlin to steer future development.",
          },
        ],
        date: "Oct. 2017 - Dec. 2017",
        location: "Irving, TX",
      },
      {
        id: 2,
        title: "Information Technology Intern",
        company: "Verizon",
        descriptions: [
          {
            id: 1,
            topic: "Android",
            description:
              "Worked on the Android Development team to add new features and create proof-of-concepts to demo possible additions to the MyVerizon App.",
          },
          {
            id: 2,
            topic: "CICD",
            description:
              "Worked with Jenkins, Docker, and AWS (CloudFormation, EC2) to automate build and deployment of microservices, including static code analysis.",
          },
          {
            id: 3,
            topic: "Hackathon",
            description:
              "Placed in the Top 8 teams nationally in the intern hackathon by developing and presenting an algorithm that intelligently placed antennas in a neighborhood cost-effectively using clustering algorithms such as k-means and DBScan in Python to C-Suite.",
          },
        ],
        date: "Summer 2017",
        location: "Basking Ridge, NJ",
      },
      {
        id: 1,
        title: "Technology Intern",
        company: "Speetra",
        descriptions: [
          {
            id: 1,
            topic: "Reports",
            description:
              "Developed an application in Python using libraries such as Pandas and xlsxwriter to generate a report for clients detailing employee information and feedback.",
          },
          {
            id: 2,
            topic: "Spam Detection",
            description:
              "Worked on a classifier to automatically detect spam text messages using NLTK and Python. I wrote scripts for sanitizing the input in such a way that they could be pipelined and run in any order.",
          },
        ],
        date: "Aug. 2016 - Dec. 2016",
        location: "Richardson, TX",
      },
    ],
  };
  render() {
    return (
      <div className="bg-light py-5">
        <div className="container">
          <div className="row align-items-start fill" id="experience">
            <div className="col-lg">
              <div className="row">
                <div className="col-lg">
                  <h1 className="display-4">Experience</h1>
                </div>
                {this.props.signedIn && <EditButton />}
              </div>
              {this.state.items.map((item) => {
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
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
