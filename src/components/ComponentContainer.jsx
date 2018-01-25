import React, { Component } from "react";

class ComponentContainer extends Component {
  render() {
    return (
      <div className="card mx-auto border rounded m-4 col-10">
        <h5 className="mx-auto m-4 align-items-start font-weight-light text-left">
          {this.props.input}
        </h5>
      </div>
    );
  }
}

export default ComponentContainer;
