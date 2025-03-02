<script setup lang="ts"></script>

<template>
  <div class="grid max-h-[850px] w-full grid-cols-[30%_15%_10%_15%_30%] grid-rows-[25%_25%_12%_13%_25%]">
    <!-- Left side -->
    <section class="z-10 col-start-1 col-end-5 row-start-2 row-end-5 flex flex-col gap-8 pl-20">
      <heading class="font-semibold text-primary">Sense Salon</heading>
      <p class="w-[50%] text-textPrimary">Our beauty salon offers personalized beauty treatments in a calm, relaxing environment, leaving you refreshed and confident.</p>
      <Button label="Consultation" to="/"></Button>
    </section>

    <!-- Right side -->
    <div class="col-start-2 col-end-3 row-start-4 row-end-6 overflow-hidden rounded-tl-[100px]">
      <img src="/assets/images/heroImage.webp" alt="hero image" class="h-full w-full object-cover" />
    </div>

    <div class="col-start-4 col-end-6 row-start-1 row-end-6 overflow-hidden rounded-tl-[260px]">
      <img src="/assets/images/heroImage.webp" alt="hero image" class="h-full w-full object-cover" />
    </div>
  </div>
</template>
