import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth/auth';
import expense from './modules/expense/expense';
import goal from './modules/goal/goal';
import income from './modules/income/income';
import borrow from './modules/borrow/borrow';
import investment from './modules/investment/investment';
import policy from './modules/policy/policy';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    expense,
    goal,
    income,
    borrow,
    investment,
    policy,
  },
});
