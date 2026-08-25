<template>
  <div
    class="fixed top-1/2 -translate-y-1/2 hidden md:flex items-center gap-5 lg:gap-6 pointer-events-none select-none z-20 font-arabic text-primary/85 branding-container"
    dir="ltr"
  >
    <!-- Elegant Gradient Line -->
    <div
      class="w-[2px] h-48 lg:h-64 bg-gradient-to-b from-transparent via-primary/50 to-transparent transition-all duration-300"
    ></div>

    <!-- Rotated Text -->
    <div
      class="text-[15px] md:text-base lg:text-[18px] font-bold tracking-widest whitespace-nowrap transition-all duration-300"
      style="writing-mode: vertical-rl; transform: rotate(180deg);"
    >
      المهندس أحمد عبد الناصر
    </div>
  </div>
</template>

<script setup lang="ts">
// Minimal, self-contained branding component
</script>

<style scoped>
.branding-container {
  /*rtl:ignore*/
  left: 18px;
}
@media (min-width: 768px) {
  .branding-container {
    /*rtl:ignore*/
    left: 22px;
  }
}
@media (min-width: 1024px) {
  .branding-container {
    /*rtl:ignore*/
    left: 28px;
  }
}
</style>
