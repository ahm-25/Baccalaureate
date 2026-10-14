<template>
  <div>
    <div class="space-y-3">
      <div v-for="(item, i) in items" :key="i"
           class="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col md:flex-row md:items-center gap-3">
        <p class="flex-1 text-slate-800 font-medium leading-relaxed">
          <span class="font-bold text-sky-700 ml-2">{{ letters[i] }}</span>{{ item.text }}
        </p>
        <div class="flex flex-wrap gap-2 shrink-0">
          <button v-for="(o, j) in options" :key="j" @click="pick(i, j)"
                  class="px-3 h-10 rounded-xl border-2 font-bold text-sm transition-colors"
                  :class="optionClass(i, j)">
            {{ o }}
          </button>
        </div>
      </div>
    </div>
    <p v-if="answeredAll" class="mt-4 font-bold" :class="score === items.length ? 'text-emerald-700' : 'text-amber-700'">
      النتيجة: {{ score }} / {{ items.length }}
      <button @click="reset" class="mr-3 text-sm text-sky-700 underline">إعادة المحاولة</button>
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// items: { text, ans }[] — ans is the index of the correct option.
const props = defineProps({
  items: { type: Array, required: true },
  options: { type: Array, required: true },
})

const letters = ['أ', 'ب', 'ج', 'د', 'هـ', 'و']
const picks = ref(props.items.map(() => null))

const answeredAll = computed(() => picks.value.every(p => p !== null))
const score = computed(() => picks.value.filter((p, i) => p === props.items[i].ans).length)

function pick(i, j) {
  if (picks.value[i] !== null) return
  picks.value[i] = j
}

function reset() {
  picks.value = props.items.map(() => null)
}

function optionClass(i, j) {
  const p = picks.value[i]
  if (p === null) return 'bg-white border-slate-200 text-slate-600 hover:border-sky-400'
  if (j === props.items[i].ans) return 'bg-emerald-500 border-emerald-500 text-white'
  if (j === p) return 'bg-rose-500 border-rose-500 text-white'
  return 'bg-white border-slate-100 text-slate-300'
}
</script>
