import {CLIENT_ID, PLUGIN_NAME} from '../utils/constants';

export default class GoogleAuth2 {
  // scope = 'email profile openid'
  constructor (clientId = CLIENT_ID, scope = 'email', pluginName = PLUGIN_NAME) {
    this.clientId = clientId;
    this.scope = scope;
    this.plugin_name = pluginName;
    this.auth2 = null;
  }

  loadAndInit () {
    return new Promise((resolve, reject) => {
      const initAuth2 = () => {
        window.gapi.auth2
          .init({
            clientId: this.clientId,
            scope: this.scope,
            plugin_name: this.plugin_name
          })
          .then(auth2 => {
            this.auth2 = window.gapi.auth2.getAuthInstance();
            resolve(this, auth2);
          })
          .catch(reject);
      };
      window.gapi.load('client:auth2', initAuth2);
    });
  }

  // signIn = () => this.auth2.signIn();
  signIn () {
    this.auth2.signIn();
  }

  // signOut = () => this.auth2.signOut();
  signOut () {
    this.auth2.signOut();
  }

  addListener (callback) {
    this.auth2.isSignedIn.listen(callback);
  }

  isSignedIn () {
    return this.auth2.isSignedIn.get();
  }

  getUserId () {
    return this.auth2.currentUser.get().getId();
  }
}
