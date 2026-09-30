<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between gap-4">
      <h4 class="text-xl font-black text-slate-800">✍️ الأسئلة المقالية</h4>
      <button
        type="button"
        class="text-sm font-bold text-indigo-700 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-full transition-colors"
        @click="toggleAll"
      >
        {{ allOpen ? 'إخفاء كل الإجابات' : 'إظهار كل الإجابات' }}
      </button>
    </div>

    <div
      v-for="(essay, index) in essays"
      :key="essay.id"
      class="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 md:p-6"
    >
      <p class="text-lg font-bold text-slate-800 leading-relaxed">
        <span class="text-indigo-600">{{ index + 1 }}-</span> {{ essay.text }}
      </p>

      <button
        type="button"
        class="mt-4 inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full transition-colors"
        :class="open[essay.id] ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' : 'bg-emerald-600 text-white hover:bg-emerald-700'"
        @click="open[essay.id] = !open[essay.id]"
      >
        {{ open[essay.id] ? 'إخفاء الإجابة' : 'إظهار الإجابة النموذجية' }}
      </button>

      <div
        v-if="open[essay.id]"
        class="mt-4 bg-emerald-50 border-r-4 border-emerald-500 rounded-xl p-4"
      >
        <p class="text-sm font-black text-emerald-700 mb-2">✓ الحل</p>
        <ul class="space-y-2 text-slate-700 leading-relaxed list-disc pr-5">
          <li v-for="(point, i) in essay.answer" :key="i">{{ point }}</li>
        </ul>
        <AssessmentsNestedDiagram v-if="essay.diagram" :labels="essay.diagram" class="mt-4" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import type { EssayQuestion } from '~/data/lessons/second-baccalaureate/it/assessments/types';

const props = defineProps<{
  essays: EssayQuestion[]
}>();

const open = reactive<Record<string, boolean>>({});

const allOpen = computed(() => props.essays.every(essay => open[essay.id]));

const toggleAll = () => {
  const value = !allOpen.value;
  props.essays.forEach(essay => { open[essay.id] = value; });
};
</script>
