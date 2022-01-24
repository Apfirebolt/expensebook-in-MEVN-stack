import * as types from './goal-types';
import events from '../../../plugins/events';
import interceptor from '../../../plugins/interceptor';

const state = {
  count: 0,
  goal: null,
  goals: [],
};

const getters = {
  [types.GET_GOAL_COUNT]: (state) => state.count,
  [types.GET_GOAL_DETAIL]: (state) => state.goal,
  [types.GET_ALL_GOALS]: (state) => state.goals,
};

const mutations = {
  [types.SET_GOAL_DETAIL]: (state, payload) => {
    state.goal = payload;
  },
  [types.SET_ALL_GOALS]: (state, payload) => {
    state.goals = payload;
  },
  [types.SET_GOAL_COUNT]: (state, payload) => {
    state.count = payload;
  },
};

const actions = {
  // Create Goal Action
  [types.CREATE_GOAL_ACTION]: ({ commit }, payload) => {
    const url = '/goals';
    interceptor
      .post(url, payload)
      .then((response) => {
        if (response) {
          events.emit('add_toast', {
            content: 'Goal added successfully',
            type: 'success',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Setting all GOALS
  [types.GET_ALL_GOALS_ACTION]: ({ commit }, urlParams) => {
    const url = '/goals';
    interceptor.get(url, {
      params: urlParams,
    })
      .then((response) => {
        commit(types.SET_ALL_GOALS, response.goals);
        commit(types.SET_GOAL_COUNT, response.count);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Set single goal data
  [types.GET_GOAL_DETAIL_ACTION]: ({ commit }, id) => {
    const url = `/goals/${id}`;
    interceptor
      .get(url)
      .then((response) => {
        commit(types.SET_GOAL_DETAIL, response.goal);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Delete a goal
  [types.DELETE_GOAL_ACTION]: ({ commit }, id) => {
    const url = `/goals/${id}`;
    interceptor
      .delete(url)
      .then((response) => {
        if (response) {
          events.emit('add_toast', {
            content: 'Goal deleted successfully',
            type: 'success',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Update a goal
  [types.UPDATE_GOAL_ACTION]: ({ commit }, payload) => {
    const url = `/goals/${payload._id}`;
    interceptor
      .patch(url, payload)
      .then((response) => {
        if (response) {
          events.emit('add_toast', {
            content: 'Goal updated successfully',
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
