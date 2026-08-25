<template>
  <div class="flex flex-col gap-6 mt-6 font-arabic text-right">
    <p class="text-slate-500 text-sm">اسحب العناصر من الصندوق بالأسفل وضعها في العمود المناسب لها.</p>

    <!-- Category Columns -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="cat in question.categories" 
        :key="cat.id"
        class="rounded-2xl border-2 border-dashed p-5 min-h-[180px] flex flex-col gap-3 transition-colors relative"
        :class="[
          isAnswered ? (isColumnCorrect(cat.id) ? 'border-emerald-500 bg-emerald-50/50' : 'border-rose-500 bg-rose-50/50') :
          dragOverCategoryId === cat.id ? 'border-primary bg-primary/5' : 'border-border bg-background'
        ]"
        @dragover.prevent="dragOverCategoryId = cat.id"
        @dragleave.prevent="dragOverCategoryId = null"
        @drop.prevent="onDrop($event, cat.id)"
      >
        <h5 class="font-black text-lg text-maintext text-center border-b border-border/60 pb-2 mb-2">
          {{ cat.title }}
        </h5>

        <!-- Dropped Items in this category -->
        <div class="flex flex-col gap-2 flex-1">
          <div 
            v-for="item in getPlacedItems(cat.id)" 
            :key="item.id"
            class="p-3 bg-surface rounded-xl border border-border shadow-sm flex items-center justify-between text-base font-bold text-primary relative animate-fade-in"
          >
            <span class="flex-1 text-center">{{ item.text }}</span>
            <button 
              v-if="!isAnswered" 
              @click="removePlacement(item.id)" 
              class="w-6 h-6 rounded-full bg-background hover:bg-rose-100 text-mutedtext hover:text-rose-500 flex items-center justify-center transition-colors text-xs shrink-0 ml-1"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Items Pool (Unplaced Items) -->
    <div v-if="unplacedItems.length > 0 && !isAnswered" class="bg-slate-50 rounded-2xl p-6 border-2 border-border/80 mt-4">
      <h5 class="text-sm font-bold text-mutedtext mb-4">العناصر المراد تصنيفها:</h5>
      <div class="flex flex-wrap gap-3">
        <div
          v-for="item in unplacedItems"
          :key="item.id"
          draggable="true"
          @dragstart="onDragStart($event, item.id)"
          class="px-4 py-3 bg-white border-2 border-border border-b-4 hover:border-primary/50 rounded-xl cursor-grab active:cursor-grabbing text-maintext font-bold shadow-sm transition-all active:translate-y-0.5 active:border-b-2"
        >
          {{ item.text }}
        </div>
      </div>
    </div>

    <!-- Submit Button -->
    <button 
      v-if="!isAnswered"
      @click="checkAnswers"
      :disabled="!isAllClassified"
      class="mt-4 px-8 py-4 rounded-xl font-bold transition-all text-white w-full md:w-auto self-center"
      :class="isAllClassified ? 'bg-primary hover:bg-primary/95 hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5' : 'bg-slate-300 cursor-not-allowed'"
    >
      تحقق من الإجابة
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { ClassificationQuestion } from '~/types/quiz'

const props = defineProps<{
  question: ClassificationQuestion
  isAnswered: boolean
}>()

const emit = defineEmits<{
  (e: 'answer', isCorrect: boolean): void
}>()

// placement: itemId -> categoryId
const placements = ref<Record<string, string>>({})
const dragOverCategoryId = ref<string | null>(null)
const isCorrect = ref(false)

const initializeState = () => {
  placements.value = {}
  dragOverCategoryId.value = null
  isCorrect.value = false
}

initializeState()
watch(() => props.question.id, initializeState)

const unplacedItems = computed(() => {
  return props.question.items.filter(item => !placements.value[item.id])
})

const getPlacedItems = (catId: string) => {
  return props.question.items.filter(item => placements.value[item.id] === catId)
}

const isAllClassified = computed(() => {
  return Object.keys(placements.value).length === props.question.items.length
})

const isColumnCorrect = (catId: string) => {
  // A column is correct if all items placed in it actually belong to it
  const placedItems = getPlacedItems(catId)
  if (placedItems.length === 0) return true
  return placedItems.every(item => item.categoryId === catId)
}

const onDragStart = (event: DragEvent, itemId: string) => {
  if (props.isAnswered) return
  event.dataTransfer?.setData('text/plain', itemId)
}

const onDrop = (event: DragEvent, catId: string) => {
  if (props.isAnswered) return
  dragOverCategoryId.value = null
  const itemId = event.dataTransfer?.getData('text/plain')
  if (itemId) {
    placements.value[itemId] = catId
  }
}

const removePlacement = (itemId: string) => {
  if (props.isAnswered) return
  delete placements.value[itemId]
}

const checkAnswers = () => {
  if (!isAllClassified.value) return
  
  // Verify that all items are placed in their correct categoryId
  const allCorrect = props.question.items.every(item => placements.value[item.id] === item.categoryId)
  isCorrect.value = allCorrect
  emit('answer', allCorrect)
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.25s ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>
