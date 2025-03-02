<script setup lang="ts"></script>

<template>
  <div class="flex max-h-[850px] w-full flex-row items-center gap-[10%] pl-20 justify-end">
    <!-- Left side -->
    <section class="flex max-w-[700px] flex-col gap-4">
      <h1 class="text-primary">Newsletter</h1>
      <p>Subscribe to our newsletter to keep up to date with the news and exclusive offers from Sense Salon.</p>
      <Button label="Subscribe" to="/"></Button>
    </section>

    <!-- Right side -->
    <div class="grid max-h-[800px] min-w-[40%] max-w-[700px] grid-cols-[1fr_2fr_1fr] grid-rows-[1fr_5fr_1fr]">
      <div class="col-start-2 col-end-4 row-start-1 row-end-4 h-full rounded-br-[160px] bg-primary"></div>
      <div class="col-start-1 col-end-3 row-start-2 row-end-3 overflow-hidden rounded-br-[160px]">
        <img src="/assets/images/newsletter.webp" alt="newsletter" class="h-full w-full object-cover" />
      </div>
    </div>
  </div>
</template>
