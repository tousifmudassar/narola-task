import React, { Component } from "react";
import { connect } from "react-redux";
import Series from "./Series";
import Header from "./../Header";

class SeriesContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props.user);
  }

  render() {
    const { user } = this.props;
    return (
      <>
        <Header />
        <Series user={user} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(SeriesContainer);
