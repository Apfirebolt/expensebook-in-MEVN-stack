<template>
  <div>
    <header-component />
    <!-- This example requires Tailwind CSS v2.0+ -->
    <hero-section message="Welcome to the home page" />
    <footer-component />
  </div>
</template>
<script>
import HeaderComponent from "../components/common/header.vue";
import HeroSection from "../components/common/hero-section.vue";
import FooterComponent from "../components/common/footer.vue";

export default {
  name: "Home",
  components: {
    HeaderComponent,
    HeroSection,
    FooterComponent
  },
  data() {
    return {
      user: {}
    };
  }
};
</script>
