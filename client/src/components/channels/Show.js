import React, {useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import flv from 'flv.js';
import {fetchChannelActionCreator as fetchChannel} from '../../actions/channelsActionCreator';
import {RTMP_URL} from '../../utils/constants';

const Show = () => {
  const {id} = useParams();
  const videoRef = useRef();

  const dispatch = useDispatch();
  const selectData = useSelector(state => ({
    channel: state.channels[id]
  }));

  const {channel} = selectData;

  useEffect(() => {
    dispatch(fetchChannel(id));
  }, [dispatch]);

  useEffect(() => {
    if (channel) return;
    // https://bilibili.github.io/flv.js/
    const player = flv.createPlayer({
      type: 'flv',
      url: `${RTMP_URL}/${id}.flv`
    });
    player.attachMediaElement(videoRef.current);
    player.load();
    // player.play();

    return () => player.destroy();
  }, [channel]);

  return (
    <div
      style={{
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <h3>Now you are watching: {channel?.title}</h3>
      <video
        ref={videoRef}
        id='videoPlayer'
        style={{width: '100%'}}
        controls
      />
      <div>
        <p>Description:</p>
        <p>{channel?.description}</p>
      </div>
    </div>
  );
};

export default Show;
