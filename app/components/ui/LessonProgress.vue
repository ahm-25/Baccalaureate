<template>
  <div class="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-2">
    <div v-for="(section, index) in sections" :key="section.id" 
         class="relative group cursor-pointer"
         @click="scrollToSection(section.id)">
      <div class="w-2.5 h-2.5 rounded-full transition-all duration-300"
           :class="index === currentSectionIndex ? 'bg-primary scale-150' : 'bg-border hover:bg-primary/50'">
      </div>
      <div class="absolute right-6 top-1/2 -translate-y-1/2 bg-surface premium-shadow px-3 py-1.5 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-maintext">
        <span class="font-semibold text-primary ml-1">{{ String(index + 1).padStart(2, '0') }}</span>
        {{ section.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLesson } from '~/composables/useLesson'

const { sections, currentSectionIndex } = useLesson()

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
