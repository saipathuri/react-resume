import React, { Component } from "react";

class Pagination extends Component {
  state = {};
  getClassNameForItem = item => {
    let className = "page-item py-1";
    if (item.active) className += " active";
    return className;
  };

  render() {
    const { items } = this.props;
    return (
      <ul className="pagination pagination-sm position-fixed m-0 p-0">
        {items.map(item => {
          return (
            <li key={item.name} className={this.getClassNameForItem(item)}>
              <a
                href={"#" + item.name}
                className="page-link bg-dark"
                data-toggle="tooltip"
                data-placement="left"
                title={item.name}
              >
                {/* {item.name} */}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Pagination;
