<script setup lang="ts"></script>

<template>
  <div class="flex flex-col px-20 ">
    <h1 class="text-primary">Our Works</h1>
    <div class="grid max-h-[850px] w-full
                grid-cols-[13%_13%_8%_8%_8%_8%_8%_8%_13%_13%] 
                grid-rows-[12%_12%_12%_28%_12%_12%_12%_]">
      <div class="rounded-tr-[160px] overflow-hidden mb-5
                col-start-1 col-end-4 
                row-start-2 row-end-5">
        <img src="/assets/images/heroImage.webp" alt="hero image" class="h-full w-full object-cover" />
      </div>
      <div class="rounded-br-[160px] m-5 bg-primary
                col-start-4 col-end-7 
                row-start-4 row-end-5">
      </div>
        <div class="rounded-tr-[160px] overflow-hidden mr-5
                    col-start-6 col-end-9
                    row-start-1 row-end-4">
            <img src="/assets/images/heroImage.webp" alt="hero image" class="h-full w-full object-cover" />
        </div>
        <div class="rounded-tl-[160px] bg-primary
                col-start-9 col-end-10
                row-start-2 row-end-4">
        </div>
        <div class="rounded-bl-[160px] overflow-hidden mt-5
                    col-start-7 col-end-11
                    row-start-4 row-end-7">
            <img src="/assets/images/heroImage.webp" alt="hero image" class="h-full w-full object-cover" />
        </div>
        <div class="rounded-bl-[160px] bg-accent
                col-start-2 col-end-3
                row-start-5 row-end-7">
        </div>
        <div class="rounded-br-[160px] overflow-hidden ml-5
                    col-start-3 col-end-6
                    row-start-5 row-end-8">
            <img src="/assets/images/heroImage.webp" alt="hero image" class="h-full w-full object-cover" />
        </div>
    </div>
    <div class="flex justify-end">
      <Button label="View More" to="/"></Button>
    </div>
  </div>
</template>
