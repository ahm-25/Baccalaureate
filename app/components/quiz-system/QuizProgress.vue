<template>
  <div class="mb-8">
    <div class="flex justify-between items-center mb-3 text-sm font-bold text-mutedtext">
      <span>السؤال {{ current }} من {{ total }}</span>
      <span>{{ percentage }}%</span>
    </div>
    <div class="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
      <div 
        class="h-full bg-primary transition-all duration-500 ease-out rounded-full"
        :style="{ width: `${percentage}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  current: number
  total: number
}>()

const percentage = computed(() => {
  return Math.round((props.current / props.total) * 100)
})
</script>
