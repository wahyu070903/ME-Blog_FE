<script setup>
  import Navbar from "@/components/Navbar.vue"
  import Footer from "@/components/Footer.vue"
</script>

<template>
    <Navbar class="__navbar_main overflow-hidden" />
    <div class="__content_main mt-[72px]">
      <RouterView />
    </div>
    <Footer />
</template>