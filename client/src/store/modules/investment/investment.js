import * as types from './investment-types';
import events from '../../../plugins/events';
import interceptor from '../../../plugins/interceptor';

const state = {
  investment: null,
  investments: [],
};

const getters = {
  [types.GET_INVESTMENT_DETAIL]: (state) => state.investment,
  [types.GET_ALL_INVESTMENTS]: (state) => state.investments,
};

const mutations = {
  [types.SET_INVESTMENT_DETAIL]: (state, payload) => {
    state.investment = payload;
  },
  [types.SET_ALL_INVESTMENTS]: (state, payload) => {
    state.investments = payload;
  },
};

const actions = {
  // Create Investment Action
  [types.CREATE_INVESTMENT_ACTION]: ({ commit }, payload) => {
    const url = '/investments';
    interceptor
      .post(url, payload)
      .then((response) => {
        if (response) {
          events.emit('add_toast', {
            content: 'Investment added successfully',
            type: 'success',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Setting all investments
  [types.GET_ALL_INVESTMENTS_ACTION]: ({ commit }) => {
    const url = '/investments';
    interceptor
      .get(url)
      .then((response) => {
        commit(types.SET_ALL_INVESTMENTS, response.investments);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Set single investment data
  [types.GET_INVESTMENT_DETAIL_ACTION]: ({ commit }, id) => {
    const url = `/investments/${id}`;
    interceptor
      .get(url)
      .then((response) => {
        commit(types.SET_INVESTMENT_DETAIL, response.investments);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Delete an investment
  [types.DELETE_INVESTMENT_ACTION]: ({ commit }, id) => {
    const url = `/investments/${id}`;
    interceptor
      .delete(url)
      .then((response) => {
        if (response) {
          events.emit('add_toast', {
            content: 'Investment deleted successfully',
            type: 'success',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Update an investment
  [types.UPDATE_INVESTMENT_ACTION]: ({ commit }, payload) => {
    const url = `/investments/${payload._id}`;
    interceptor
      .patch(url, payload)
      .then((response) => {
        if (response) {
          events.emit('add_toast', {
            content: 'Investment updated successfully',
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
