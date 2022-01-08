<template>
  <div class="bg-white shadow-sm rounded-md">
    <p class="text-2xl p-3 text-center text-blue-700">
      Income Home
    </p>
    <hero-section message="Dashboard" />
  </div>
</template>
<script>
import HeroSection from '../../components/common/hero-section.vue';

export default {
  name: 'IncomeHome',
  components: {
    HeroSection,
  },
};
</script>
