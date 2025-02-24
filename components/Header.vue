<script setup lang="ts">
import Button from "~/components/Button.vue";
import Logo from "~/assets/svg/logo.svg";
</script>

<template>
  <header class="bg-primary absolute z-30 w-full">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
      <NuxtLink to="/" class="flex items-center">
        <Logo class="h-12 w-auto" />
      </NuxtLink>

      <nav class="flex items-center">
        <ul class="flex flex-row items-center gap-8">
          <li>
            <NuxtLink to="/about" class="text-textAccent text-sm uppercase border-b border-transparent hover:border-textAccent pb-1 transition delay-150 duration-300">About Us</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="text-textAccent text-sm uppercase border-b border-transparent hover:border-textAccent pb-1 transition delay-150 duration-300">Our Service</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="text-textAccent text-sm uppercase border-b border-transparent hover:border-textAccent pb-1 transition delay-150 duration-300">Our Works</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="text-textAccent text-sm uppercase border-b border-transparent hover:border-textAccent pb-1 transition delay-150 duration-300">Contact Us</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
