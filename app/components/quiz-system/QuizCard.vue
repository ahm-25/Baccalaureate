<template>
  <div class="mb-8">
    <h3 class="text-2xl md:text-3xl font-bold mb-6 text-maintext leading-relaxed">
      {{ question.question }}
    </h3>
    
    <!-- Multiple Choice / True-False / Scenario -->
    <div v-if="isMultipleChoice" class="space-y-4">
      <button 
        v-for="option in (question as MultipleChoiceQuestion).options" 
        :key="option.id"
        @click="selectOption(option.id)"
        :disabled="isAnswered"
        class="w-full text-right p-5 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between"
        :class="[
          selectedId === option.id 
            ? 'border-primary bg-primary/5 shadow-md' 
            : 'border-slate-200 hover:border-primary/50 hover:bg-slate-50',
          isAnswered && (question as MultipleChoiceQuestion).correctOptionId === option.id
            ? '!border-green-500 !bg-green-50' : '',
          isAnswered && selectedId === option.id && (question as MultipleChoiceQuestion).correctOptionId !== option.id
            ? '!border-red-500 !bg-red-50' : '',
          isAnswered ? 'cursor-default' : 'cursor-pointer'
        ]"
      >
        <span class="text-lg font-semibold text-maintext">{{ option.text }}</span>
        <div 
          class="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors"
          :class="[
            selectedId === option.id ? 'border-primary' : 'border-slate-300',
            isAnswered && (question as MultipleChoiceQuestion).correctOptionId === option.id ? '!border-green-500' : '',
            isAnswered && selectedId === option.id && (question as MultipleChoiceQuestion).correctOptionId !== option.id ? '!border-red-500' : ''
          ]"
        >
          <div v-if="selectedId === option.id" class="w-3 h-3 rounded-full" 
               :class="[
                 isAnswered && (question as MultipleChoiceQuestion).correctOptionId === option.id ? 'bg-green-500' : '',
                 isAnswered && selectedId === option.id && (question as MultipleChoiceQuestion).correctOptionId !== option.id ? 'bg-red-500' : '',
                 !isAnswered ? 'bg-primary' : ''
               ]">
          </div>
        </div>
      </button>
    </div>

    <!-- Matching -->
    <div v-else-if="isMatching" class="space-y-6">
      <p class="text-sm text-mutedtext mb-4"><Info size="16" class="inline mr-1"/> اضغط على العنصر ثم اختر التصنيف المناسب له</p>
      
      <!-- Categories (Targets) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div 
          v-for="cat in (question as MatchingQuestion).categories" 
          :key="cat.id"
          @click="selectCategory(cat.id)"
          class="p-4 rounded-xl border-2 border-dashed transition-all"
          :class="[
            activeItem && !isAnswered ? 'border-primary bg-primary/5 cursor-pointer hover:bg-primary/10' : 'border-slate-300 bg-slate-50',
            isAnswered ? 'border-solid border-slate-200' : ''
          ]"
        >
          <h4 class="font-bold text-center text-primary mb-3">{{ cat.title }}</h4>
          <div class="space-y-2 min-h-[50px]">
            <div 
              v-for="match in getMatchesForCategory(cat.id)" 
              :key="match.id"
              class="p-2 text-sm bg-white border border-slate-200 rounded-lg text-center shadow-sm flex items-center justify-between"
              :class="isAnswered ? (match.matchId === cat.id ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : ''"
            >
              <span>{{ match.item }}</span>
              <button v-if="!isAnswered" @click.stop="undoMatch(match.id)" class="text-slate-400 hover:text-red-500"><X size="14"/></button>
            </div>
          </div>
        </div>
      </div>

      <!-- Items to Match -->
      <div class="flex flex-wrap gap-3">
        <button 
          v-for="item in unmatchedItems" 
          :key="item.id"
          @click="selectItem(item.id)"
          :disabled="isAnswered"
          class="px-4 py-2 rounded-full border-2 transition-all font-semibold"
          :class="[
            activeItem === item.id ? 'border-primary bg-primary text-white shadow-md' : 'border-slate-200 bg-white hover:border-primary/50 text-maintext',
            isAnswered ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
          ]"
        >
          {{ item.item }}
        </button>
      </div>
      
      <div v-if="unmatchedItems.length === 0 && !isAnswered" class="text-center mt-6">
        <button @click="submitMatching" class="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1">
          تأكيد الإجابات
        </button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Info, X } from 'lucide-vue-next'
import type { QuizQuestion, MultipleChoiceQuestion, MatchingQuestion } from '~/types/quiz'

const props = defineProps<{
  question: QuizQuestion
  isAnswered: boolean
}>()

const emit = defineEmits<{
  (e: 'answer', isCorrect: boolean): void
}>()

const isMultipleChoice = computed(() => {
  return ['multiple-choice', 'true-false', 'scenario'].includes(props.question.type)
})

const isMatching = computed(() => {
  return props.question.type === 'matching'
})

// --- State for Multiple Choice ---
const selectedId = ref<string | null>(null)

const selectOption = (id: string) => {
  if (props.isAnswered) return
  selectedId.value = id
  const isCorrect = id === (props.question as MultipleChoiceQuestion).correctOptionId
  emit('answer', isCorrect)
}

// --- State for Matching ---
const activeItem = ref<string | null>(null)
const userMatches = ref<Record<string, string>>({}) // itemId -> categoryId

// Reset state when question changes
watch(() => props.question.id, () => {
  selectedId.value = null
  activeItem.value = null
  userMatches.value = {}
})

const getMatchesForCategory = (catId: string) => {
  if (!isMatching.value) return []
  const q = props.question as MatchingQuestion
  // Find all items that user has assigned to this category
  const matchedIds = Object.keys(userMatches.value).filter(id => userMatches.value[id] === catId)
  return q.items.filter(item => matchedIds.includes(item.id))
}

const unmatchedItems = computed(() => {
  if (!isMatching.value) return []
  const q = props.question as MatchingQuestion
  return q.items.filter(item => !userMatches.value[item.id])
})

const selectItem = (id: string) => {
  if (props.isAnswered) return
  activeItem.value = activeItem.value === id ? null : id
}

const selectCategory = (catId: string) => {
  if (props.isAnswered || !activeItem.value) return
  userMatches.value[activeItem.value] = catId
  activeItem.value = null
}

const undoMatch = (itemId: string) => {
  if (props.isAnswered) return
  const newMatches = { ...userMatches.value }
  delete newMatches[itemId]
  userMatches.value = newMatches
}

const submitMatching = () => {
  if (props.isAnswered) return
  const q = props.question as MatchingQuestion
  let allCorrect = true
  
  for (const item of q.items) {
    if (userMatches.value[item.id] !== item.matchId) {
      allCorrect = false
      break
    }
  }
  
  // Show correct answers immediately upon answer if they failed
  if (!allCorrect) {
    for (const item of q.items) {
      userMatches.value[item.id] = item.matchId
    }
  }
  
  emit('answer', allCorrect)
}
</script>
