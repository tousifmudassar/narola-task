import React, { Component } from "react";
import { connect } from "react-redux";
import Movies from "./Movies";
import Header from "./../Header";

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props.user);
  }

  render() {
    const { user } = this.props;
    return (
      <>
        <Header />
        <Movies user={user} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(MoviesContainer);
