<template>
  <section id="stop-think" class="py-12">
    <div class="max-w-4xl mx-auto px-4">
      <div class="bg-amber-50 rounded-3xl border-2 border-amber-200 p-8 md:p-12 shadow-sm relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full -z-10 opacity-50"></div>
        <div class="flex items-center gap-3 mb-6">
          <span class="text-3xl">💡</span>
          <h3 class="text-2xl font-bold text-amber-900">توقف وفكر</h3>
        </div>
        <p class="text-xl text-amber-950 font-medium leading-relaxed mb-8">
          إذا لم يستطع أحد شرح سبب رفض الذكاء الاصطناعي لطلب توظيف شخص ما، فهل هذا عادل؟ أي مبدأ من مبادئ أخلاقيات الذكاء الاصطناعي مفقود؟
        </p>
        
        <button 
          @click="showAnswer = !showAnswer" 
          class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl transition-colors"
        >
          {{ showAnswer ? 'إخفاء الإجابة' : 'عرض الإجابة' }}
        </button>
        
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="showAnswer" class="mt-6 p-5 bg-white rounded-xl border border-amber-200 text-lg font-bold text-slate-800 flex items-center gap-3">
            <span class="text-indigo-600 text-2xl">🔎</span>
            الشفافية (القدرة على فهم القرار)
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const showAnswer = ref(false)
</script>
