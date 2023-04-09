import * as types from './borrow-types';
import events from '../../../plugins/events';
import interceptor from '../../../plugins/interceptor';

const state = {
  count: 0,
  borrow: null,
  borrowings: [],
};

const getters = {
  [types.GET_BORROW_COUNT]: (state) => state.count,
  [types.GET_BORROWING_DETAIL]: (state) => state.borrow,
  [types.GET_ALL_BORROWINGS]: (state) => state.borrowings,
};

const mutations = {
  [types.SET_BORROWING_DETAIL]: (state, payload) => {
    state.borrow = payload;
  },
  [types.SET_ALL_BORROWINGS]: (state, payload) => {
    state.borrowings = payload;
  },
  [types.SET_BORROW_COUNT]: (state, payload) => {
    state.count = payload;
  },
};

const actions = {
  // Create Borrow Action
  [types.CREATE_BORROW_ACTION]: ({ commit }, payload) => {
    const url = '/borrow';
    interceptor
      .post(url, payload)
      .then((response) => {
        if (response) {
          dispatch(types.GET_ALL_BORROWINGS)
          events.emit('add_toast', {
            content: 'Borrow added successfully',
            type: 'success',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Setting all borrowings
  [types.GET_ALL_BORROWINGS_ACTION]: ({ commit }, urlParams) => {
    const url = '/borrow';
    interceptor.get(url, {
      params: urlParams,
    })
      .then((response) => {
        commit(types.SET_ALL_BORROWINGS, response.borrowing);
        commit(types.SET_BORROW_COUNT, response.count);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Set single borrow data
  [types.GET_BORROWING_DETAIL_ACTION]: ({ commit }, id) => {
    const url = `/borrow/${id}`;
    interceptor
      .get(url)
      .then((response) => {
        commit(types.SET_BORROWING_DETAIL, response.borrow);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Delete borrowing
  [types.DELETE_BORROW_ACTION]: ({ commit }, id) => {
    const url = `/borrow/${id}`;
    interceptor
      .delete(url)
      .then((response) => {
        if (response) {
          events.emit('add_toast', {
            content: 'Borrow deleted successfully',
            type: 'success',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Update borrowing
  [types.UPDATE_BORROW_ACTION]: ({ commit }, payload) => {
    const url = `/borrow/${payload._id}`;
    interceptor
      .patch(url, payload)
      .then((response) => {
        if (response) {
          events.emit('add_toast', {
            content: 'Borrowing updated successfully',
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
