import React from "react";

const EducationItem = props => {
  return (
    <div className="row py-3">
      <div className="col-lg-10 col-md-9">
        <div className="mr-auto">
          <h2 className="text-light mb-0">{props.schoolName}</h2>
          <h5 className="text-white-50">{props.degree}</h5>
          <ul className="list-group d-inline-flex">
            {props.descriptions.map(item => {
              return (
                <li
                  key={item.topic}
                  className="list-group-item bg-dark py-2 border-light"
                >
                  <strong className="text-light d-inline-block">
                    {item.topic}
                  </strong>
                  <p className="text-light d-inline-block mb-0">
                    : {item.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-3">
        <div className="text-md-right">
          <span className="text-white-50">{props.date}</span>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
