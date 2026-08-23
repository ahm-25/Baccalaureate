<template>
  <div class="mt-8 pt-8 border-t border-slate-200">
    <div class="flex items-start gap-4">
      <div 
        class="w-12 h-12 shrink-0 rounded-full flex items-center justify-center shadow-sm"
        :class="isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'"
      >
        <Check v-if="isCorrect" size="24" stroke-width="3" />
        <X v-else size="24" stroke-width="3" />
      </div>
      
      <div class="flex-1">
        <h4 
          class="text-xl font-bold mb-2"
          :class="isCorrect ? 'text-green-600' : 'text-red-600'"
        >
          {{ isCorrect ? 'إجابة صحيحة!' : 'إجابة غير صحيحة' }}
        </h4>
        
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-700 leading-relaxed text-sm md:text-base">
          <strong class="text-primary block mb-1">لماذا؟</strong>
          {{ explanation }}
        </div>
      </div>
    </div>
    
    <div class="mt-8 flex justify-end">
      <button 
        @click="$emit('next')" 
        class="bg-maintext hover:bg-black text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-all transform hover:-translate-x-1"
      >
        {{ isLast ? 'عرض النتيجة' : 'السؤال التالي' }}
        <ArrowLeft size="18" stroke-width="2.5" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Check, X, ArrowLeft } from 'lucide-vue-next'

defineProps<{
  isCorrect: boolean
  explanation: string
  isLast: boolean
}>()

defineEmits<{
  (e: 'next'): void
}>()
</script>
