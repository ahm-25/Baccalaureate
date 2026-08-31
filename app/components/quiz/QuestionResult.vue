<template>
  <div class="text-center p-8 md:p-12 rounded-3xl bg-background shadow-xl border border-border animate-fade-in-up">
    <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20 text-5xl shadow-inner">
      {{ percentage === 100 ? '🏆' : percentage >= 75 ? '⭐' : '💪' }}
    </div>
    
    <h2 class="text-3xl md:text-4xl font-black mb-4 text-maintext">
      {{ percentage >= 90 ? 'ممتاز جدًا 🔥' : percentage >= 75 ? 'ممتاز' : percentage >= 60 ? 'جيد' : 'راجع الدرس مرة أخرى' }}
    </h2>
    
    <p class="text-xl text-mutedtext mb-8">
      {{ percentage >= 90 ? 'أداء استثنائي! لقد استوعبت المفاهيم بشكل كامل.' : percentage >= 75 ? 'عمل رائع! أداؤك مبهر.' : percentage >= 60 ? 'جهد جيد، ولكن هناك مجال للتحسن.' : 'لا تقلق، يمكنك إعادة قراءة القسم والمحاولة مرة أخرى.' }}
    </p>
    
    <div class="flex flex-col md:flex-row justify-center gap-6 mb-10">
      <div class="bg-surface rounded-2xl p-6 border border-border min-w-[200px] shadow-sm">
        <div class="text-sm font-bold text-mutedtext mb-2 uppercase tracking-wider">النتيجة النهائية</div>
        <div class="text-5xl font-black text-primary">{{ correctCount }} / {{ totalCount }}</div>
      </div>
      
      <div class="bg-surface rounded-2xl p-6 border border-border min-w-[200px] shadow-sm">
        <div class="text-sm font-bold text-mutedtext mb-2 uppercase tracking-wider">النسبة المئوية</div>
        <div class="text-5xl font-black" :class="percentage >= 75 ? 'text-emerald-500' : 'text-amber-500'">
          {{ Math.round(percentage) }}%
        </div>
      </div>
    </div>
    
    <div v-if="wrongQuestionsCount > 0" class="mb-10 text-right bg-rose-50 dark:bg-rose-900/20 p-6 rounded-2xl border border-rose-100 dark:border-rose-900/50 inline-block w-full max-w-lg mx-auto">
      <h3 class="font-bold text-rose-800 dark:text-rose-400 mb-3 flex items-center gap-2">
        <span class="text-xl">⚠️</span> أسئلة تحتاج إلى مراجعة
      </h3>
      <p class="text-rose-600 dark:text-rose-300">
        أخطأت في إجابة {{ wrongQuestionsCount }} {{ wrongQuestionsCount === 1 ? 'سؤال' : wrongQuestionsCount <= 10 ? 'أسئلة' : 'سؤالاً' }}. يمكنك إعادة المحاولة لتحسين نتيجتك.
      </p>
    </div>
    
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button 
        @click="$emit('retry')"
        class="px-8 py-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white rounded-xl font-bold transition-all hover:scale-105"
      >
        إعادة المحاولة
      </button>
      <button 
        v-if="hasNextSection"
        @click="$emit('continue')"
        class="px-8 py-4 bg-primary hover:bg-primary-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105"
      >
        متابعة الدرس
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  totalCount: number
  correctCount: number
  wrongQuestionsCount: number
  hasNextSection?: boolean
}>()

defineEmits(['retry', 'continue'])

const percentage = computed(() => (props.correctCount / props.totalCount) * 100 || 0)
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
