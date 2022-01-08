import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth/auth';
import expense from './modules/expense/expense';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    expense,
  },
});
