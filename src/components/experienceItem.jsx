import React from "react";

const ExperienceItem = props => {
  return (
    <div className="row py-3">
      <div className="col-lg-10 col-md-9">
        <div className="mr-auto">
          <h2>{props.title}</h2>
          <h5 className="text-muted">{props.company}</h5>
          <ul className="list-group">
            {props.descriptions.map(item => {
              return (
                <li className="list-group-item">
                  <strong>{item.topic}</strong>: {item.description}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-3">
        <div className="text-md-right">
          <span className="text-secondary">{props.location}</span>
          <br />
          <span className="text-secondary">{props.date}</span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
