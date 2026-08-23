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
        class="p-4 md:p-5 rounded-xl border-2 transition-all flex items-center gap-4 bg-surface shadow-sm relative text-maintext"
        :class="[
          isAnswered ? (isCorrect ? 'border-emerald-500' : 'border-rose-500') : 
          draggedIndex === index ? 'opacity-50 border-primary border-dashed' : 
          dragOverIndex === index ? 'border-primary border-t-8' : 'border-border hover:border-primary/50 cursor-grab active:cursor-grabbing'
        ]"
      >
        <div class="w-8 h-8 rounded-full bg-background text-mutedtext flex items-center justify-center font-bold text-sm shrink-0">
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
