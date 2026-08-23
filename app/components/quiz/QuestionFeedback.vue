<template>
  <div v-if="isCorrect !== null" 
       class="mt-8 p-6 md:p-8 rounded-3xl border-2 transition-all duration-500 transform"
       :class="isCorrect ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-rose-500/10 border-rose-500/30'">
    
    <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-right">
      <div class="text-6xl animate-bounce-short" :class="isCorrect ? 'text-emerald-500' : 'text-rose-500'">
        <CheckCircle2 v-if="isCorrect" class="w-16 h-16" />
        <XCircle v-else class="w-16 h-16" />
      </div>
      <div class="flex-1">
        <h3 class="text-2xl font-black mb-3" :class="isCorrect ? 'text-emerald-600' : 'text-rose-600'">
          {{ isCorrect ? 'إجابة صحيحة! أداء رائع' : 'إجابة غير صحيحة، لا بأس' }}
        </h3>
        
        <div class="bg-surface/80 p-4 rounded-2xl mb-6 text-lg leading-relaxed text-maintext border border-border">
          <span class="font-bold block mb-1 text-sm text-mutedtext">السبب:</span>
          {{ explanation }}
        </div>
        
        <button 
          v-if="isCorrect"
          @click="$emit('next')"
          class="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-sm hover:shadow-lg hover:shadow-emerald-500/30 w-full sm:w-auto"
        >
          {{ hasNext ? 'السؤال التالي' : 'إنهاء القسم' }}
        </button>
        <button 
          v-else
          @click="$emit('retry')"
          class="px-8 py-3.5 bg-background border border-border hover:border-primary/50 text-maintext rounded-xl font-bold transition-all hover:scale-105 shadow-sm hover:shadow-md w-full sm:w-auto"
        >
          إعادة المحاولة
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircle2, XCircle } from 'lucide-vue-next'

defineProps<{
  isCorrect: boolean | null
  explanation: string
  hasNext: boolean
}>()

defineEmits(['next', 'retry'])
</script>

<style scoped>
.animate-bounce-short {
  animation: bounce-short 0.5s ease-in-out 1;
}

@keyframes bounce-short {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px) scale(1.1); }
}
</style>
