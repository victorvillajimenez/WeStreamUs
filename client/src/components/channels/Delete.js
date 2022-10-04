import React, {useEffect} from 'react';
import {useParams, useNavigate, Link, Navigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {
  fetchChannelActionCreator as fetchChannel,
  deleteChannelActionCreator as deleteChannel
} from '../../actions/channelsActionCreator';
import Modal from '../shared/Modal';
import Loading from '../shared/Loading';

const Delete = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const selectData = useSelector(state => ({
    channel: state.channels[id],
    isSignedIn: state.auth.isSignedIn,
    currentUserId: state.auth.creatorId
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

  const {channel, isSignedIn, currentUserId} = selectData;

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

  if (isSignedIn === false) {
    return <Navigate to='/' replace />;
  }
  if (isSignedIn === null) {
    return <Loading />;
  }
  const cannotDelete = isSignedIn && channel && channel.creatorId !== currentUserId;
  if (cannotDelete) {
    return <Navigate to={`/channels/${channel.id}`} replace />;
  }
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
