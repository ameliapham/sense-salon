<script setup lang="ts">
defineProps<{
  label: string;
  to: string;
}>();
</script>

<template>
  <NuxtLink :to="to" class="rounded-b-full rounded-r-full border border-secondary px-10 py-1 text-primary transition delay-75 duration-300 hover:bg-accent text-base">
    {{ label }}
  </NuxtLink>
</template>
