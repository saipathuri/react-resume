import React, { Component } from "react";

class Navbar extends Component {
  getClassNameForItem = item => {
    let className = "nav-item";
    if (item.active) className += " active";
    return className;
  };

  render() {
    const { items } = this.props;
    return (
      <nav
        className="navbar navbar-dark bg-dark navbar-expand-sm fixed-top"
        id="navbar"
      >
        <span className="navbar-brand mb-0 h1">Sai Pathuri</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {items.map(item => {
              return (
                <li key={item.name} className={this.getClassNameForItem(item)}>
                  <a
                    href={"#" + item.name}
                    className="nav-link text-capitalize"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
