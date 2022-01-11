<template>
  <div class="relative bg-white">
    <div class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
      <div class="flex justify-between items-center">
        <a href="#" class="flex md:ml-64">
          <img class="h-8 w-auto sm:h-10" src="https://raw.githubusercontent.com/aleksandryackovlev/openapi-mock-express-middleware/master/assets/express-logo.png" alt="">
        </a>
        <router-link :to="{name: 'Dashboard'}" class="font-semibold text-gray-500 mx-2 text-lg cursor-pointer">
          Expense Book
        </router-link>
      </div>
      <div class="md:flex-1">
        <div class="flex items-center justify-end md:ml-12">
          <a v-if="checkUserLoggedIn" class="text-base font-medium bg-green-400 hover:bg-green-700 shadow-md rounded py-2 px-4 text-white mx-4 cursor-pointer" @click.prevent="logOutFunction">
            Log Out
          </a>
          <div v-else>
            <router-link :to="{name: 'Login'}" class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Sign in
            </router-link>
            <router-link :to="{name: 'Register'}" class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Sign up
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import * as authTypes from '../../store/modules/auth/auth-types';

export default {
  name: 'HeaderComponent',
  computed: {
    checkUserLoggedIn() {
      const storedToken = localStorage.getItem('Token');
      if (storedToken) {
        return true;
      }
      return false;
    },
  },
  methods: {
    ...mapActions({
      getLogoutAction: authTypes.LOG_OUT,
    }),
    async logOutFunction() {
      this.getLogoutAction();
    },
  },
};
</script>
