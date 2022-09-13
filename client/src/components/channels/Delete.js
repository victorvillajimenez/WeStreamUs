import React, {useEffect} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {
  fetchChannelActionCreator as fetchChannel,
  deleteChannelActionCreator as deleteChannel
} from '../../actions/channelsActionCreator';
import Modal from '../shared/Modal';

const Delete = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const selectData = useSelector(state => ({
    channel: state.channels[id]
  }));

  const onDelete = () => {
    dispatch(deleteChannel(id));
  };

  const handleClose = () => {
    navigate('/');
  };

  useEffect(() => {
    dispatch(fetchChannel(id))
  }, [dispatch]);

  const {channel} = selectData;

  const renderHeader = () => {
    return (
      <h3>Delete a channel</h3>
    );
  };

  const renderContent = () => {
    return (
      <p>
        {`Are you sure you want to remove the channel ${channel?.title}?`}
      </p>
    );
  };

  const renderActions = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'right',
          alignItems: 'center'
        }}
      >
        <button
          onClick={onDelete}
          style={{
            padding: '.5rem',
            border: '1px solid blue',
            borderRadius: '.5rem',
            color: 'blue',
            backgroundColor: 'white',
            fontSize: '16px',
            marginRight: '1rem'

          }}
        >
          Delete
        </button>
        <Link
          to='/'
          style={{
            padding: '.5rem',
            border: '1px solid blue',
            borderRadius: '.5rem',
            color: 'blue',
            textDecoration: 'none'
          }}
        >
          Cancel
        </Link>
      </div>
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '1rem'
      }}
    >
      <h3>Delete channel</h3>
      <Modal
        isOpen
        header={renderHeader()}
        content={renderContent()}
        actions={renderActions()}
        handleClose={handleClose}
        // onDismiss={handleClose}
      />
    </div>
  );
};

export default Delete;
