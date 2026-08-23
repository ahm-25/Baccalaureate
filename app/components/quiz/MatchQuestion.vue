<template>
  <div class="flex flex-col gap-6 mt-6">
    <p class="text-slate-500 text-sm">اسحب العنصر من اليسار وأسقطه فوق المفهوم المناسب له في اليمين.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      <!-- Left side (Targets) -->
      <div class="flex flex-col gap-4">
        <h4 class="font-bold text-mutedtext mb-2">المفاهيم</h4>
        <div 
          v-for="(pair, index) in question.pairs" 
          :key="'target-'+index"
          class="p-4 rounded-xl border-2 border-dashed min-h-[80px] flex items-center justify-center transition-colors relative"
          :class="[
            isAnswered ? (isCorrect ? 'border-emerald-500 bg-emerald-50/50' : 'border-rose-500 bg-rose-50/50') : 
            dragOverIndex === index ? 'border-primary bg-primary/5' : 'border-border bg-background'
          ]"
          @dragover.prevent="dragOverIndex = index"
          @dragleave.prevent="dragOverIndex = null"
          @drop.prevent="onDrop($event, index)"
        >
          <span class="font-bold text-lg text-maintext z-0 text-center">{{ pair.right }}</span>
          
          <!-- Matched Item -->
          <div v-if="matches[index] !== null" class="absolute inset-0 z-10 p-2">
            <div class="w-full h-full bg-surface rounded-lg shadow-sm border border-border flex items-center justify-center p-2 text-center text-primary font-medium animate-fade-in">
              {{ question.pairs[matches[index]!].left }}
              <button v-if="!isAnswered" @click="removeMatch(index)" class="absolute top-1 left-1 w-6 h-6 rounded-full bg-background hover:bg-rose-100 text-mutedtext hover:text-rose-500 flex items-center justify-center transition-colors">
                ✕
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right side (Draggables) -->
      <div class="flex flex-col gap-4">
        <h4 class="font-bold text-mutedtext mb-2">الأمثلة / الخيارات</h4>
        <div class="flex flex-col gap-3">
          <div 
            v-for="(item, index) in shuffledLeftItems" 
            :key="'drag-'+index"
            draggable="true"
            @dragstart="onDragStart($event, item.originalIndex)"
            class="p-4 rounded-xl border-2 border-border bg-surface shadow-sm cursor-grab active:cursor-grabbing hover:border-primary/50 text-maintext transition-colors text-center font-medium"
            :class="{ 'opacity-0 pointer-events-none': isItemMatched(item.originalIndex) }"
          >
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>

    <!-- Submit button -->
    <button 
      v-if="!isAnswered"
      @click="checkAnswers"
      :disabled="!isAllMatched"
      class="mt-4 px-8 py-4 rounded-xl font-bold transition-all text-white w-full md:w-auto self-center"
      :class="isAllMatched ? 'bg-primary hover:bg-primary-600 hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1' : 'bg-slate-300 cursor-not-allowed'"
    >
      تحقق من الإجابة
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { MatchQuestion } from '~/data/lessons/second-baccalaureate/it/lesson-04-questions'

const props = defineProps<{
  question: MatchQuestion
  isAnswered: boolean
}>()

const emit = defineEmits<{
  (e: 'answer', isCorrect: boolean): void
}>()

// matches[targetIndex] = originalItemIndex
const matches = ref<(number | null)[]>([])
const dragOverIndex = ref<number | null>(null)
const shuffledLeftItems = ref<{text: string, originalIndex: number}[]>([])
const isCorrect = ref(false)

// Seeded PRNG: the shuffle must be identical on the server and the client,
// otherwise SSR output and hydration disagree.
const seedFrom = (input: string) => {
  let h = 2166136261
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

const createRandom = (seed: number) => {
  let state = seed || 1
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0
    return state / 4294967296
  }
}

const initializeState = () => {
  matches.value = Array(props.question.pairs.length).fill(null)
  
  // Shuffle left items
  const items = props.question.pairs.map((p, i) => ({ text: p.left, originalIndex: i }))
  const random = createRandom(seedFrom(props.question.id))
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  shuffledLeftItems.value = items
  isCorrect.value = false
}

// Run during setup so the server renders the same markup the client hydrates.
initializeState()
watch(() => props.question.id, initializeState)

const isItemMatched = (originalIndex: number) => {
  return matches.value.includes(originalIndex)
}

const isAllMatched = computed(() => {
  return matches.value.every(m => m !== null)
})

const onDragStart = (event: DragEvent, originalIndex: number) => {
  if (props.isAnswered) return
  event.dataTransfer?.setData('text/plain', originalIndex.toString())
}

const onDrop = (event: DragEvent, targetIndex: number) => {
  if (props.isAnswered) return
  dragOverIndex.value = null
  const originalIndex = parseInt(event.dataTransfer?.getData('text/plain') || '-1')
  if (originalIndex >= 0) {
    // If target already has an item, swap it out
    matches.value[targetIndex] = originalIndex
  }
}

const removeMatch = (targetIndex: number) => {
  if (props.isAnswered) return
  matches.value[targetIndex] = null
}

const checkAnswers = () => {
  if (!isAllMatched.value) return
  
  // Check if every target index matches the original index
  const allCorrect = matches.value.every((match, index) => match === index)
  isCorrect.value = allCorrect
  emit('answer', allCorrect)
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>
