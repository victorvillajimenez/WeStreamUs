import React, {useEffect} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import withRouter from '../../hooks/withRouter';
import {
  fetchChannelActionCreator as fetchChannel,
  updateChannelActionCreator as updateChannel
} from '../../actions/channelsActionCreator';
import Form from './Form';

const Edit = ({
  channel,
  fetchChannel,
  updateChannel,
  params,
  navigate,
  location
}) => {

  useEffect(() => {
    fetchChannel(params.id);
  }, []);

  const onSubmit = (formValues) => {
    updateChannel(params.id, formValues);
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
        <h3>Edit a Channel</h3>
      </div>
      <Form
        onSubmit={onSubmit}
        initialValues={
          channel ? (({title, description}) => ({title, description}))(channel) : {}
        }
      />
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    channel: state.channels[ownProps.params.id]
  };
};

export default compose(withRouter, connect(
  mapStateToProps,
  {
    fetchChannel,
    updateChannel
  }
))(Edit);
