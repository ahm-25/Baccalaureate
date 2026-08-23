<template>
  <div class="flex flex-col gap-2 w-full">
    <div class="flex justify-between items-center text-sm md:text-base font-bold text-mutedtext">
      <span>السؤال {{ current + 1 }} من {{ total }}</span>
      <span v-if="showScore" class="text-primary">النتيجة: {{ correctCount }}</span>
    </div>
    <div class="flex gap-2 w-full h-2.5">
      <div 
        v-for="i in total" 
        :key="i"
        class="flex-1 rounded-full transition-all duration-500"
        :class="[
          i - 1 < current ? 'bg-primary shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 
          i - 1 === current ? 'bg-primary/40 animate-pulse' : 
          'bg-border'
        ]"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  total: number
  current: number
  correctCount: number
  showScore?: boolean
}>()
</script>
