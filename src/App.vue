<script setup>
  import Navbar from "./components/Navbar.vue"
  import Footer from "./components/Footer.vue"
</script>

<template>
  <Navbar />
  <div class="mt-[118px]">
    <RouterView />
  </div>
  <Footer />
  
</template>
