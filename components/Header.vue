<script setup lang="ts">
import Logo from "~/assets/svg/logo.svg";
</script>

<template>
  <header class="z-30 w-full bg-primary">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
      <NuxtLink to="/" class="flex items-center">
        <Logo class="h-full w-full" />
      </NuxtLink>

      <nav class="flex items-center">
        <ul class="flex flex-row items-center gap-8">
          <li>
            <NuxtLink to="/about" class="border-b border-transparent pb-1 text-sm uppercase text-textAccent transition delay-150 duration-300 hover:border-textAccent">About Us</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="border-b border-transparent pb-1 text-sm uppercase text-textAccent transition delay-150 duration-300 hover:border-textAccent">Our Service</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="border-b border-transparent pb-1 text-sm uppercase text-textAccent transition delay-150 duration-300 hover:border-textAccent">Our Works</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="border-b border-transparent pb-1 text-sm uppercase text-textAccent transition delay-150 duration-300 hover:border-textAccent">Contact Us</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
