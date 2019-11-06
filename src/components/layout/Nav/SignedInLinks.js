import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';

const SignedInLinks = props => {
  const { profile } = props;
  return (
    <ul className='nav'>
      <li className='nav-link'>
        <NavLink to='/private'>Private Route</NavLink>
      </li>
      <li className='nav-link'>
        <a href='#!' onClick={props.signOut}>
          Logout
        </a>
      </li>
      <strong>
        Welcome, {profile.firstName} {profile.lastName}
      </strong>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
