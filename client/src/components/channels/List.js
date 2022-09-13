import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchChannelsActionCreator} from '../../actions/channelsActionCreator';

const List = ({channels, fetchChannels}) => {
  useEffect(() => {
    fetchChannels();
  }, []);

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
        <h3>Channels</h3>
        <Link
          to='/channels/new'
          style={{
            padding: '.5rem',
            border: '1px solid blue',
            borderRadius: '4px',
            textDecoration: 'none',
            color: 'blue'
          }}
        >
          Create a Channel
        </Link>
      </div>
      <ul
        style={{
          margin: '1rem',
          listStyleType: 'none',
          paddingInlineStart: 0
        }}
      >
        {channels.map(channel => (
          <li
            key={channel.id}
            style={{
              borderRadius: '8px',
              border: '1px solid black',
              padding: '.5rem 1rem',
              margin: '1rem 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h5>
                <Link
                  style={{
                    color: 'blue',
                    textDecoration: 'none'
                  }}
                  to={`/channels/${channel.id}`}
                >
                  {channel.title}
                </Link>
              </h5>
              <p>{channel.description}</p>
            </div>
            <div>
              <Link
                style={{
                  margin: '.5rem',
                  padding: '.5rem',
                  border: '1px solid blue',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  color: 'blue'
                }}
                to={`/channels/${channel.id}/edit`}
              >
                Edit
              </Link>
              <Link
                style={{
                  margin: '.5rem',
                  padding: '.5rem',
                  border: '1px solid blue',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  color: 'blue'
                }}
                to={`/channels/${channel.id}/delete`}
              >
                Delete
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    channels: Object.values(state.channels)
  };
};

export default connect(mapStateToProps, {
  fetchChannels: fetchChannelsActionCreator
})(List);
