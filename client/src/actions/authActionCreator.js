import {UPDATE_AUTH2} from './types';
import GoogleAuth2 from '../api/GoogleAuth2';

const googleAuth2 = new GoogleAuth2();

export const initAuth2 = () => (dispatch, getState) => {
  googleAuth2.loadAndInit()
    .then(gAuth2 => {
      dispatch(updateAuth2());
      googleAuth2.addListener(() => dispatch(updateAuth2()));
    })
    .catch(console.error);
};

export const updateAuth2 = () => (dispatch, getState) => {
  const isSignedIn = googleAuth2.isSignedIn();
  const creatorId = isSignedIn ? googleAuth2.getUserId() : null;
  dispatch({
    type: UPDATE_AUTH2,
    payload: {
      isSignedIn,
      creatorId
    }
  });
};

export const signIn = () => (dispatch, getState) => googleAuth2.signIn();

export const signOut = () => (dispatch, getState) => googleAuth2.signOut();
// export const signOut = () => (dispatch, getState) => {
//   try {
//     googleAuth2.signOut();
//   } catch (console.error);
// };
