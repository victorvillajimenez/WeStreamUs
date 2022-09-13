import {UPDATE_AUTH2} from '../actions/types';

const INIT_VALUES = {
  isSignedIn: null,
  creatorId: null
};

const authReducer = (state = INIT_VALUES, action) => {
  switch (action.type) {
    case UPDATE_AUTH2:
      return {
        ...state,
        isSignedIn: action.payload.isSignedIn,
        creatorId: action.payload.creatorId
      };
    default:
      return state;
  }
};

export default authReducer;
