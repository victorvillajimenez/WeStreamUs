import {combineReducers} from 'redux';
import channelsReducer from './channelsReducer';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  channels: channelsReducer
});
