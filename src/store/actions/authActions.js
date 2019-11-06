// SIGNS INTO EXISTING ACCOUNT
export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
        firebase.analytics().logEvent('login');
      })
      .catch(err => {
        dispatch({ type: 'LOGIN_ERROR', err });
        firebase.analytics().logEvent('login_error');
      });
  };
};

// SIGNS OUT CURRENT USER
export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' });
        firebase.analytics().logEvent('logged_out');
      });
  };
};

// SIGNS UP A NEW USER
export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    const { email, password, firstName, lastName } = newUser;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        return firestore
          .collection('users')
          .doc(response.user.uid)
          .set({
            firstName: firstName,
            lastName: lastName,
            // Add more details to the user profile here.
          });
      })
      .then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
        firebase.analytics().logEvent('signup');
      })
      .catch(err => {
        dispatch({ type: 'SIGNUP_ERROR', err });
        firebase.analytics().logEvent('signup_error');
      });
  };
};
