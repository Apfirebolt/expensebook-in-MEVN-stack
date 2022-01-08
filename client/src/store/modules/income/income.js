import * as types from './income-types';
import events from '../../../plugins/events';
import interceptor from '../../../plugins/interceptor';

const state = {
  income: null,
  incomes: [],
};

const getters = {
  [types.GET_INCOME_DETAIL]: (state) => state.income,
  [types.GET_ALL_INCOME]: (state) => state.incomes,
};

const mutations = {
  [types.SET_INCOME_DETAIL]: (state, payload) => {
    state.income = payload;
  },
  [types.SET_ALL_INCOME]: (state, payload) => {
    state.incomes = payload;
  },
};

const actions = {
  // Create income Action
  [types.CREATE_INCOME_ACTION]: ({ commit }, payload) => {
    const url = '/income';
    interceptor
      .post(url, payload)
      .then((response) => {
        if (response) {
          events.emit('add_toast', {
            content: 'Income added successfully',
            type: 'success',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Setting all income
  [types.GET_ALL_INCOME_ACTION]: ({ commit }) => {
    const url = '/income';
    interceptor
      .get(url)
      .then((response) => {
        console.log('Response is ', response);
        commit(types.SET_ALL_INCOME, response.incomes);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Set single income data
  [types.GET_INCOME_DETAIL_ACTION]: ({ commit }, id) => {
    const url = `/income/${id}`;
    interceptor
      .get(url)
      .then((response) => {
        commit(types.SET_INCOME_DETAIL, response.income);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Delete an income
  [types.DELETE_INCOME_ACTION]: ({ commit }, id) => {
    const url = `/income/${id}`;
    interceptor
      .delete(url)
      .then((response) => {
        if (response) {
          events.emit('add_toast', {
            content: 'Income deleted successfully',
            type: 'success',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Update an income
  [types.UPDATE_INCOME_ACTION]: ({ commit }, payload) => {
    const url = `/income/${payload._id}`;
    interceptor
      .patch(url, payload)
      .then((response) => {
        if (response) {
          events.emit('add_toast', {
            content: 'Income updated successfully',
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
