import React from 'react';
import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {createChannelActionCreator} from '../../actions/channelsActionCreator';
import Form from './Form';
import Loading from '../shared/Loading';

const Create = ({isSignedIn, createChannel}) => {

  const onSubmit = (formValues) => {
    createChannel(formValues);
  };

  if (isSignedIn === false) {
    return <Navigate to='/' replace />;
  }
  if (isSignedIn === null) {
    return <Loading />;
  }
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '1rem'
        }}
      >
        <h3>Create Channel</h3>
      </div>
      <Form onSubmit={onSubmit} />
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, {
  createChannel: createChannelActionCreator
})(Create);
