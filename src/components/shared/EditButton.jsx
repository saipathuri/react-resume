import React, { Component } from "react";
import { Button } from "react-bootstrap";

class EditButton extends Component {
  render() {
    return (
      <div className="col-lg-1">
        <Button variant="light" className="my-3">
          Edit
        </Button>
      </div>
    );
  }
}

export default EditButton;