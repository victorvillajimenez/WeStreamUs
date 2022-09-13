import React from 'react';
import {connect} from 'react-redux';
import {createChannelActionCreator} from '../../actions/channelsActionCreator';
import Form from './Form';

const Create = ({createChannel}) => {
  const onSubmit = (formValues) => {
    createChannel(formValues);
  };

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

export default connect(null, {
  createChannel: createChannelActionCreator
})(Create);
