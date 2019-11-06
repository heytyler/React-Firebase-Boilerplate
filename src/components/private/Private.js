import React, { Component } from 'react';
import { connect } from 'react-redux';

class Private extends Component {
  render() {
    return (
      <div>
        <h1>Private Route</h1>
        This page is only accessable if the user is signed in.
      </div>
    );
  }
}

// Dispatch focus to the createFocus action
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  null,
  mapDispatchToProps
)(Private);
