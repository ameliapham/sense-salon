<script setup lang="ts">
defineProps<{
  label: string;
  to: string;
}>();
</script>

<template>
  <NuxtLink :to="to" class="w-fit rounded-b-full rounded-r-full border border-secondary px-10 py-1 text-base text-primary transition delay-75 duration-300 hover:bg-accent">
    {{ label }}
  </NuxtLink>
</template>
