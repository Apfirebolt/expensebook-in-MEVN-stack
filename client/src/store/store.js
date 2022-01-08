import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth/auth';
import expense from './modules/expense/expense';
import goal from './modules/goal/goal';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    expense,
    goal
  },
});
