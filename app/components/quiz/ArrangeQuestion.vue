<template>
  <div class="flex flex-col gap-6 mt-6">
    <p class="text-slate-500 text-sm">اسحب العناصر لترتيبها بالشكل الصحيح.</p>
    
    <div class="flex flex-col gap-3">
      <div 
        v-for="(item, index) in currentItems" 
        :key="item.id"
        draggable="true"
        @dragstart="onDragStart($event, index)"
        @dragover.prevent="onDragOver($event, index)"
        @drop.prevent="onDrop($event, index)"
        @dragend="onDragEnd"
        class="p-4 md:p-5 rounded-xl border-border border-2 bg-surface shadow-sm relative text-maintext transition-all font-bold flex items-center gap-4"
        :class="[
          isAnswered ? (isCorrect ? 'border-emerald-500 border-b-[6px]' : 'border-rose-500 border-b-[6px]') : 
          draggedIndex === index ? 'opacity-50 border-primary border-dashed' : 
          dragOverIndex === index ? 'border-primary border-t-8' : 'border-b-[6px] hover:border-primary/50 cursor-grab active:cursor-grabbing active:translate-y-1 active:border-b-2'
        ]"
      >
        <div class="w-10 h-10 rounded-xl bg-background text-mutedtext flex items-center justify-center font-black text-lg shrink-0 shadow-inner">
          {{ index + 1 }}
        </div>
        <div class="flex-1 font-medium text-lg">
          {{ item.text }}
        </div>
        <div class="text-slate-400 opacity-50 cursor-grab" v-if="!isAnswered">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line></svg>
        </div>
      </div>
    </div>

    <button 
      v-if="!isAnswered"
      @click="checkAnswers"
      class="mt-4 px-8 py-4 rounded-xl font-bold transition-all text-white w-full md:w-auto self-center bg-primary hover:bg-primary-600 hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1"
    >
      تحقق من الترتيب
    </button>

    <!-- Correct Answer Feedback (Shown only if wrong) -->
    <div v-if="isAnswered && !isCorrect" class="mt-6 p-6 rounded-2xl bg-rose-500/5 border-2 border-rose-500/20 animate-fade-in shadow-sm">
      <h4 class="font-bold text-rose-600 mb-6 flex items-center gap-2 text-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        الترتيب الصحيح هو:
      </h4>
      <div class="flex flex-col gap-3 relative">
        <!-- Connecting Line -->
        <div class="absolute right-[19px] top-4 bottom-4 w-[2px] bg-rose-500/20 z-0"></div>
        
        <div v-for="(item, index) in question.items" :key="'correct-' + index" class="flex items-center gap-4 text-maintext font-bold relative z-10">
          <span class="w-10 h-10 rounded-xl bg-background border-2 border-rose-500/20 text-rose-600 flex items-center justify-center text-lg font-black shrink-0 shadow-sm">{{ index + 1 }}</span>
          <span class="bg-background border-2 border-rose-500/10 rounded-xl px-5 py-3 flex-1 shadow-sm">{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import type { ArrangeQuestion } from '~/data/lessons/second-baccalaureate/it/lesson-04-questions'

const props = defineProps<{
  question: ArrangeQuestion
  isAnswered: boolean
}>()

const emit = defineEmits<{
  (e: 'answer', isCorrect: boolean): void
}>()

interface ArrangeItem {
  id: string
  text: string
  originalIndex: number
}

const currentItems = ref<ArrangeItem[]>([])
const draggedIndex = ref<number | null>(null)
const dragOverIndex = ref<number | null>(null)
const isCorrect = ref(false)

const initializeState = () => {
  const items = props.question.items.map((text, i) => ({ 
    id: `item-${i}-${Math.random().toString(36).substring(7)}`,
    text, 
    originalIndex: i 
  }))
  
  // Shuffle items
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  
  currentItems.value = items
  isCorrect.value = false
}

watch(() => props.question.id, initializeState)
onMounted(initializeState)

const onDragStart = (event: DragEvent, index: number) => {
  if (props.isAnswered) {
    event.preventDefault()
    return
  }
  draggedIndex.value = index
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = 'move'
  }
}

const onDragOver = (event: DragEvent, index: number) => {
  if (props.isAnswered || draggedIndex.value === null) return
  if (draggedIndex.value !== index) {
    dragOverIndex.value = index
  }
}

const onDrop = (event: DragEvent, index: number) => {
  if (props.isAnswered || draggedIndex.value === null) return
  
  const items = [...currentItems.value]
  const draggedItem = items[draggedIndex.value]
  
  // Remove from old position
  items.splice(draggedIndex.value, 1)
  // Insert at new position
  items.splice(index, 0, draggedItem)
  
  currentItems.value = items
  dragOverIndex.value = null
  draggedIndex.value = null
}

const onDragEnd = () => {
  dragOverIndex.value = null
  draggedIndex.value = null
}

const checkAnswers = () => {
  // Check if sorted by originalIndex
  const correct = currentItems.value.every((item, index) => item.originalIndex === index)
  isCorrect.value = correct
  emit('answer', correct)
}
</script>
