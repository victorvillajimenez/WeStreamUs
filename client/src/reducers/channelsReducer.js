import {
  FETCH_CHANNELS,
  FETCH_CHANNEL,
  NEW_CHANNEL,
  EDIT_CHANNEL,
  DELETE_CHANNEL
} from '../actions/types';

const channelsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CHANNELS:
      const hashmap = action.payload.reduce((acc, ch) => {
        acc[ch.id] = ch;
        return acc;
      }, {});
      return {...state, ...hashmap};
    case FETCH_CHANNEL:
      return {...state, [action.payload.id]: action.payload};
    case NEW_CHANNEL:
      return {...state, [action.payload.id]: action.payload};
    case EDIT_CHANNEL:
      return {...state, [action.payload.id]: action.payload};
    case DELETE_CHANNEL:
      const {[action.payload.id]: value, ...restState} = state;
      return restState;
    default:
      return state;
  }
};

export default channelsReducer;
