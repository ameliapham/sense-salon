<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Button from "~/components/Button.vue";
</script>

<template>
  <div class="flex min-h-screen flex-col bg-background">
    <Header />
    <main class="flex flex-col">
      <HeroSection />
    </main>
    <Footer />
  </div>
</template>
