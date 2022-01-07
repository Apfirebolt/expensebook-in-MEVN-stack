import * as types from './auth-types';
import axios from 'axios';
import events from '../../../plugins/events';
import router from '../../../routes';
import interceptor from '../../../plugins/interceptor';

const state = {
  token: null,
  isAuthenticated: false,
  profileData: null
};

const getters = {
  [types.GET_TOKEN]: state => {
    return state.token;
  },
  [types.IS_USER_AUTHENTICATED]: state => {
    return state.isAuthenticated;
  },
  [types.GET_PROFILE_DATA]: state => {
    return state.profileData;
  },
};

const mutations = {
  [types.SET_TOKEN]: (state, payload) => {
    state.token = payload;
    state.isAuthenticated = true;
  },
  [types.LOG_OUT_SUCCESS]: (state) => {
    state.token = null;
    state.isAuthenticated = false;
    state.profileData = null;
  },
  [types.SET_PROFILE_DATA]: (state, payload) => {
    state.profileData = payload;
  },
};

const actions = {
  [types.REGISTER_USER]: ({commit}, payload) => {
    let url = process.env.VUE_APP_ROOT_API + 'accounts/api/register';
    axios.post(url, payload)
      .then((response) => {
      })
      .catch((err) => {
      });
  },

  // Action for logging in user
  [types.SET_TOKEN_ACTION]: ({commit}, payload) => {
    let url = 'api/users/login';
    axios.post(url, payload)
      .then((response) => {
        events.emit('add_toast', {
          content: 'Successfully logged in',
          type: 'success',
        });
        commit(types.SET_TOKEN, response.data.token);
        localStorage.setItem('Token', response.data.token);
        localStorage.setItem('userId', response.data._id);
        router.push({ name: 'Dashboard' });
      })
      .catch((err) => {
        
      });
  },

  // Log out functionality
  [types.LOG_OUT]: ({commit}) => {
    commit(types.LOG_OUT_SUCCESS);
    try {
      events.emit('add_toast', {
        content: 'Logged out successfully',
        type: 'success',
      });
      localStorage.removeItem('Token');
      localStorage.removeItem('userId');
    } catch(err) {
      console.error(err);
    }
    router.push({ name: 'Login' });
  },

  // Action to check if the user is authenticated once user refreshes the page.
  [types.CHECK_USER_AUTHENTICATION]: ({commit}) => {
    try {
      let storedToken = localStorage.getItem('Token');
      if(storedToken) {
        commit(types.SET_TOKEN, storedToken);
      }
    }
    catch(err) {
      console.error(err);
    }
  },

  // Get the profile data of the user
  [types.GET_PROFILE_DATA_ACTION]: ({commit}) => {
    let url = 'users/profile';
    interceptor.get(url)
      .then((response) => {
        commit(types.SET_PROFILE_DATA, response);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};

export default {
  state,
  mutations,
  actions,
  getters
}