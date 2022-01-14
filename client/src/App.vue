<template>
  <div id="app" class="bg-blue-50">
    <loading />
    <default-toast />
    <transition
      enter-active-class="transition ease-in-out duration-700"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in-out duration-700"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Loading from './components/common/loading.vue';
import DefaultToast from './components/toasts/default-toast.vue';
import * as authTypes from './store/modules/auth/auth-types';

export default {
  name: 'App',
  components: {
    DefaultToast,
    Loading,
  },
  computed: {
    ...mapGetters({
      profileData: authTypes.GET_PROFILE_DATA,
    }),
  },
  methods: {
    ...mapActions({
      getProfileData: authTypes.GET_PROFILE_DATA_ACTION,
    }),
  },
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
