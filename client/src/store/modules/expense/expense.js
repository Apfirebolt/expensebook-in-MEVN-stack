import * as types from './expense-types';
import events from '../../../plugins/events';
import interceptor from '../../../plugins/interceptor';

const state = {
  count: 0,
  expense: null,
  expenses: [],
};

const getters = {
  [types.GET_EXPENSE_COUNT]: (state) => state.count,
  [types.GET_EXPENSE_DETAIL]: (state) => state.expense,
  [types.GET_ALL_EXPENSES]: (state) => state.expenses,
};

const mutations = {
  [types.SET_EXPENSE_DETAIL]: (state, payload) => {
    state.expense = payload;
  },
  [types.SET_ALL_EXPENSES]: (state, payload) => {
    state.expenses = payload;
  },
  [types.SET_EXPENSE_COUNT]: (state, payload) => {
    state.count = payload;
  },
};

const actions = {
  // Create Expense Action
  [types.CREATE_EXPENSE_ACTION]: ({ commit, dispatch }, payload) => {
    const url = '/expense';
    interceptor.post(url, payload)
      .then((response) => {
        dispatch(types.GET_ALL_EXPENSES)
        events.emit('add_toast', {
          content: 'Expense added successfully',
          type: 'success',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Setting all expenses
  [types.GET_ALL_EXPENSES_ACTION]: ({ commit }, urlParams) => {
    const url = '/expense';
    interceptor.get(url, {
      params: urlParams,
    })
      .then((response) => {
        commit(types.SET_ALL_EXPENSES, response.expenses);
        commit(types.SET_EXPENSE_COUNT, response.count);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Set single expense data
  [types.GET_EXPENSE_DETAIL_ACTION]: ({ commit }, id) => {
    const url = `/expense/${id}`;
    interceptor.get(url)
      .then((response) => {
        commit(types.SET_EXPENSE_DETAIL, response.expenses);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Delete an expense
  [types.DELETE_EXPENSE_ACTION]: ({ commit }, id) => {
    const url = `/expense/${id}`;
    interceptor.delete(url)
      .then((response) => {
        if (response) {
          events.emit('add_toast', {
            content: 'Expense deleted successfully',
            type: 'success',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Update an expense
  [types.UPDATE_EXPENSE_ACTION]: ({ commit }, payload) => {
    const url = `/expense/${payload._id}`;
    interceptor.patch(url, payload)
      .then((response) => {
        if (response) {
          events.emit('add_toast', {
            content: 'Expense updated successfully',
            type: 'success',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Export as csv
  [types.EXPORT_EXPENSE_DATA]: () => {
    const url = '/expense/csv-export';
    interceptor.get(url)
      .then((response) => {
        if (response) {
          events.emit('add_toast', {
            content: 'Expense data imported successfully',
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
