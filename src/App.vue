<template>
  <Header />
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Footer from "./layouts/Footer.vue";
import Header from "./layouts/Header.vue";
import Navbar from "./layouts/Navbar.vue";

export default {
  components: { Header, Footer, Navbar },
};
</script>

<style>
</style>