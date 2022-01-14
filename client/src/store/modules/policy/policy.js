import * as types from "./policy-types";
import events from "../../../plugins/events";
import interceptor from "../../../plugins/interceptor";

const state = {
  policy: null,
  policies: [],
};

const getters = {
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
};

const actions = {
  // Create Investment Action
  [types.CREATE_POLICY_ACTION]: ({ commit }, payload) => {
    const url = "/policies";
    interceptor
      .post(url, payload)
      .then((response) => {
        if (response) {
          events.emit("add_toast", {
            content: "Investment added successfully",
            type: "success",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Setting all policies
  [types.GET_ALL_POLICIES_ACTION]: ({ commit }) => {
    const url = "/policies";
    interceptor
      .get(url)
      .then((response) => {
        commit(types.SET_ALL_POLICIES, response.policies);
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
          events.emit("add_toast", {
            content: "Investment deleted successfully",
            type: "success",
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
          events.emit("add_toast", {
            content: "Investment updated successfully",
            type: "success",
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
