import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {initAuth2, signIn, signOut} from '../../actions/authActionCreator';

const GoogleAuthButton = ({isSignedIn, initAuth2, signIn, signOut}) => {
  useEffect(() => {
    initAuth2();
  }, []);

  const onSignIn = () => signIn();

  const onSignOut = () => signOut();

  const renderAuthButton = () => {
    if (isSignedIn === null) return null;
    if (isSignedIn) {
      return (
        <button
          onClick={onSignOut}
          style={{
            backgroundColor: '#E23F29',
            border: 0,
            borderRadius: '1rem',
            padding: '0.5rem',
            color: 'white'
          }}
        >
          Sign Out
        </button>
      );
    }
    return (
      <button
        onClick={onSignIn}
        style={{
          backgroundColor: '#E23F29',
          border: 0,
          borderRadius: '1rem',
          padding: '0.5rem',
          color: 'white'
        }}
      >
        Sign In With Google
      </button>
    );
  };

  return (
    <>
      {renderAuthButton()}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, {
  initAuth2,
  signIn,
  signOut
})(GoogleAuthButton);
