import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth/auth';
import expense from './modules/expense/expense';
import goal from './modules/goal/goal';
import income from './modules/income/income';
import borrow from './modules/borrow/borrow';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    expense,
    goal,
    income,
    borrow,
  },
});
