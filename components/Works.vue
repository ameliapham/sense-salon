<script setup lang="ts"></script>

<template>
  <div class="flex flex-col px-20">
    <h1 class="text-primary">Our Works</h1>
    <div class="grid max-h-[850px] w-full grid-cols-[13%_13%_8%_8%_8%_8%_8%_8%_13%_13%] grid-rows-[12%_12%_12%_28%_12%_12%_12%_]">
      <div class="col-start-1 col-end-4 row-start-2 row-end-5 mb-5 overflow-hidden rounded-tr-[160px]">
        <img src="/assets/images/work1.webp" alt="work 1" class="h-full w-full object-cover" />
      </div>
      <div class="col-start-4 col-end-7 row-start-4 row-end-5 m-5 rounded-br-[160px] bg-primary"></div>
      <div class="col-start-6 col-end-9 row-start-1 row-end-4 mr-5 overflow-hidden rounded-tr-[160px]">
        <img src="/assets/images/work2.webp" alt="work 2" class="h-full w-full object-cover" />
      </div>
      <div class="col-start-9 col-end-10 row-start-2 row-end-4 rounded-tl-[160px] bg-primary"></div>
      <div class="col-start-7 col-end-11 row-start-4 row-end-7 mt-5 overflow-hidden rounded-bl-[160px]">
        <img src="/assets/images/work3.webp" alt="work 3" class="h-full w-full object-cover" />
      </div>
      <div class="col-start-2 col-end-3 row-start-5 row-end-7 rounded-bl-[160px] bg-accent"></div>
      <div class="col-start-3 col-end-6 row-start-5 row-end-8 ml-5 overflow-hidden rounded-br-[160px]">
        <img src="/assets/images/work4.webp" alt="work 4" class="h-full w-full object-cover" />
      </div>
    </div>
    <div class="flex justify-end">
      <Button label="View More" to="/"></Button>
    </div>
  </div>
</template>
