import React, { Component } from 'react';
import { connect } from 'react-redux';


class LibraryList extends Component {
  render() {
    console.log(this.props);
    return;
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries }; //the libraries pertains to this.props so in short that could be name anyhting
};

export default connect(mapStateToProps)(LibraryList);
