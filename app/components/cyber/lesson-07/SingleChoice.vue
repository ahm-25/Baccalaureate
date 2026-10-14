<template>
  <div>
    <div class="space-y-2">
      <button v-for="(o, i) in options" :key="i" @click="picked === null && (picked = i)"
              class="w-full text-right p-4 rounded-xl border-2 flex items-start gap-3 transition-colors"
              :class="optionClass(i)">
        <span class="font-bold shrink-0" :class="picked !== null && i === ans ? 'text-white' : 'text-sky-700'">{{ letters[i] }}</span>
        <span class="font-medium">{{ o }}</span>
      </button>
    </div>
    <div v-if="picked !== null" class="mt-4 p-4 rounded-xl text-sm leading-relaxed"
         :class="picked === ans ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-rose-50 text-rose-900 border border-rose-200'">
      <strong>{{ picked === ans ? '✅ إجابة صحيحة.' : `❌ الإجابة الصحيحة: ${letters[ans]}.` }}</strong>
      <span v-if="explanation"> {{ explanation }}</span>
      <button @click="picked = null" class="mr-2 text-sky-700 underline">إعادة</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  options: { type: Array, required: true },
  ans: { type: Number, required: true },
  explanation: { type: String, default: '' },
})

const letters = ['أ', 'ب', 'ج', 'د']
const picked = ref(null)

function optionClass(i) {
  if (picked.value === null) return 'bg-white border-slate-200 text-slate-700 hover:border-sky-400'
  if (i === props.ans) return 'bg-emerald-500 border-emerald-500 text-white'
  if (i === picked.value) return 'bg-rose-50 border-rose-400 text-rose-900'
  return 'bg-white border-slate-100 text-slate-400'
}
</script>
