<template>
  <!-- Frame heading used by the chapter scenes -->
  <div class="absolute top-8 inset-x-0 flex flex-col items-center pointer-events-none" dir="rtl">
    <Transition name="sl-frame" mode="out-in">
      <div :key="title + (sub || '')" class="flex flex-col items-center">
        <div class="flex items-center gap-3 text-5xl font-black text-white">
          <span v-if="icon" class="text-5xl leading-none">{{ icon }}</span>
          {{ title }}
        </div>
        <p v-if="sub" class="mt-2 text-xl font-bold text-slate-400">{{ sub }}</p>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; sub?: string; icon?: string }>()
</script>
