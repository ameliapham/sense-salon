<script setup lang="ts"></script>

<template>
  <footer class="bg-primary text-textAccent w-full">
    <div class="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8">
      <h1 class="text-accent">Contact</h1>

      <div class="flex flex-row gap-24">
        <div class="flex flex-col gap-4">
          <h3>Openning Hours</h3>

          <div>
            <p>Monday - Friday: 9am - 5pm</p>
            <p>Saturday: 10am - 4pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <h3>Find Us</h3>

          <div>
            <p>1234 Main Street</p>
            <p>City, State, 12345</p>
          </div>
        </div>
      </div>

      <div className="flex items-center my-6">
        <div className="border-t border-background grow" />
      </div>

      <div class="flex flex-row justify-between text-xs">
        <p>© 2025 Amélia Pham. All rights reserved.</p>
        <p>Pictures were taken from https://fr.pinterest.com/ for educational purposes</p>
      </div>
    </div>
  </footer>
</template>
