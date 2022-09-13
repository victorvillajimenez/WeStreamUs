import {
  FETCH_CHANNELS,
  FETCH_CHANNEL,
  NEW_CHANNEL,
  EDIT_CHANNEL,
  DELETE_CHANNEL,
  ERROR_FETCH_CHANNELS,
  ERROR_FETCH_CHANNEL,
  ERROR_NEW_CHANNEL,
  ERROR_EDIT_CHANNEL,
  ERROR_DELETE_CHANNEL,
} from './types';
import {BE_API_URL} from '../utils/constants';
import history from '../utils/history';

export const fetchChannelsActionCreator = () => async (dispatch, getState) => {
  const response = await fetch(`${BE_API_URL}/channels`);
  if (response.ok) {
    const jsonResp = await response.json();
    dispatch({
      type: FETCH_CHANNELS,
      payload: jsonResp
    });
  } else {
    dispatch({
      type: ERROR_FETCH_CHANNELS,
      payload: {status: response.status}
    });
  }
};

export const fetchChannelActionCreator = id => async (dispatch, getState) => {
  const response = await fetch(`${BE_API_URL}/channels/${id}`);
  if (response.ok) {
    const jsonResp = await response.json();
    dispatch({
      type: FETCH_CHANNEL,
      payload: jsonResp
    });
  } else {
    dispatch({
      type: ERROR_FETCH_CHANNEL,
      payload: {status: response.status}
    });
  }
};

export const createChannelActionCreator = body => async (dispatch, getState) => {
  const response = await fetch(`${BE_API_URL}/channels`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  if (response.ok) {
    const jsonResp = await response.json();
    dispatch({
      type: NEW_CHANNEL,
      payload: jsonResp
    });
    history.push('/');
  } else {
    dispatch({
      type: ERROR_NEW_CHANNEL,
      payload: {status: response.status}
    });
  }
};

export const updateChannelActionCreator = (id, body) => async (dispatch, getState) => {
  const response = await fetch(`${BE_API_URL}/channels/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  if (response.ok) {
    const jsonResp = await response.json();
    dispatch({
      type: EDIT_CHANNEL,
      payload: jsonResp
    });
    history.push('/');
  } else {
    dispatch({
      type: ERROR_EDIT_CHANNEL,
      payload: {status: response.status}
    });
  }
};

export const deleteChannelActionCreator = id => async (dispatch, getState) => {
  const response = await fetch(`${BE_API_URL}/channels/${id}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    await response.json();
    dispatch({
      type: DELETE_CHANNEL,
      payload: {id}
    });
    history.push('/');
  } else {
    dispatch({
      type: ERROR_DELETE_CHANNEL,
      payload: {status: response.status}
    });
  }
};
