<template>
  <div class="bg-white/90 backdrop-blur-xl border border-white/50 p-10 md:p-16 rounded-[2rem] text-center shadow-2xl">
    <div 
      class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border-4"
      :class="isSuccess ? 'bg-green-100 text-green-600 border-green-200' : 'bg-orange-100 text-orange-500 border-orange-200'"
    >
      <Trophy v-if="isSuccess" size="48" stroke-width="1.5" />
      <RefreshCcw v-else size="48" stroke-width="1.5" />
    </div>
    
    <h3 class="text-3xl md:text-4xl font-black mb-4" :class="isSuccess ? 'text-green-600' : 'text-orange-500'">
      {{ isSuccess ? 'أحسنت بطل!' : 'حاول مرة أخرى' }}
    </h3>
    
    <p class="text-xl text-mutedtext mb-8">
      لقد أجبت بشكل صحيح على <strong class="text-maintext text-2xl mx-1">{{ score }}</strong> من أصل {{ total }} أسئلة.
    </p>
    
    <div class="inline-block bg-slate-100 rounded-full px-6 py-2 mb-10 text-2xl font-bold text-maintext">
      {{ percentage }}%
    </div>
    
    <div class="flex flex-col md:flex-row items-center justify-center gap-4">
      <button 
        @click="$emit('retry')" 
        class="w-full md:w-auto bg-slate-100 hover:bg-slate-200 text-maintext font-bold py-4 px-8 rounded-full transition-all"
      >
        إعادة المحاولة
      </button>
      
      <button 
        v-if="isSuccess"
        @click="scrollToNextSection"
        class="w-full md:w-auto bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
      >
        الانتقال للقسم التالي
        <ArrowDown size="20" stroke-width="2.5" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Trophy, RefreshCcw, ArrowDown } from 'lucide-vue-next'

const props = defineProps<{
  score: number
  total: number
}>()

defineEmits<{
  (e: 'retry'): void
}>()

const percentage = computed(() => Math.round((props.score / props.total) * 100))
const isSuccess = computed(() => percentage.value >= 70) // Pass mark is 70%

const scrollToNextSection = () => {
  // Find the next section in the DOM based on current position
  // This is a simple implementation, it finds the next sibling section
  const currentSection = document.activeElement?.closest('section') || document.querySelector('section:hover')
  
  // A more robust way to go to next section
  // Dispatch a custom event that the parent page can handle, or just scroll down manually
  window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
}
</script>
