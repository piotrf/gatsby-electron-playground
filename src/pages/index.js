import React, { Component, Fragment, StrictMode } from "react";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StrictMode>
        <Fragment>Welcome electron</Fragment>
      </StrictMode>
    );
  }
}

HomePage.propTypes = {};
