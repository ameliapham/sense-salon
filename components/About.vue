<script setup lang="ts"></script>

<template>
  <div class="flex max-h-[850px] w-full flex-row items-center gap-[10%] pr-20">
    <!-- Left side -->
    <div class="grid max-h-[800px] min-w-[40%] max-w-[700px] grid-cols-[1fr_2fr_1fr] grid-rows-[1fr_5fr_1fr]">
      <div class="col-start-1 col-end-3 row-start-1 row-end-4 h-full rounded-bl-[160px] bg-primary"></div>
      <div class="col-start-2 col-end-4 row-start-2 row-end-3 overflow-hidden rounded-bl-[160px]">
        <img src="/assets/images/about.webp" alt="about us" class="h-full w-full object-cover" />
      </div>
    </div>

    <!-- Right side -->
    <section class="flex max-w-[700px] flex-col gap-4">
      <h1 class="text-primary">About Us</h1>
      <p>Step into a world of relaxation and rejuvenation at Sense, where luxury meets tranquility. Our expert team of beauty professionals is dedicated to providing you with personalized services that enhance your natural beauty. From rejuvenating facials and luxurious hair treatments to flawless manicures and soothing massages, every experience at Sense is designed to leave you feeling refreshed, radiant, and confident.</p>
      <p>Indulge in our serene atmosphere, where every detail is crafted to offer a sensory escape. Whether you’re here for a quick pick-me-up or a full pampering session, we ensure every visit is a moment of pure bliss.</p>
    </section>
  </div>
</template>
