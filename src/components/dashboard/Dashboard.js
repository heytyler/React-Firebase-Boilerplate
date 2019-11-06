import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
  render() {
    const { sample } = this.props;
    return (
      <div>
        <h1>Dashboard</h1>
        This is a sample home page. Feel free to add content.
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sample: state.firestore.ordered.sample
  };
};

// We use compose to add multiple higher order functions
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'sample' }])
)(Dashboard);
