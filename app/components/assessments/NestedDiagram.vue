<template>
  <div
    class="rounded-2xl border-2 p-3 md:p-4"
    :class="levelClasses[depth % levelClasses.length]"
  >
    <p class="font-bold text-sm md:text-base mb-2">{{ labels[0] }}</p>
    <!-- Self-reference by file name renders the next inner level -->
    <NestedDiagram v-if="labels.length > 1" :labels="labels.slice(1)" :depth="depth + 1" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  labels: string[]
  depth?: number
}>(), { depth: 0 });

const levelClasses = [
  'bg-slate-100 border-slate-300 text-slate-800',
  'bg-indigo-50 border-indigo-300 text-indigo-900',
  'bg-teal-50 border-teal-300 text-teal-900',
  'bg-amber-50 border-amber-400 text-amber-900'
];
</script>
