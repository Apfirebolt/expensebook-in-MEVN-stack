import * as types from './policy-types';
import events from '../../../plugins/events';
import interceptor from '../../../plugins/interceptor';

const state = {
  count: 0,
  policy: null,
  policies: [],
};

const getters = {
  [types.GET_POLICY_COUNT]: (state) => state.count,
  [types.GET_POLICY_DETAIL]: (state) => state.policy,
  [types.GET_ALL_POLICIES]: (state) => state.policies,
};

const mutations = {
  [types.SET_POLICY_DETAIL]: (state, payload) => {
    state.policy = payload;
  },
  [types.SET_ALL_POLICIES]: (state, payload) => {
    state.policies = payload;
  },
  [types.SET_POLICY_COUNT]: (state, payload) => {
    state.count = payload;
  },
};

const actions = {
  // Create Policy Action
  [types.CREATE_POLICY_ACTION]: ({ commit, dispatch }, payload) => {
    const url = '/policies';
    interceptor
      .post(url, payload)
      .then((response) => {
        if (response) {
          dispatch(types.GET_ALL_POLICIES)
          events.emit('add_toast', {
            content: 'Policy added successfully',
            type: 'success',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Setting all policies
  [types.GET_ALL_POLICIES_ACTION]: ({ commit }, urlParams) => {
    const url = '/policies';
    interceptor.get(url, {
      params: urlParams,
    })
      .then((response) => {
        commit(types.SET_ALL_POLICIES, response.policies);
        commit(types.SET_POLICY_COUNT, response.count);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Set single policy data
  [types.GET_POLICY_DETAIL_ACTION]: ({ commit }, id) => {
    const url = `/policies/${id}`;
    interceptor
      .get(url)
      .then((response) => {
        commit(types.SET_POLICY_DETAIL, response.policies);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Delete an policy
  [types.DELETE_POLICY_ACTION]: ({ commit }, id) => {
    const url = `/policies/${id}`;
    interceptor
      .delete(url)
      .then((response) => {
        if (response) {
          events.emit('add_toast', {
            content: 'Policy deleted successfully',
            type: 'success',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Update an policy
  [types.UPDATE_POLICY_ACTION]: ({ commit }, payload) => {
    const url = `/policies/${payload._id}`;
    interceptor
      .patch(url, payload)
      .then((response) => {
        if (response) {
          events.emit('add_toast', {
            content: 'Policy updated successfully',
            type: 'success',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
