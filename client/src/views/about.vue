<template>
  <span>
    <div v-if="profileData" class="bg-white shadow-sm rounded-md">
      <p class="text-2xl p-3 text-center text-blue-700">
        Welcome to your About Page, {{ profileData.firstName }}
      </p>
      <hero-section message="Dashboard" />
    </div>
    <p v-else class="text-3xl text-center my-4 text-red-500">
      Loading...
    </p>
  </span>
</template>
<script>
import { mapGetters } from 'vuex';
import * as authTypes from '../store/modules/auth/auth-types';
import HeroSection from '../components/common/hero-section.vue';

export default {
  name: 'About',
  components: {
    HeroSection,
  },
  computed: {
    ...mapGetters({
      profileData: authTypes.GET_PROFILE_DATA,
    }),
  },
};
</script>
